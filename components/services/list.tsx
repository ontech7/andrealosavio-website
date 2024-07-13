import ServiceItem from "./item";

import { servicesMap } from "@/shared-data/constants/services";

export default function ServiceList() {
  return (
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "relative",
        zIndex: 2,
        padding: "20px 10px",
      }}
    >
      {servicesMap.map((service) => (
        <ServiceItem key={service.alt} {...service} />
      ))}
    </div>
  );
}
