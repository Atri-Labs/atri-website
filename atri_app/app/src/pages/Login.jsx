import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { useImage6Cb, useImage7Cb, useImage8Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useImage9Cb, useImage11Cb, useImage12Cb, useImage13Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useImage14Cb, useImage16Cb, useImage17Cb, useImage18Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useImage19Cb, useImage20Cb, useTextBox18Cb, useTextBox19Cb, useTextBox20Cb, useImage21Cb, useImage22Cb, useImage23Cb, useImage24Cb, useTextBox21Cb, useTextBox22Cb, useTextBox23Cb, useImage25Cb, useImage26Cb, useImage27Cb, useImage28Cb, useImage29Cb, useImage30Cb, useTextBox24Cb, useTextBox25Cb, useTextBox26Cb, useImage31Cb, useImage32Cb, useImage33Cb, useImage34Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useImage35Cb, useFlex42Cb, useFlex43Cb, useFlex44Cb, useFlex45Cb, useFlex46Cb } from "../page-cbs/login";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
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
const Image16Props = useStore((state)=>state["login"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["login"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image17Props = useStore((state)=>state["login"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["login"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image18Props = useStore((state)=>state["login"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["login"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox15Props = useStore((state)=>state["login"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["login"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["login"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["login"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["login"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["login"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image19Props = useStore((state)=>state["login"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["login"]["Image19"]);
const Image19Cb = useImage19Cb()
const Image20Props = useStore((state)=>state["login"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["login"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox18Props = useStore((state)=>state["login"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["login"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["login"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["login"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["login"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["login"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Image21Props = useStore((state)=>state["login"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["login"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image22Props = useStore((state)=>state["login"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["login"]["Image22"]);
const Image22Cb = useImage22Cb()
const Image23Props = useStore((state)=>state["login"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["login"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image24Props = useStore((state)=>state["login"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["login"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox21Props = useStore((state)=>state["login"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["login"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["login"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["login"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["login"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["login"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Image25Props = useStore((state)=>state["login"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["login"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image26Props = useStore((state)=>state["login"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["login"]["Image26"]);
const Image26Cb = useImage26Cb()
const Image27Props = useStore((state)=>state["login"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["login"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image28Props = useStore((state)=>state["login"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["login"]["Image28"]);
const Image28Cb = useImage28Cb()
const Image29Props = useStore((state)=>state["login"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["login"]["Image29"]);
const Image29Cb = useImage29Cb()
const Image30Props = useStore((state)=>state["login"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["login"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox24Props = useStore((state)=>state["login"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["login"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["login"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["login"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["login"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["login"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Image31Props = useStore((state)=>state["login"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["login"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image32Props = useStore((state)=>state["login"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["login"]["Image32"]);
const Image32Cb = useImage32Cb()
const Image33Props = useStore((state)=>state["login"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["login"]["Image33"]);
const Image33Cb = useImage33Cb()
const Image34Props = useStore((state)=>state["login"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["login"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox27Props = useStore((state)=>state["login"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["login"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["login"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["login"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["login"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["login"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Image35Props = useStore((state)=>state["login"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["login"]["Image35"]);
const Image35Cb = useImage35Cb()
const Flex42Props = useStore((state)=>state["login"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["login"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex43Props = useStore((state)=>state["login"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["login"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex44Props = useStore((state)=>state["login"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["login"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex45Props = useStore((state)=>state["login"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["login"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["login"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["login"]["Flex46"]);
const Flex46Cb = useFlex46Cb()

  return (<>
  <Flex1 {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Flex1 {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex1 {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Image1 {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<TextBox1 {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Flex1>
<Flex1 {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox1 {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox1 {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Flex1>
<Flex1 {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Image1 {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<Image1 {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Image1 {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
