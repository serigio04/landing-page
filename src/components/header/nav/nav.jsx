import { Link, BrowserRouter, Route, Routes} from "react-router-dom";
 import Home from "../../../screens/Home";
 import About from "../../../screens/about";
 import Collection from "../../../screens/contact";
 import Contact from "../../../screens/my-collection";

const Nav = () => {
    return <BrowserRouter>
        <div>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="list-element"><Link to="/">Home</Link> </li>
                    <li className="list-element"><Link to="/about">About</Link> </li>
                    <li className="list-element"><Link to="/my-collection">My collection</Link> </li>
                    <li className="list-element"><Link to="/contact">Contact</Link> </li>
                </ul>
            </nav>
        </div>
        <Routes>
            <Route path="/" exact component={<Home />}/>
            <Route path="/about" component={<About />}/>
            <Route path="/my-collection" component={<Collection />}/>
            <Route path="/contact" component={<Contact />}/>
        </Routes>
    </BrowserRouter>
}

export default Nav