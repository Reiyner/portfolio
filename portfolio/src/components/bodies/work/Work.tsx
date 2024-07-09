import './work.scss';
import data from "../../../assets/json/work.json";


export default function Work(){
    return(<div className="Body Work">
        <div className='Ubisoft'>
            <h1 className='Title'>{data.content.ubisoft.title}</h1>
            <p className='Description'>{data.content.ubisoft.description}</p>
            <h2 className='MissionTitle'>{data.content.ubisoft.tilte2}</h2>
            <p className='Missions'>{data.content.ubisoft.missions}</p>
        </div>
        </div>)
}