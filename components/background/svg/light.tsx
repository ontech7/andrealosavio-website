import type { FC } from "react";
import type { IBgSvg } from "../types";

const Bg_Light: FC<IBgSvg> = ({ ssx }) => {
  return (
    <svg width="1920" height="171" viewBox="0 0 1920 171" fill="none" xmlns="http://www.w3.org/2000/svg" sx={ssx}>
      <path d="M0 0H1920L0 171V0Z" fill="#D8EBFF"/>
    </svg>
  )
}

export default Bg_Light;