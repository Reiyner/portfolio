import "./footer.scss";
import cube from "../../assets/logo/BorderlessCube.svg";
import LinkedIn from "../../assets/logo/Linkedin.png";
import Git from "../../assets/logo/git.png";
import Proton from "../../assets/logo/protonmail.png";
import LogoButton from "../buttons/logoButtons/LogoButtons";

export default function Footer() {
  const res = [
    {
      id: 1,
      src: LinkedIn,
      href: "https://www.linkedin.com/in/mpalkowski-pub",
      value: "LinkedIn",
    },
    { id: 2, src: Git, href: "https://github.com/Reiyner", value: "Git" },
    {
      id: 3,
      src: Proton,
      href: "maxence.palkowski_pro@proton.me",
      value: "Proton",
    },
  ];

  const logo = res.map(({ id, src, href, value }) => (
    <LogoButton key={id} value={value} href={href} src={src} />
  ));

  return (
    <div id="Footer">
      <img className="Left" src={cube}></img>
      <p className="Name">MAXENCE PALKOWSKI</p>
      {logo}
      <p className="Title1">Network & Infrastructure Engineer</p>
      <p className="Title2">
        Software Engineer - Full Stack Developer - DevOps{" "}
      </p>
      <img className="Right" src={cube}></img>
    </div>
  );
}
