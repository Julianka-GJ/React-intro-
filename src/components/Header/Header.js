import { Component } from "react";

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="#">{this.props.name}</a>
        )
    }
}

export default Menu;
