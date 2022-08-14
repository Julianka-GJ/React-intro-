import './Nav.scss';
import { Component } from "react";
import Button from '../Button/Button';
import Image from '../img/nav.jpg'

class Nav extends Component {
    render() {
        return (
            <section className="nav-menu">
                <img src={Image}></img>
                <h3>Project workspace</h3>
                <p>A simple guide to create the perfect livingroom for . Night Watc works beautifully in a wide gamut of arrangements.
                </p>
                <Button nameButton = "learn more"/>
                <Button nameButton = "Library"/>
                <Button nameButton = "start work"/>
            </section>
        )
    }
}

export default Nav;