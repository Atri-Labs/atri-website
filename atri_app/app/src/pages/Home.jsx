import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { useNavbarCb, useNavbarLeftCb, useNavbarCenterCb, useNavbarRightCb, useImage1Cb, useTextBox1Cb, useImage2Cb, useImage3Cb, useImage4Cb, useTextBox2Cb, useTextBox3Cb, useFlex5Cb, useTextBox4Cb, useTextBox5Cb, useFlex6Cb, useImage5Cb, useInput1Cb, useFlex7Cb, useFlex8Cb, useDropdown1Cb, useButton1Cb, useNavbarWrapperCb, useImage15Cb, useFlex47Cb, useImage36Cb, useFlex48Cb, useFlex49Cb, useTextBox30Cb, useTextBox31Cb, useImage37Cb, useFlex50Cb, useImage38Cb, useTextBox32Cb, useFlex51Cb, useTextBox33Cb, useImage39Cb, useImage40Cb, useTextBox34Cb, useFlex52Cb, useTextBox35Cb, useTextBox36Cb, useImage42Cb, useImage43Cb, useTextBox37Cb, useFlex56Cb, useTextBox38Cb, useFlex57Cb, useFlex58Cb, useImage44Cb, useFlex59Cb, useTextBox39Cb, useImage45Cb, useImage46Cb, useTextBox40Cb, useFlex60Cb, useTextBox41Cb, useFlex61Cb, useFlex62Cb, useImage47Cb, useFlex63Cb, useImage48Cb, useTextBox42Cb, useTextBox43Cb, useFlex66Cb, useTextBox44Cb, useImage49Cb, useImage50Cb, useFlex67Cb, useFlex68Cb, useFlex69Cb, useMenu1Cb, useFlex70Cb, useTextBox45Cb, useTextBox46Cb, useFlex71Cb } from "../page-cbs/Home";

export default function Home() {
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
    setEffectivePropsForPage("Home")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("Home")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const NavbarProps = useStore((state)=>state["Home"]["Navbar"]);
const NavbarIoProps = useIoStore((state)=>state["Home"]["Navbar"]);
const NavbarCb = useNavbarCb()
const NavbarLeftProps = useStore((state)=>state["Home"]["NavbarLeft"]);
const NavbarLeftIoProps = useIoStore((state)=>state["Home"]["NavbarLeft"]);
const NavbarLeftCb = useNavbarLeftCb()
const NavbarCenterProps = useStore((state)=>state["Home"]["NavbarCenter"]);
const NavbarCenterIoProps = useIoStore((state)=>state["Home"]["NavbarCenter"]);
const NavbarCenterCb = useNavbarCenterCb()
const NavbarRightProps = useStore((state)=>state["Home"]["NavbarRight"]);
const NavbarRightIoProps = useIoStore((state)=>state["Home"]["NavbarRight"]);
const NavbarRightCb = useNavbarRightCb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Dropdown1Props = useStore((state)=>state["Home"]["Dropdown1"]);
const Dropdown1IoProps = useIoStore((state)=>state["Home"]["Dropdown1"]);
const Dropdown1Cb = useDropdown1Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const NavbarWrapperProps = useStore((state)=>state["Home"]["NavbarWrapper"]);
const NavbarWrapperIoProps = useIoStore((state)=>state["Home"]["NavbarWrapper"]);
const NavbarWrapperCb = useNavbarWrapperCb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Menu1Props = useStore((state)=>state["Home"]["Menu1"]);
const Menu1IoProps = useIoStore((state)=>state["Home"]["Menu1"]);
const Menu1Cb = useMenu1Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()

  return (<>
  <Flex {...NavbarWrapperProps} {...NavbarWrapperCb} {...NavbarWrapperIoProps}>
<Flex {...NavbarProps} {...NavbarCb} {...NavbarIoProps}>
<Flex {...NavbarLeftProps} {...NavbarLeftCb} {...NavbarLeftIoProps}>
<Image {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
<TextBox {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
</Flex>
<Flex {...NavbarCenterProps} {...NavbarCenterCb} {...NavbarCenterIoProps}>
<TextBox {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
</Flex>
<Flex {...NavbarRightProps} {...NavbarRightCb} {...NavbarRightIoProps}>
<Image {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
<Image {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<Image {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<Menu {...Menu1Props} {...Menu1Cb} {...Menu1IoProps}>
<Flex {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Flex {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex>
</Flex>
</Menu>
</Flex>
</Flex>
</Flex>
<Flex {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Flex {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<TextBox {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<TextBox {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
</Flex>
<Flex {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Image {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<Input {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Flex>
</Flex>
<Flex {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Dropdown {...Dropdown1Props} {...Dropdown1Cb} {...Dropdown1IoProps}/>
<Button {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Flex>
<Flex {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Flex {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Image {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<Flex {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<Image {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex>
<Flex {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<TextBox {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Flex {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Image {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<TextBox {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Image {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Flex {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<Image {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Flex>
<Flex {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<Flex {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<Flex {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<TextBox {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<Image {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Flex>
<Flex {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<Flex {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Image {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<TextBox {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Image {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
<Flex {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<TextBox {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<Image {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Flex>
<Flex {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<TextBox {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<Flex {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<TextBox {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Image {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
  </>);
}
