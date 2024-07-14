import pp from "../../../assets/pic/pp.jpg";
import data from "../../../assets/json/about.json";

import "./about.scss";
export default function AboutMe() {
  return (
    <div className="Body About">
      <img src={pp} alt="" />
      <h1>{data.content.title}</h1>
      <p className="AboutP1">{data.content.bodyFr1}</p>
      <p className="AboutP2">{data.content.bodyFr2}</p>
      <p className="AboutP3">{data.content.bodyFr3}</p>
    </div>
  );
}
