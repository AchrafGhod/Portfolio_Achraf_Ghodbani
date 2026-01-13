import { useMemo } from "react";
import { projectShowcase } from "../constants";
import ShowcaseProjectPage from "./ShowcaseProjectPage";

const ShowcaseUniShop = () => {
  const project = useMemo(
    () => projectShowcase.find((p) => p.id === "unishop"),
    []
  );

  return <ShowcaseProjectPage project={project} />;
};

export default ShowcaseUniShop;
