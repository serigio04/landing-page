import "./header.css"
import Nav from "./nav/nav"
import {React} from "react"

const Header = () => {
    return <div className="H">
        <div><img src="#" alt="logo" /></div>
        <div><Nav /></div>
        <div>social media</div>
    </div>
}

export default Header