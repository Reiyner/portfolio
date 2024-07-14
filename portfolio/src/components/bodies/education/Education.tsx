import data from "../../../assets/json/education.json";
import "./education.scss";

export default function Education() {
  return (
    <div className="Body Education">
      <div className="Rotary">
        <h1>{data.content.french.rotary.title}</h1>
        <p>{data.content.french.rotary.paragraph.phrase1}</p>
        <p>{data.content.french.rotary.paragraph.phrase2}</p>
        <p>{data.content.french.rotary.paragraph.phrase3}</p>
      </div>
      <div className="UPHF">
        <h1>{data.content.french.uphf.title}</h1>
        <p>{data.content.french.uphf.paragraph.phrase1}</p>
        <p>{data.content.french.uphf.paragraph.phrase2}</p>
        <p>{data.content.french.uphf.paragraph.phrase3}</p>
      </div>
      <div className="ISEN">
        <h1>{data.content.french.isen.title}</h1>
        <p>{data.content.french.isen.paragraph.phrase1}</p>
        <p>{data.content.french.isen.paragraph.phrase2}</p>
      </div>
    </div>
  );
}
