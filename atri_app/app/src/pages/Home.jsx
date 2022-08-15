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
import { useNavbarCb, useNavbarLeftCb, useNavbarCenterCb, useNavbarRightCb, useImage1Cb, useTextBox1Cb, useImage2Cb, useImage3Cb, useImage4Cb, useTextBox2Cb, useTextBox3Cb, useFlex5Cb, useTextBox4Cb, useTextBox5Cb, useFlex6Cb, useImage5Cb, useInput1Cb, useFlex7Cb, useFlex8Cb, useDropdown1Cb, useButton1Cb, useFlex9Cb, useTextBox6Cb, useNavbarWrapperCb, useTextBox10Cb, useImage15Cb } from "../page-cbs/Home";

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
    fetchPageProps(location.pathname).then((res)=>{
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
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const NavbarWrapperProps = useStore((state)=>state["Home"]["NavbarWrapper"]);
const NavbarWrapperIoProps = useIoStore((state)=>state["Home"]["NavbarWrapper"]);
const NavbarWrapperCb = useNavbarWrapperCb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()

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
<Flex {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Flex>
<Image {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
  </>);
}
