import React from 'react';
import {ReactComponent as Home} from '../images/home.svg';
import {ReactComponent as Project} from '../images/project.svg';
import {ReactComponent as Work} from '../images/suitcase.svg';
import {ReactComponent as Contact} from '../images/contact.svg';
import {
  Link,
} from 'react-router-dom';
import '../App.css';

function Navbar(props) {
    console.log("Printing wrapper:" + props.wrapper);
    return (
        <ul className="sidebar-nav">
            <a href="#" className="btn btn-success" id="menu-toggle" onClick={(event) => toggle(event, props.wrapper)}>☰ </a>
            <div id="inner-section">
                <li><Link to="/"><Home className="menu-icon"/></Link></li>
                <li><Link to="/projects"><Project className="menu-icon"/></Link></li>
                <li><Link to="/work"><Work className="menu-icon"/></Link></li>
                <li><Link to="/contact"><Contact className="menu-icon"/></Link></li>
            </div>
        </ul>    
)};

function toggle(e, w) {
    console.log(w);
    e.preventDefault();
    w.toggleClass("menuDisplayed");
    
}

export default Navbar;