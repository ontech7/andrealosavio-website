import { ThemeUIStyleObject } from "@theme-ui/core";

export default function Bg_TriangleBlue({ ssx }: { ssx: ThemeUIStyleObject}) {
  return (
    <svg width="1920" height="263" viewBox="0 0 1920 263" fill="none" xmlns="http://www.w3.org/2000/svg" sx={ssx}>
      <path fillRule="evenodd" clipRule="evenodd" d="M960 263L1920 0H0L960 263Z" fill="#05386B"/>
    </svg>
  )
}