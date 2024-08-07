import cube from "../../assets/logo/BorderlessCube.svg";
import HeaderButton from "../buttons/headButtons/HeaderButton";
import "./header.scss";

export default function Header() {
  const pages = [
    { id: 1, name: "Accueil", to: "/portfolio/" },
    { id: 2, name: "A Propos", to: "/portfolio/about" },
    { id: 3, name: "Education", to: "/portfolio/education" },
    { id: 4, name: "Experience Pro", to: "/portfolio/work" },
    { id: 5, name: "Projets", to: "/portfolio/projects" },
  ];
  const headerButtons = pages.map(({ id, name, to }) => (
    <HeaderButton key={id} id={id} name={name} to={to} />
  ));

  return (
    <>
      <div id="Header">
        <img src={cube} className="Cube Cube1"></img>
        {headerButtons}
        <img src={cube} className="Cube Cube2"></img>
      </div>
      <div id="Dropdown">
        <img src={cube} className="Cube Cube1"></img>
        <button className="dropbtn">Menu</button>
        <div className="content">{headerButtons}</div>
        <img src={cube} className="Cube Cube2"></img>
      </div>
    </>
  );
}
