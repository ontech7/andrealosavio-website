import { ReactNode } from "react";

type ServiceName =
  | "website"
  | "collab"
  | "consulting"
  | "design"
  | "teach"
  | "mobile";

export type Service = {
  serviceName: ServiceName;
  alt?: string;
  title: string | ReactNode;
  description: string;
  disabled?: boolean;
};

export const servicesMap: Service[] = [
  {
    serviceName: "website",
    alt: "Creazione siti web",
    title: "Creazione siti web",
    description:
      "Progettazione e costruzione di un sito web su misura per il cliente.",
  },
  {
    serviceName: "mobile",
    alt: "Creazione app mobile",
    title: "Creazione app mobile",
    description:
      "Progettazione e costruzione di un'app mobile su misura per il cliente.",
  },
  {
    serviceName: "collab",
    alt: "Collaborazioni con Start Up e Aziende",
    title: "Collaborazioni con Start Up e Aziende",
    description: "Disponibile per collaborazioni in progetti innovativi.",
  },
  {
    serviceName: "consulting",
    alt: "Consulenza",
    title: "Consulenza",
    description:
      "Supporto per l’impostazione di un sito web, esperienza utente e interfaccia grafica.",
  },
  {
    serviceName: "design",
    alt: "Progettazione e design",
    title: "Progettazione e design",
    description:
      "Prototipazione e progettazione del vostro sito web o di quello di un vostro cliente.",
  },
  {
    serviceName: "teach",
    alt: "Insegnante on-demand",
    title: (
      <>
        Insegnante
        <br />
        on-demand
      </>
    ),
    description:
      "Disponibile a insegnare in corsi di programmazione web per tutte le fasce.",
    disabled: true,
  },
];
