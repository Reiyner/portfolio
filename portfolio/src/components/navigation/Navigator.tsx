import {Routes, Route} from 'react-router-dom';
import Home from '../bodies/home/Home';
import Work from '../bodies/work/Work';
import AboutMe from '../bodies/aboutMe/AboutMe';
import Education from '../bodies/education/Education';
import Projects from '../bodies/projects/Projects';

export default function Navigator(){
    return(
        <>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/about"} element={<AboutMe/>}></Route>
            <Route path={"/education"} element={<Education/>}></Route>
            <Route path={"/work"} element={<Work/>}></Route>
            <Route path={"/projects"} element={<Projects></Projects>}></Route>
        </Routes>
        </>
    )
}