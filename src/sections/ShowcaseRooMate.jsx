import { useMemo } from "react";
import { projectShowcase } from "../constants";
import ShowcaseProjectPage from "./ShowcaseProjectPage";

const ShowcaseRooMate = () => {
  const project = useMemo(
    () => projectShowcase.find((p) => p.id === "roomate"),
    []
  );

  if (!project) {
    return null;
  }

  return <ShowcaseProjectPage project={project} />;
};

export default ShowcaseRooMate;
