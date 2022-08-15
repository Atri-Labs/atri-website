import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { useImage6Cb, useImage7Cb, useImage8Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useImage9Cb, useFlex18Cb, useImage11Cb, useImage12Cb, useImage13Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useImage14Cb, useFlex20Cb, useFlex21Cb, useFlex22Cb, useFlex23Cb } from "../page-cbs/login";

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
const Flex18Props = useStore((state)=>state["login"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["login"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Image11Props = useStore((state)=>state["login"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["login"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image12Props = useStore((state)=>state["login"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["login"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image13Props = useStore((state)=>state["login"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["login"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox12Props = useStore((state)=>state["login"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["login"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["login"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["login"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["login"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["login"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Image14Props = useStore((state)=>state["login"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["login"]["Image14"]);
const Image14Cb = useImage14Cb()
const Flex20Props = useStore((state)=>state["login"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["login"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex21Props = useStore((state)=>state["login"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["login"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["login"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["login"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["login"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["login"]["Flex23"]);
const Flex23Cb = useFlex23Cb()

  return (<>
  <Flex1 {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Flex1 {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Flex1 {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Image1 {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox1 {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Flex1>
<Flex1 {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<TextBox1 {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox1 {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex1>
<Flex1 {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Image1 {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Image1 {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<Image1 {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
