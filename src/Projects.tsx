import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  //TODO: Load projects from the firebase database.

  //TODO: Cache these projects so we can create project cards later.

  //TODO: Display each of the projects as clickable name.

  //TODO: Map all current projects too a map of their name and then id.

  //TODO: Change string type to a firebase doc.

  //TODO: Add a max property
  var emptyStart: any[] = [];
  const [docs, setDocs] = useState(emptyStart);
  var names = ["Project 1", "Project 2", "Project 3"];
  var ids = ["1", "2", "3"];

  useEffect(() => {
    if (docs.length < 3) {
      var lst: any[] = [];
      var index = 0;
      names.forEach((element) => {
        lst.push(<ProjectCard id={element} docId={ids[index]} />);
        index++;
      });
      setDocs(lst);
    }
  }, [ids, names, docs.length]);

  return <div className="projects">{docs}</div>;
}

export default Projects;
