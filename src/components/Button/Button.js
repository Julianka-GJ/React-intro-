import './Button.scss';
import { Component } from "react";

class Button extends Component {
    render() {
        return (
            <button>{this.props.nameButton}</button>
        )
    }
}

export default Button;