import pp from '../../../assets/pic/pp.jpg';
import data from '../../../assets/json/about.json';

import './about.scss'
export default function AboutMe(){
    return(
    <div className="Body About">
        <img src={pp} alt="" />
        <h1>{data.content.title}</h1>
        <p>{data.content.body}</p>

    </div>
    )
}