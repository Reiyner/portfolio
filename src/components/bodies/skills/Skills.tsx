import "./Skills.scss";
import data from "../../../assets/json/skills.json"

export default function Skills() {
  return (
    <div className="Skills">
    <h1>{data.content.title}</h1>
    <p>{data.content.bodyFr1}</p>
    <p>{data.content.bodyFr2}</p>
    <p>{data.content.bodyFr3}</p>
    </div>
  );
}
