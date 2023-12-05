import "./footer.scss"
import left from "../../../public/Left.svg";
import right from "../../../public/Right.svg";

export default function Footer(){
    return(
        <div id="Footer">
            <img className="Left" src={left}></img>
            <img className="Right" src={right}></img>
        </div>
    )
}