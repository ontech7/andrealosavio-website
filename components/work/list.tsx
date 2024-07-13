import WorkItem from "./item";

import { worksMap } from "@/shared-data/constants/works";

export default function WorkList() {
  return (
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      {worksMap.map((item) => (
        <WorkItem key={item.href} {...item} />
      ))}
    </div>
  );
}
