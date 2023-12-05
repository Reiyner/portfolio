import"./home.scss";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Side from "../side/Side";
import Structure from "../structure/Structure";

export default function Home(){
    return(
        <div id="Home">
            <Side/>
            <Structure/>
            <Header/>
            <div className="Body">
                
            </div>
            <Footer/>
        </div>
    )
}