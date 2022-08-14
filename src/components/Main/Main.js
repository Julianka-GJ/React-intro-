import './Main.scss';
import Button from '../Button/Button';
import { Component } from "react";
import Image from '../img/image.png'


class Main extends Component {
    render() {
        return (
            <section className="content">
                <div className="content-text">
                    <h2>Get the inspiration of interior design here</h2>
                    <p> architecture not only about engineering, it even 
                        lands to art and aesthetics. With us, you will get 
                        a residentical design with an extraordinary touch 
                        of art.
                    </p>
                    <Button nameButton = "Let’s go"/>
                </div>
                <div className="content-img">
                    <img src={Image}></img>
                </div>
            </section>
        )
    }
}

export default Main;