import type { BgSvgProps } from "../types";

export default function Bg_LightShort({ ssx }: BgSvgProps) {
  return (
    <svg
      width="1920"
      height="87"
      viewBox="0 0 1920 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={ssx}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V87L1920 0H0Z"
        fill="#D8EBFF"
      />
    </svg>
  );
}
