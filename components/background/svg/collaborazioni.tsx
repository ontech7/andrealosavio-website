import type { BgSvgProps } from "../types";

export default function Bg_Collaborazioni({ ssx }: BgSvgProps) {
  return (
    <svg
      width="1920"
      height="171"
      viewBox="0 0 1920 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={ssx}
    >
      <path
        d="M822 97.79L1920 171L0 171L822 97.79Z"
        fill="#3DE99E"
        fillOpacity="0.3"
      />
      <path
        d="M822 97.79L1920 171L0 171L822 97.79Z"
        fill="#333333"
        fillOpacity="0.5"
      />
      <g filter="url(#filter0_b_166_162)">
        <path d="M822 97.79L1920 0V171L822 97.79Z" fill="#3DE99E" />
      </g>
      <path d="M0 0H1920L0 171V0Z" fill="#D8EBFF" />
      <defs>
        <filter
          id="filter0_b_166_162"
          x="808"
          y="-14"
          width="1126"
          height="199"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="7" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_166_162"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_166_162"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
