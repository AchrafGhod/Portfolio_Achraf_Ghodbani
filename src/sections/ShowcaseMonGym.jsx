import { useMemo } from "react";
import { projectShowcase } from "../constants";
import ShowcaseProjectPage from "./ShowcaseProjectPage";

const ShowcaseMonGym = () => {
  const project = useMemo(
    () => projectShowcase.find((p) => p.id === "mongym"),
    []
  );

  return <ShowcaseProjectPage project={project} />;
};

export default ShowcaseMonGym;
