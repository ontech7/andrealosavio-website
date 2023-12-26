import Button from '@/components/core/button'
import Text from '@/components/core/text'
import Section from '@/components/section'
import SectionWrapper from '@/components/section/wrapper'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function PortfolioSection() {
  return (
    <Section 
      id="portfolio" 
      bg="lightBlue" 
    >
      <SectionWrapper 
        direction={["column", "column"]} 
        ssx={{ textAlign: "center", gap: "25px" }}
      >

        <div
          sx={{
            display: "grid",
            zIndex: 0,
            width: "33.33%",
            height: "300px",
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            bg: "white"
          }}
        >
          <Image
            src="/images/projects/fastmemo/preview.png"
            alt=""
            fill
            sx={{ height: "auto !important", zIndex: -1 }}
          />

          <div 
            sx={{ 
              display: "flex",
              justifyContent: "space-between",
              p: "10px 25px",
              mt: "auto", 
              bg: "white" 
            }}
          >
            <Text 
              color="black" 
              ssx={{ fontWeight: "semiBold"}}
            >
              Fast Memo
            </Text>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                zIndex: 0,
                textTransform: "uppercase",
                bg: "transparent",
                m: 0,
                mb: "2px",
                p: 0,
                px: "5px",
                fontWeight: "medium",
                color: "darkBlue",
                transition: "color 0.3s ease",
                "& svg": { transition: "color 0.3s ease" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  zIndex: -1,
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  mb: "-2px",
                  backgroundColor: "darkGreen",
                  transition: "height 0.3s ease"
                },
                "&:hover": {
                  color: "white",
                  "& svg": { color: "white" },
                  "&::after": { height: "30px" }
                },
              }}
            >
              Leggi di più

              <ChevronUpIcon
                width={16}
                sx={{ color: "black", ml: 1 }}
              />
            </Button>
          </div>
        </div>

      </SectionWrapper>
    </Section>
  )
}
