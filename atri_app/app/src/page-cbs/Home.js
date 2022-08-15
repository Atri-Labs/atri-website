import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useNavbarCb() {

	return {  }
}
export function useNavbarLeftCb() {

	return {  }
}
export function useNavbarCenterCb() {

	return {  }
}
export function useNavbarRightCb() {

	return {  }
}
export function useImage1Cb() {

	return {  }
}
export function useTextBox1Cb() {

	return {  }
}
export function useImage2Cb() {

	return {  }
}
export function useImage3Cb() {

	return {  }
}
export function useImage4Cb() {

	return {  }
}
export function useTextBox2Cb() {

	return {  }
}
export function useTextBox3Cb() {

	return {  }
}
export function useFlex5Cb() {

	return {  }
}
export function useTextBox4Cb() {

	return {  }
}
export function useTextBox5Cb() {

	return {  }
}
export function useFlex6Cb() {

	return {  }
}
export function useImage5Cb() {

	return {  }
}
export function useInput1Cb() {
	const onChange = useCallback(callbackFactory("Input1", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	return { onChange }
}
export function useFlex7Cb() {

	return {  }
}
export function useFlex8Cb() {

	return {  }
}
export function useDropdown1Cb() {
	const onChange = useCallback(callbackFactory("Dropdown1", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "selectedValue"
      ]
    }
  ]
}), [])
	return { onChange }
}
export function useButton1Cb() {
	const onClick = useCallback(callbackFactory("Button1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex9Cb() {

	return {  }
}
export function useTextBox6Cb() {

	return {  }
}
export function useNavbarWrapperCb() {

	return {  }
}
export function useTextBox10Cb() {

	return {  }
}
export function useImage15Cb() {

	return {  }
}