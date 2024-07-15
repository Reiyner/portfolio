import "./page.scss";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Side from "../side/Side";
import Structure from "../structure/Structure";
import Navigator from "../navigation/Navigator";

import dog from "../../assets/pic/dog.jpg";
import htl from "../../assets/pic/htl.jpg";
import me from "../../assets/pic/me.jpg";
import mtn from "../../assets/pic/mtn.jpg";
import blc from "../../assets/pic/blc.jpg";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Page() {
  const photos = [
    { id: 1, pic: me, loc: "/portfolio/" },
    { id: 2, pic: htl, loc: "/portfolio/about" },
    { id: 3, pic: mtn, loc: "/portfolio/education" },
    { id: 4, pic: dog, loc: "/portfolio/work" },
    { id: 5, pic: blc, loc: "/portfolio/projects" },
  ];
  const [picture, setPicture] = useState("");

  const location = useLocation();

  useEffect(() => {
    photos.forEach((pic) => {
      if (location.pathname === pic.loc) {
        setPicture(pic.pic);
      }
    });
  }, [location]);

  return (
    <div id="Page">
      <Side pic={picture} />
      <Structure />
      <Header />
      <Navigator />
      <Footer />
    </div>
  );
}
