import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { useImage6Cb, useImage7Cb, useImage8Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useImage9Cb, useFlex14Cb, useFlex15Cb, useFlex16Cb, useFlex17Cb, useFlex18Cb } from "../page-cbs/login";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url, { replace: true });
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("login")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("login")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Image6Props = useStore((state)=>state["login"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["login"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image7Props = useStore((state)=>state["login"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["login"]["Image7"]);
const Image7Cb = useImage7Cb()
const Image8Props = useStore((state)=>state["login"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["login"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox7Props = useStore((state)=>state["login"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["login"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["login"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["login"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["login"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["login"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Image9Props = useStore((state)=>state["login"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["login"]["Image9"]);
const Image9Cb = useImage9Cb()
const Flex14Props = useStore((state)=>state["login"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["login"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["login"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["login"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex16Props = useStore((state)=>state["login"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["login"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex17Props = useStore((state)=>state["login"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["login"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["login"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["login"]["Flex18"]);
const Flex18Cb = useFlex18Cb()

  return (<>
  <Flex1 {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}/>
<Flex1 {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Flex1 {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image1 {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox1 {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
</Flex1>
<Flex1 {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<TextBox1 {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox1 {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex1>
<Flex1 {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image1 {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<Image1 {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<Image1 {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex1>
</Flex1>
  </>);
}
