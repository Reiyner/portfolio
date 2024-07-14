import { Routes, Route } from "react-router-dom";
import Home from "../bodies/home/Home";
import Work from "../bodies/work/Work";
import AboutMe from "../bodies/aboutMe/AboutMe";
import Education from "../bodies/education/Education";
import Projects from "../bodies/projects/Projects";

export default function Navigator() {
  return (
    <>
      <Routes>
        <Route path={"/portfolio/"} element={<Home />}></Route>
        <Route path={"/portfolio/about"} element={<AboutMe />}></Route>
        <Route path={"/portfolio/education"} element={<Education />}></Route>
        <Route path={"/portfolio/work"} element={<Work />}></Route>
        <Route path={"/portfolio/projects"} element={<Projects></Projects>}></Route>
      </Routes>
    </>
  );
}
