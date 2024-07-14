import "./work.scss";
import data from "../../../assets/json/work.json";

export default function Work() {
  const ubiMission = data.content.ubisoft.missions.map(({ id, mission }) => (
    <li key={id} id={id} className={`ubiMission${id}`}>
      {mission}
    </li>
  ));

  const strMission = data.content.straton.missions.map(({ id, mission }) => (
    <li key={id} id={id} className={`ubiMission${id}`}>
      {mission}
    </li>
  ));
  return (
    <div className="Body Work">
      <div className="Ubisoft">
        <h1 className="UTitle">{data.content.ubisoft.title}</h1>
        <p className="UDescription">{data.content.ubisoft.description}</p>
        <h2 className="MissionTitle">{data.content.ubisoft.tilte2}</h2>
        <p className="UMissions">{ubiMission}</p>
      </div>
      <span className="Delimiter"></span>
      <div className="Straton">
        <h1 className="STitle">{data.content.straton.title}</h1>
        <p className="SDescription">{data.content.straton.description}</p>
        <h2 className="MissionTitle">{data.content.straton.tilte2}</h2>
        <p className="SMissions">{strMission}</p>
      </div>
    </div>
  );
}
