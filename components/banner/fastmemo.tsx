import Text from "@/components/ui/core/text";

import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

import fastmemoLottie from "@/libs/lottie/fastmemo.json";
import { ThemeUIStyleObject } from "@theme-ui/core";
import { AnimationDirection, AnimationItem } from "lottie-web";
import dynamic from "next/dynamic";

const DynamicLottie = dynamic(() => import("../ui/common/dyamic-lottie"), {
  ssr: false,
});

export default function FastMemoBanner() {
  const [isOpen, setIsOpen] = useState(false);

  const lottieRef = useRef<AnimationItem>(null);
  const [isLottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    // if (localStorage.getItem("fastmemo-banner-closed") === "true") {
    //   return;
    // }

    setIsOpen(true);

    let direction: AnimationDirection = -1;

    setTimeout(() => {
      lottieRef.current?.play();
    }, 500);

    const timer = setInterval(() => {
      lottieRef.current?.play();
      lottieRef.current?.setDirection(direction);
      direction = direction === 1 ? -1 : 1;
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      sx={{
        visibility: !isOpen ? "hidden" : "visible",
        pointerEvents: !isOpen ? "none" : "auto",
        opacity: !isOpen ? 0 : 1,
        transition: "opacity 0.5s ease",
        zIndex: 2,
        position: "fixed",
        overflow: "hidden",
        right: "16px",
        bottom: "16px",
        borderRadius: "12px",
        padding: "20px",
        background: "linear-gradient(to right, #040E33, #24325A)",
        boxShadow: "0px 4px 8px #3334",
      }}
    >
      <div
        sx={{
          display: "flex",
          gap: "10px",
          mb: "5px",
        }}
      >
        <div>
          <Text as="small" color="white" ssx={{ marginBottom: "2px" }}>
            Gestisci le tue note, come preferisci.
          </Text>

          <Text ssx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Fast Memo - Note in un click
          </Text>

          <BannerButton href="https://fastmemo.vercel.app">
            Scopri di più
            <ChevronRightIcon width={15} sx={{ marginRight: "-4px" }} />
          </BannerButton>
        </div>

        <div
          sx={{
            width: "48px",
          }}
        >
          <DynamicLottie
            forwardedRef={lottieRef}
            loop={false}
            animationData={fastmemoLottie}
            onLoad={() => setLottieLoaded(true)}
            speed={0.7}
            sx={{
              position: "absolute",
              right: "20px",
              bottom: "8px",
              opacity: !isLottieLoaded ? 0 : 1,
              transition: "opacity 0.5s ease",
              width: "52px",
              height: "auto",
            }}
          />
        </div>
      </div>

      <BannerButton
        onClick={() => {
          setIsOpen(false);
          // localStorage.setItem("fastmemo-banner-closed", "true");
        }}
        ssx={{
          position: "absolute",
          top: "12px",
          right: "12px",
          padding: "6px",
        }}
      >
        <XMarkIcon width={14} color="white" />
      </BannerButton>
    </div>
  );
}

function BannerButton({
  href,
  onClick,
  children,
  ssx,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  ssx?: ThemeUIStyleObject;
}) {
  return (
    <a
      href={href ?? "#"}
      target="_blank"
      onClick={
        onClick
          ? (e) => {
              e.preventDefault();
              onClick();
            }
          : undefined
      }
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "body",
        fontSize: "14px",
        textDecoration: "none",
        border: 0,
        cursor: "pointer",
        backgroundColor: "#dddddd30",
        color: "white",
        borderRadius: "999px",
        padding: "8px 16px",
        marginLeft: "-2px",
        marginBottom: "-6px",
        transition: "background-color 0.2s ease",
        ":hover": {
          backgroundColor: "#dddddd40",
        },
        ...ssx,
      }}
    >
      {children}
    </a>
  );
}
