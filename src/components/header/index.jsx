import "./header.css"
import {React, link} from "react"

const header = () => {
    return <div className="header">
        <div><img src="#" alt="logo" /></div>
        <div>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="nav-list-elemet"><a href="">Home</a></li>
                    <li className="nav-list-elemet"><a href="">About</a></li>
                    <li className="nav-list-elemet"><a href="">Collection</a></li>
                    <li className="nav-list-elemet"><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div></div>
    </div>
}