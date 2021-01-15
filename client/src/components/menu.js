import React from "react";
import "./menu.css";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.RenderClosed = this.RenderClosed.bind(this);
        this.RenderOpen = this.RenderOpen.bind(this);
    }

    render() {
        let isOpen = this.props.state === "open";
        if (isOpen) return this.RenderOpen();
        return this.RenderClosed();
    }

    RenderOpen() {
        return (
            <>
                <img id="menuLogo" src="logo192.png" alt="logo" />
                <ul>
                    <li>
                        <a href="#serverContent">O que importa em 2021?</a>
                    </li>
                    <li>
                        <a href="#additionalContent">O que esquecer em 2021?</a>
                    </li>
                </ul>
                <button className="menuButton" onClick={this.props.clickCB}>
                    &lt;
                </button>
            </>
        );
    }

    RenderClosed() {
        return (
            <button className="menuButton" onClick={this.props.clickCB}>
                &gt;
            </button>
        );
    }
}

export default Menu;
