import type { FC } from "react";
import type { IBgSvg } from "../types";

const Bg_SfumatoLight: FC<IBgSvg> = ({ ssx }) => {
  return (
    <svg width="1920" height="121" viewBox="0 0 1920 121" fill="none" xmlns="http://www.w3.org/2000/svg" sx={ssx}>
      <rect width="1920" height="121" fill="url(#paint0_linear_269_644)"/>
      <defs>
      <linearGradient id="paint0_linear_269_644" x1="960" y1="0" x2="960" y2="121" gradientUnits="userSpaceOnUse">
      <stop stopColor="#D8EBFF"/>
      <stop offset="1" stopColor="#D8EBFF" stop-opacity="0"/>
      </linearGradient>
      </defs>
    </svg>
  )
}

export default Bg_SfumatoLight;