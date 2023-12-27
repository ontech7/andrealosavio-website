import { ThemeUIStyleObject } from "@theme-ui/core";

export default function Bg_Hero({ ssx }: { ssx: ThemeUIStyleObject}) {
  return (
    <svg width="1920" height="204" viewBox="0 0 1920 204" fill="none" xmlns="http://www.w3.org/2000/svg" sx={ssx}>
      <path d="M1920 204L728 126.506L0 204H1920Z" fill="#D8EBFF"/>
      <path d="M728 126.506L1920 0V204L728 126.506Z" fill="url(#paint0_linear_163_152)"/>
      <path d="M0 0H1920L0 204V0Z" fill="#05386B"/>
      <defs>
      <linearGradient id="paint0_linear_163_152" x1="533.065" y1="107.146" x2="1735.95" y2="-392.723" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0B559E"/>
      <stop offset="0.506811" stopColor="#426C97"/>
      <stop offset="1" stopColor="#6B95BF"/>
      </linearGradient>
      </defs>
    </svg>
  )
}
