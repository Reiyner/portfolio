import cube from "../../../public/Property 1=Cube.svg";
import "./header.scss";

export default function Header(){
    return(
        <div id="Header">
            <img src={cube} className="Cube Cube1"></img>
            <img src={cube} className="Cube Cube2"></img>
        </div>
    )
}