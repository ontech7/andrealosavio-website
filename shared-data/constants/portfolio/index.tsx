import Link from "@/components/ui/core/link";

import type { Portfolio } from "./types";

export const portfolioTypesMap = {
  WEBSITE: "Sito Web",
  COLLAB: "Collab",
  APP: "Mobile App",
  DESIGN: "Design",
  DEMO: "Demo",
} as const;

export const portfolioMap: Portfolio[] = [
  {
    tag: "COLLAB",
    title: "Ravenn",
    description: (
      <>
        <Link target="_blank" href="https://ravenn.io">
          Ravenn.io
        </Link>{" "}
        è una piattaforma intuitiva per la gestione della logistica e ospitalità
        negli eventi: trova strutture ricettive adatte ai partecipanti e
        facilita prenotazioni, cancellazioni e modifiche alberghiere in modo
        semplificato ed efficiente
        <br />
        <br />
        La mia collaborazione si appresta pressoché per lo sviluppo web in{" "}
        <b>React</b>, <b>Next.js 14 - App router</b>, <b>Prisma</b>,{" "}
        <b>PostgreSQL</b>.
      </>
    ),
    logoSrc: "/images/projects/ravenn/logo.webp",
    imgSrc: "/images/projects/ravenn/preview.png",
    link: "https://ravenn.io/",
  },
  {
    tag: "COLLAB",
    title: "Brainplatform",
    description: (
      <>
        <Link target="_blank" href="https://www.brainplatform.it">
          Brain S.R.L.
        </Link>{" "}
        trasforma il tuo sito web o app in una potente arma di marketing, unendo
        design accattivante e alte prestazioni, comunicando i valori del tuo
        brand in maniera autorevole per stare al passo con la concorrenza.
        <br />
        <br />
        Ormai da anni nel settore, esperti in un ampio campo di tecnologie
        adatte per ogni tipo di cliente.
        <br />
        <br />
        La mia collaborazione si appresta pressoché per lo sviluppo web in{" "}
        <b>React</b> e <b>Next.js 14</b>.
      </>
    ),
    logoSrc: "/images/projects/brainplatform/logo.png",
    imgSrc: "/images/projects/brainplatform/preview.png",
    link: "https://www.brainplatform.it/",
  },
  {
    tag: "APP",
    title: "Fast Memo",
    description: (
      <>
        Un applicazione per prendere note che cerca di condensare tutto ciò che
        serve per l'organizzazione, sicurezza e affidabilità, con la totale
        trasparenza dei dati, autogestiti, senza passare per servizi terzi.
        <br />
        <br />
        Sviluppata con <b>React Native</b> utilizzando <b>Expo SDK 53</b>
        <br />
        <br />
        Puoi scaricare l'applicazione dal{" "}
        <Link
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.ontech7.FastMemoApp"
        >
          Play Store
        </Link>
        .
      </>
    ),
    logoSrc: "/images/projects/fastmemo/logo.png",
    imgSrc: "/images/projects/fastmemo/preview.png",
    link: "https://fastmemo.vercel.app/",
  },
  {
    tag: "COLLAB",
    title: "Recrowd",
    description: (
      <>
        <Link target="_blank" href="https://www.recrowd.com">
          Recrowd
        </Link>{" "}
        è una piattaforma di crowdfunding immobiliare che ti permette di
        investire in modo alternativo i tuoi risparmi, anche se non disponi di
        grandi capitali.
        <br />
        <br />
        La mia collaborazione si appresta pressoché per lo sviluppo web in{" "}
        <b>React</b> e <b>Next.js 13</b>, e UI&UX con <b>Figma</b>.
      </>
    ),
    logoSrc: "/images/projects/recrowd/logo.png",
    imgSrc: "/images/projects/recrowd/preview.png",
    link: "https://www.recrowd.com/",
  },
  {
    tag: "WEBSITE",
    title: "Studio Bargiggia",
    description: (
      <>
        Studio Bargiggia è uno studio di amministrazione condominiale che unisce
        competenza, disponibilità e passione per gestire al meglio il vostro
        condominio.
        <br />
        <br />
        Per il design è stato utilizzato <b>Figma</b>, mentre per lo sviluppo{" "}
        <b>React 18</b> e <b>Next.js 13</b>.<br />
        Infine, è stato utilizato un headless CMS on-premise "<b>Strapi</b>" per
        la gestione del contenuto autonomo.
        <br />
        <br />
        Per visionare il sito sul tuo dispositivo,{" "}
        <Link target="_blank" href="https://www.studiobargiggia.it">
          clicca qui
        </Link>
        .
      </>
    ),
    logoSrc: "/images/projects/studiobargiggia/logo.png",
    imgSrc: "/images/projects/studiobargiggia/preview.png",
    link: "https://www.studiobargiggia.it/",
  },
  {
    tag: "DEMO",
    title: "Pokémon Teamfight",
    description: (
      <>
        Pokémon Teamfight è stato un{" "}
        <Link
          target="_blank"
          href="https://github.com/ontech7/pokemonfight-nextjs"
        >
          code test
        </Link>{" "}
        da svolgere entro una settimana. Il gioco consiste nel formare un team
        da 6 pokémon e farli combattere con un team auto-generato. Vince il team
        con la somma di exp più alta.
        <br />
        <br />
        Per il design è stato utilizzato <b>Figma</b>, mentre per lo sviluppo{" "}
        <b>React 18</b> e <b>Next.js 13</b>.<br />
        Per visionare il sito sul tuo dispositivo,{" "}
        <Link target="_blank" href="https://pokemonfight-nextjs.netlify.app/">
          clicca qui
        </Link>
        .
      </>
    ),
    imgSrc: "/images/projects/pokemon-teamfight/preview.png",
    link: "https://pokemonfight-nextjs.netlify.app/",
  },
  {
    tag: "DESIGN",
    title: "Vegancraft",
    description: (
      <>
        Un esempio di sito eCommerce con la possibilità di "costruire" i propri
        piatti vegani.
        <br />
        <br />
        Lo stile utilizzato punta su dei colori chiari, principalmente quelli
        che ricordano la natura.
        <br />
        <br />
        L'Area privata è completamente personalizzabile sulla base della propria
        dieta, studiata in modo da fornire piatti suggeriti su misura.
      </>
    ),
    imgSrc: "/images/projects/vegancraft/preview.png",
  },
  {
    tag: "DEMO",
    title: "Nature Foggy",
    description: (
      <>
        Un esempio di sito vetrina che presenta i propri prodotti di design
        degli interni.
        <br />
        <br />
        Per lo sviluppo è stato utilizzato <b>HTML5, JavaScript ES5 e CSS3</b>,
        con backend <b>Node.js</b>.<br />
        <br />
        Per visionare il sito sul tuo dispositivo,{" "}
        <Link target="_blank" href="https://naturefoggy.andrealosavio.com">
          clicca qui
        </Link>
        .
      </>
    ),
    imgSrc: "/images/projects/nature-foggy/preview.png",
    link: "https://pokemonfight-nextjs.netlify.app/",
  },
  {
    tag: "DESIGN",
    title: "Bar Caffè Barocco",
    description: (
      <>
        Un esempio di landing page basata su un caso studio reale del brand di
        un bar.
        <br />
        <br />
        Lo stile utilizzato ricalca i colori del brand, che si districano su
        alcune sfumature del verde, e un font con le grazie che ricorda qualcosa
        di classico, quotidiano.
      </>
    ),
    imgSrc: "/images/projects/caffe-barocco/preview.png",
  },
  {
    tag: "DESIGN",
    title: "Burger Shop",
    description: (
      <>
        Un esempio di landing page di un locale che produce hamburger.
        <br />
        <br />
        Lo stile utilizzato ricalca i colori che ricordano i panini e le birre.
      </>
    ),
    imgSrc: "/images/projects/burger-shop/preview.png",
  },
];
