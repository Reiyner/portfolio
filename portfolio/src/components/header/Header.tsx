import cube from "../../assets/logo/BorderlessCube.svg";
import HeaderButton from "../buttons/headButtons/HeaderButton";
import "./header.scss";

export default function Header() {
  const pages = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "About me", to: "/about" },
    { id: 3, name: "Education", to: "/education" },
    { id: 4, name: "Work Experience", to: "/work" },
    { id: 5, name: "Projects", to: "/projects" },
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
