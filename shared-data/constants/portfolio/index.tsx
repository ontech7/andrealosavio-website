import type { ReactNode } from "react";

import Link from "@/components/core/link";

export const PORTFOLIO_TYPES = {
  WEBSITE: "Sito Web",
  COLLAB: "Collab",
  APP: "Mobile App",
  DESIGN: "Design",
  DEMO: "Demo"
}

export type PortfolioTagType = keyof typeof PORTFOLIO_TYPES;

export type Portfolio = {
  tag: PortfolioTagType
  title: string
  description: ReactNode | string
  imgSrc: string
  link?: string
}

export const isFilteredOrAll = (
  currFilter: PortfolioTagType | null,
  selectedFilter: PortfolioTagType | null
) => currFilter == selectedFilter || currFilter == null;

export const portfolioMap: Portfolio[] = [
  {
    tag: "APP",
    title: "Fast Memo",
    description: <>
      Un applicazione per prendere note che cerca di condensare tutto ciò che serve per l'organizzazione, sicurezza e affidabilità, con la totale trasparenza dei dati, autogestiti, senza passare per servizi terzi.<br/><br/>
      Sviluppata con <b>React Native</b> utilizzando <b>Expo SDK 48</b><br/><br/>
      Puoi scaricare l'applicazione 
      dal <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.ontech7.FastMemoApp">Play Store</Link>{" "}
      oppure <Link target="_blank" href="https://apps.apple.com/us/app/fast-memo-notes-in-one-click/id6450381916">App Store</Link>.
    </>,
    imgSrc: "/images/projects/fastmemo/preview.png",
    link: "https://www.fastmemo.app/"
  },
  {
    tag: "COLLAB",
    title: "Recrowd",
    description: <>
      Recrowd è una piattaforma di crowdfunding immobiliare che ti permette di investire in modo alternativo i tuoi risparmi, anche se non disponi di grandi capitali.<br/><br/>
      Per il design è stato utilizzato <b>Figma</b>, mentre per lo sviluppo <b>React 18</b> e <b>Next.js 13</b>.<br/><br/>
      Per visionare il sito sul tuo dispositivo, <Link target="_blank" href="https://www.recrowd.com">clicca qui</Link>.
    </>,
    imgSrc: "/images/projects/recrowd/preview.png",
    link: "https://www.recrowd.com/"
  },
  {
    tag: "WEBSITE",
    title: "Studio Bargiggia",
    description: <>
      Studio Bargiggia è uno studio di amministrazione condominiale che unisce competenza, disponibilità e passione per gestire al meglio il vostro condominio.<br/><br/>
      Per il design è stato utilizzato <b>Figma</b>, mentre per lo sviluppo <b>React 18</b> e <b>Next.js 13</b>.<br/>
      Infine, è stato utilizato un headless CMS on-premise "<b>Strapi</b>" per la gestione del contenuto autonomo.<br/><br/>
      Per visionare il sito sul tuo dispositivo, <Link target="_blank" href="https://www.studiobargiggia.it">clicca qui</Link>.
    </>,
    imgSrc: "/images/projects/studiobargiggia/preview.png",
    link: "https://www.studiobargiggia.it/"
  },
  {
    tag: "DEMO",
    title: "Pokémon Teamfight",
    description: <>
      Pokémon Teamfight è stato un <Link target="_blank" href="https://github.com/ontech7/pokemonfight-nextjs">code test</Link> da svolgere entro una settimana.
      Il gioco consiste nel formare un team da 6 pokémon e farli combattere con un team auto-generato. Vince il team con la somma di exp più alta.<br/><br/>
      Per il design è stato utilizzato <b>Figma</b>, mentre per lo sviluppo <b>React 18</b> e <b>Next.js 13</b>.<br/>
      Per visionare il sito sul tuo dispositivo, <Link target="_blank" href="https://pokemonfight-nextjs.netlify.app/">clicca qui</Link>.
    </>,
    imgSrc: "/images/projects/pokemon-teamfight/preview.png",
    link: "https://pokemonfight-nextjs.netlify.app/"
  },
  {
    tag: "DESIGN",
    title: "Vegancraft",
    description: <>
      Un esempio di sito eCommerce con la possibilità di "costruire" i propri piatti vegani.<br/><br/>
      Lo stile utilizzato punta su dei colori chiari, principalmente quelli che ricordano la natura.<br/><br/>
      L'Area privata è completamente personalizzabile sulla base della propria dieta, studiata in modo da fornire piatti suggeriti su misura.
    </>,
    imgSrc: "/images/projects/vegancraft/preview.png"
  },
  {
    tag: "DEMO",
    title: "Nature Foggy",
    description: <>
      Un esempio di sito vetrina che presenta i propri prodotti di design degli interni.<br/><br/>
      Per lo sviluppo è stato utilizzato <b>HTML5, JavaScript ES5 e CSS3</b>, con backend <b>Node.js</b>.<br/><br/>
      Per visionare il sito sul tuo dispositivo, <Link target="_blank" href="https://naturefoggy.andrealosavio.com">clicca qui</Link>.
    </>,
    imgSrc: "/images/projects/nature-foggy/preview.png",
    link: "https://pokemonfight-nextjs.netlify.app/"
  },
  {
    tag: "DESIGN",
    title: "Bar Caffè Barocco",
    description: <>
      Un esempio di landing page basata su un caso studio reale del brand di un bar.<br/><br/>
      Lo stile utilizzato ricalca i colori del brand, che si districano su alcune sfumature del verde, e un font con le grazie che ricorda qualcosa di classico, quotidiano.
    </>,
    imgSrc: "/images/projects/caffe-barocco/preview.png"
  },
  {
    tag: "DESIGN",
    title: "Burger Shop",
    description: <>
      Un esempio di landing page di un locale che produce hamburger.<br/><br/>
      Lo stile utilizzato ricalca i colori che ricordano i panini e le birre.
    </>,
    imgSrc: "/images/projects/burger-shop/preview.png"
  },
]