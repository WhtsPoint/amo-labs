import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./mainPage.scss"

function MainPage() {
    return (<div className={"w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"}>
        <h1 className={"text-center"}>АМО Лабораторні роботи</h1>
        <h4 className={"text-center"}>Полтавський Володимир</h4>
        <div className={"d-flex flex-column gap-3 py-3"}>
            <Link to={"/labs/1"} className={"classicButton"}>Лабораторна робота №1</Link>
            <Link to={"/labs/2"} className={"classicButton"}>Лабораторна робота №2</Link>
            <Link to={"/labs/3"} className={"classicButton"}>Лабораторна робота №3</Link>
            <Link to={"/labs/4"} className={"classicButton"}>Лабораторна робота №4</Link>
            <Link to={"/labs/5"} className={"classicButton"}>Лабораторна робота №5</Link>
        </div>
    </div>)
}

export default MainPage