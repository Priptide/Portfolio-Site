import { useState } from "react";
import MyModalCard from "./cardon/MyModalCard";

interface ProjectCardProps{
  id:String;
  docId: String;
}

function ProjectCard({id, docId}:ProjectCardProps){

  const [modalResult, setModalResult] = useState(false);

  const pressedCard= async() => {
    console.log("Started");
    let result = await MyModalCard.show({ title: "Awesome" });
    setModalResult(result);
    console.log(modalResult);
  };

  return <div onClick={pressedCard}>{id + " >"}</div>;
}

export default ProjectCard;