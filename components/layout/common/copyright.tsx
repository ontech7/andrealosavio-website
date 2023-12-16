import { Box, Paragraph } from 'theme-ui';

import Link from "@/components/link";

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

        <Link newTab href="/privacy-policy">
          Privacy Policy
        </Link>

        {" - "}

        <Link newTab href="/cookie-policy">
          Cookie Policy
        </Link>

      </Paragraph>

      <Paragraph>
        P.I. 12705460967
      </Paragraph>

    </Box>
  )
}
