import cube from "../../assets/logo/BorderlessCube.svg";
import HeaderButton from "../buttons/headButtons/HeaderButton";
import "./header.scss";

export default function Header(){
    const pages = [
        {id:1,name:"About me",to:"/about"},
        {id:2,name:"Education",to:"/education"},
        {id:3,name:"Work Experience",to:"/work"},
        {id:4,name:"This Website",to:"/website"},

    ]
    const headerButtons = pages.map(({id,name,to})=>
    <HeaderButton key={id} id={id} name={name} to={to}/>
    );

    return(
        <div id="Header">
            <img src={cube} className="Cube Cube1"></img>
            {headerButtons}
            <img src={cube} className="Cube Cube2"></img>
        </div>
    )
}