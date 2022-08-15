#!/usr/bin/python
import sys
from fastapi import FastAPI, Request, Form, UploadFile, Response
import importlib
import click
import json
import uvicorn
from typing import Any, List, Union
if sys.version_info >= (3, 8):
    from typing import TypedDict
else:
    from typing_extensions import TypedDict
from jsonpickle import encode

in_prod = False

def import_module(mod_name: str):
    # always import un-imported module
    mod_name_with_pkg_prefix = __package__ + mod_name
    if mod_name_with_pkg_prefix not in sys.modules:
        return importlib.import_module(mod_name, package=__package__)
    # handle already imported module
    if in_prod:
        return sys.modules[mod_name_with_pkg_prefix]
    else:
        return importlib.reload(sys.modules[mod_name_with_pkg_prefix])

class RouteDetails(TypedDict):
    atriPy: str
    mainPy: str

def getRouteDetails(route: str, routes_dir: str) -> RouteDetails:
    if route == "/":
        replaceWith = ""
    else:
        replaceWith = route.replace("/", ".")
    atriPy = "." + routes_dir + replaceWith + ".atri"
    mainPy = "." + routes_dir + replaceWith + ".main"
    routeDetails: RouteDetails = {"atriPy": atriPy, "mainPy": mainPy}
    return routeDetails

def compute_initial_state(route: RouteDetails, incoming_state):
    atri_py = route["atriPy"]
    atri_mod = import_module(atri_py)
    Atri = getattr(atri_mod, "Atri")
    atri_obj = Atri(incoming_state)
    main_py = route["mainPy"]
    main_mod = import_module(main_py)
    init_state = getattr(main_mod, "init_state")
    init_state(atri_obj)
    return atri_obj

def compute_page_request(route: RouteDetails, incoming_state, req: Request, res: Response):
    atri_py = route["atriPy"]
    atri_mod = import_module(atri_py)
    Atri = getattr(atri_mod, "Atri")
    atri_obj = Atri(incoming_state)
    main_py = route["mainPy"]
    main_mod = import_module(main_py)
    handle_page_request = getattr(main_mod, "handle_page_request")
    handle_page_request(atri_obj, req, res)
    return atri_obj

def compute_new_state(route: RouteDetails, incoming_state, event, req: Request, res: Response):
    atri_py = route["atriPy"]
    atri_mod = import_module(atri_py)
    Atri = getattr(atri_mod, "Atri")
    atri_obj = Atri(incoming_state)
    getattr(atri_obj, "set_event")(event)
    main_py = route["mainPy"]
    main_mod = import_module(main_py)
    handle_event = getattr(main_mod, "handle_event")
    handle_event(atri_obj, req, res)
    delattr(atri_obj, "event_data")
    return atri_obj

def merge_files_with_atri_obj(atri: Any, filesMetadata: List[dict], files: Union[List[UploadFile], None]):
    curr_start = 0
    for meta in filesMetadata:
        count = meta["count"]
        selector = meta["selector"]
        alias = meta["alias"]
        curr_obj = getattr(atri, alias)
        for index, curr_sel in enumerate(selector):
            if index == len(selector) - 1:
                setattr(curr_obj, curr_sel, files[curr_start:count])
            else:
                curr_obj = getattr(curr_obj, curr_sel)
        curr_start = curr_start + count

def compute_new_state_with_files(route: RouteDetails, incoming_state, event, filesMetadata: List[dict], files: Union[List[UploadFile], None]):
    atri_py = route["atriPy"]
    atri_mod = import_module(atri_py)
    Atri = getattr(atri_mod, "Atri")
    atri_obj = Atri(incoming_state)
    getattr(atri_obj, "set_event")(event)
    if len(filesMetadata) > 0:
        merge_files_with_atri_obj(atri_obj, filesMetadata, files)
    main_py = route["mainPy"]
    main_mod = import_module(main_py)
    handle_event = getattr(main_mod, "handle_event")
    handle_event(atri_obj)
    delattr(atri_obj, "event_data")
    return atri_obj

@click.group()
@click.option("--dir", default="routes", help="relative path for directory containing controller for each route")
@click.pass_context
def main(ctx, dir):
    ctx.obj = {"dir": dir}

@main.command("serve")
@click.option("--port", default="4007")
@click.option("--host", default="0.0.0.0")
@click.option("--prod", is_flag=True, default=False, show_default=True)
@click.pass_obj
def serve(obj, port, host, prod):
    global in_prod
    in_prod = prod

    app = FastAPI()

    @app.post("/init")
    async def get_init_state(req: Request):
        req_dict = await req.json()
        route = req_dict["route"]
        incoming_state = req_dict["state"]
        return compute_initial_state(route, incoming_state)

    @app.post("/handle-page-request")
    async def handle_page_request(req: Request, res: Response):
        req_dict = await req.json()
        route = req_dict["route"]
        state = req_dict["state"]
        routeDetails = getRouteDetails(route, obj["dir"])
        return compute_page_request(routeDetails, state, req, res)

    @app.post("/event")
    async def handle_event(req: Request, res: Response):
        req_dict = await req.json()
        route = req_dict["route"]
        state = req_dict["state"]
        event_data = req_dict["eventData"]
        callback_name = req_dict["callbackName"]
        alias = req_dict["alias"]
        event = {"event_data": event_data, "callback_name": callback_name, "alias": alias}
        routeDetails = getRouteDetails(route, obj["dir"])
        return compute_new_state(routeDetails, state, event, req, res)

    @app.post("/event-in-form-handler")
    async def handle_event_with_form(
        files: Union[List[UploadFile], None] = None,
        alias: str = Form(),
        pageRoute: str = Form(),
        callbackName: str = Form(),
        eventData: str = Form(),
        pageState: str = Form(),
        filesMetadata: str = Form()
        ):
        filesMetadataArr = json.loads(filesMetadata)
        event = {"event_data": json.loads(eventData), "callback_name": callbackName, "alias": alias}
        routeDetails = getRouteDetails(pageRoute, obj["dir"])
        return compute_new_state_with_files(routeDetails, json.loads(pageState), event, filesMetadataArr, files)

    uvicorn.run(app, host=host, port=int(port))

@main.command("compute")
@click.option("--route", required=True)
@click.option("--state", required=True)
@click.pass_obj
def compute(obj, route, state):
    incoming_state = json.loads(state)
    routeDetails = getRouteDetails(route, obj["dir"])
    updated_state = compute_initial_state(routeDetails, incoming_state)
    print(encode({"statusCode": 200, "state": updated_state}, unpicklable=False))

if __name__ == '__main__':
    main()