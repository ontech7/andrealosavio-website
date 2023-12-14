import NextLink from "next/link";

import { Box, Link, Paragraph } from 'theme-ui';

export default function CopyrightText() {
  return (
    <Box
      sx={{
        "& p": { fontSize: 16 },
        "& a": { color: "green", fontWeight: 400 }
      }}
    >

      <Paragraph>
        © Copyright 2023 | Andrea Losavio
      </Paragraph>

      <Paragraph>

        <Link 
          as={NextLink} 
          target="_blank" 
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>

        {" - "}

        <Link 
          as={NextLink} 
          target="_blank" 
          href="/cookie-policy"
        >
          Cookie Policy
        </Link>

      </Paragraph>

      <Paragraph>
        P.I. 12705460967
      </Paragraph>

    </Box>
  )
}
