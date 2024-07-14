import data from "../../../assets/json/home.json";
import arrow from "../../../assets/pic/down-arrow-svgrepo-com.svg";
import "./home.scss";

export default function Home() {
  return (
    <div className="Body Home">
      <h1>{data.content.titleFr}</h1>
      <p>{data.content.bodyFr}</p>
      <img className="Arrow" src={arrow} />
    </div>
  );
}
