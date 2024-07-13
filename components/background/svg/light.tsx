import type { BgSvgProps } from "../types";

export default function Bg_Light({ ssx }: BgSvgProps) {
  return (
    <svg
      width="1920"
      height="171"
      viewBox="0 0 1920 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={ssx}
    >
      <path d="M0 0H1920L0 171V0Z" fill="#D8EBFF" />
    </svg>
  );
}
