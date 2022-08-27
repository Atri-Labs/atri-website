import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu1 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useImage6Cb, useImage7Cb, useImage8Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useImage9Cb, useImage11Cb, useImage12Cb, useImage13Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useImage14Cb, useImage16Cb, useImage17Cb, useImage18Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useImage19Cb, useImage20Cb, useTextBox18Cb, useTextBox19Cb, useTextBox20Cb, useImage21Cb, useImage22Cb, useImage23Cb, useImage24Cb, useTextBox21Cb, useTextBox22Cb, useTextBox23Cb, useImage25Cb, useImage26Cb, useImage27Cb, useImage28Cb, useImage29Cb, useImage30Cb, useTextBox24Cb, useTextBox25Cb, useTextBox26Cb, useImage31Cb, useImage32Cb, useImage33Cb, useImage34Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useImage35Cb, useFlex72Cb, useFlex73Cb, useImage51Cb, useTextBox47Cb, useTextBox48Cb, useFlex74Cb, useFlex75Cb, useMenu2Cb, useImage52Cb, useImage53Cb, useImage54Cb, useTextBox49Cb, useTextBox50Cb, useTextBox51Cb, useImage55Cb, useFlex76Cb, useFlex77Cb, useFlex78Cb, useFlex79Cb, useFlex80Cb, useFlex81Cb, useImage56Cb, useTextBox52Cb, useFlex82Cb, useFlex83Cb, useTextBox53Cb, useTextBox54Cb, useFlex84Cb, useTextBox55Cb, useFlex85Cb, useTextBox56Cb, useInput2Cb, useFlex86Cb, useButton2Cb, useInput3Cb, useTextBox57Cb, useFlex87Cb } from "../page-cbs/login";

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
const Flex72Props = useStore((state)=>state["login"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["login"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["login"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["login"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Image51Props = useStore((state)=>state["login"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["login"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox47Props = useStore((state)=>state["login"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["login"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["login"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["login"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Flex74Props = useStore((state)=>state["login"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["login"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["login"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["login"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Menu2Props = useStore((state)=>state["login"]["Menu2"]);
const Menu2IoProps = useIoStore((state)=>state["login"]["Menu2"]);
const Menu2Cb = useMenu2Cb()
const Image52Props = useStore((state)=>state["login"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["login"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image53Props = useStore((state)=>state["login"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["login"]["Image53"]);
const Image53Cb = useImage53Cb()
const Image54Props = useStore((state)=>state["login"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["login"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox49Props = useStore((state)=>state["login"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["login"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["login"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["login"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["login"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["login"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Image55Props = useStore((state)=>state["login"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["login"]["Image55"]);
const Image55Cb = useImage55Cb()
const Flex76Props = useStore((state)=>state["login"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["login"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["login"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["login"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["login"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["login"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex79Props = useStore((state)=>state["login"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["login"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex80Props = useStore((state)=>state["login"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["login"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex81Props = useStore((state)=>state["login"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["login"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Image56Props = useStore((state)=>state["login"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["login"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox52Props = useStore((state)=>state["login"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["login"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Flex82Props = useStore((state)=>state["login"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["login"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex83Props = useStore((state)=>state["login"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["login"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const TextBox53Props = useStore((state)=>state["login"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["login"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["login"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["login"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Flex84Props = useStore((state)=>state["login"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["login"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const TextBox55Props = useStore((state)=>state["login"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["login"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Flex85Props = useStore((state)=>state["login"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["login"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const TextBox56Props = useStore((state)=>state["login"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["login"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Input2Props = useStore((state)=>state["login"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["login"]["Input2"]);
const Input2Cb = useInput2Cb()
const Flex86Props = useStore((state)=>state["login"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["login"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Button2Props = useStore((state)=>state["login"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["login"]["Button2"]);
const Button2Cb = useButton2Cb()
const Input3Props = useStore((state)=>state["login"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["login"]["Input3"]);
const Input3Cb = useInput3Cb()
const TextBox57Props = useStore((state)=>state["login"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["login"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Flex87Props = useStore((state)=>state["login"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["login"]["Flex87"]);
const Flex87Cb = useFlex87Cb()

  return (<>
  <Flex1 {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Flex1 {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Image1 {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
</Flex1>
<Flex1 {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Flex1 {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Flex1 {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Image1 {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<TextBox1 {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex1>
<Flex1 {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox1 {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox1 {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex1>
<Flex1 {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Image1 {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<Image1 {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<Image1 {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
<Menu1 {...Menu2Props} {...Menu2Cb} {...Menu2IoProps}>
<Flex1 {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Flex1 {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<TextBox1 {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox1 {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Flex1>
</Flex1>
</Menu1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Flex1 {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<Image1 {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<TextBox1 {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex1>
<Flex1 {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Flex1 {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<TextBox1 {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<Flex1 {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<TextBox1 {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox1 {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Flex1>
</Flex1>
<Flex1 {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<TextBox1 {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Input1 {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Flex1>
<Flex1 {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<TextBox1 {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<Input1 {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Flex1>
<Button1 {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
