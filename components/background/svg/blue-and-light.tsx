import type { FC } from "react";
import type { IBgSvg } from "../types";

const Bg_BlueAndLight: FC<IBgSvg> = ({ ssx }) => {
  return (
    <svg width="1920" height="87" viewBox="0 0 1920 87" fill="none" xmlns="http://www.w3.org/2000/svg" sx={ssx}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0V87L1920 0H0Z" fill="#05386B"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M1920 87V0L0 87H1920Z" fill="#D8EBFF"/>
    </svg>
  )
}

export default Bg_BlueAndLight