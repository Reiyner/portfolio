import "./work.scss";
import data from "../../../assets/json/work.json";
import imgUbi from "../../../assets/pic/floresco_st-mande_paragraphe1©Fly2success.jpeg";
import imgStraton from "../../../assets/pic/datacenter.jpg";

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
        <h2 className="MissionTitle UMissionTitle">
          {data.content.ubisoft.title2}
        </h2>
        <p className="UMissions">{ubiMission}</p>
      </div>
        <img className="ImageUbi"src={imgUbi} />
      <span className="Delimiter"></span>
      <div className="Straton">
        <h1 className="STitle">{data.content.straton.title}</h1>
        <p className="SDescription">{data.content.straton.description}</p>
        <h2 className="MissionTitle sMissionTitle">
          {data.content.straton.title2}
        </h2>
        <p className="SMissions">{strMission}</p>
      </div>
        <img className="ImageStraton"src={imgStraton} />
    </div>
  );
}
