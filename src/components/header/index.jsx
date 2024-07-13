import "./header.css"
import Nav from "./nav/nav"
import {React, link} from "react"

const header = () => {
    return <div className="header">
        <div><img src="#" alt="logo" /></div>
        <div><Nav/></div>
        <div>social media</div>
    </div>
}

export default header