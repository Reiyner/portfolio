import data from '../../../assets/json/home.json';
import './home.scss';

export default function Home(){
    return(
        <div className="Body Home">
            <h1>{data.content.title}</h1>
            <p>{data.content.body}</p>
        </div>
    )
}