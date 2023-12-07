import data from '../../../assets/json/education.json';
import './education.scss'

export default function Education(){
    return(<div className="Body Education">
        <div/>
        <h1>{data.content.rotary.title}</h1>
        <div/>
        <div/>
        <p>{data.content.rotary.content}</p>
        <div/>
        <div/>
        <h1>{data.content.uphf.title}</h1>
        <div/>
        <div/>
        <p>{data.content.uphf.content}</p>
        <div/>
        <div/>
        <h1>{data.content.isen.title}</h1>
        <div/>
        <div/>
        <p>{data.content.isen.content}</p>
    </div>)
}