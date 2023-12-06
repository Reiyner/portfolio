import './logoButton.scss'

export default function LogoButton({value,href,src}:{value:string,href:string,src:string}){
    return(
    <a className={value}  href={href}>
        <img src={src} alt="" />
    </a>
    )
}