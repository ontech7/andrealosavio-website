
import { Box } from 'theme-ui';

import HeaderDesktop from "./variant/desktop";
import HeaderMobile from "./variant/mobile";

export default function Header() {
  return (
    <Box as="header" bg="blue">
      
      {/** @media (min-width: 992px) */}
      <HeaderDesktop />

      {/** @media (max-width: 991px) */}
      <HeaderMobile />

    </Box>
  )
}
