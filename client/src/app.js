/*
 * This is the entry point of the react client application. The file contains
 *  the definition and implementation of application class.
 */

import React from "react";
import "./app.css";

import ServerHandler from "./server_handler";
const print = console.log;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
        };
        this.RenderLoadedPage = this.RenderLoadedPage.bind(this);
        this.RenderMainPage = this.RenderMainPage.bind(this);
    }

    componentDidMount() {
        this.serverHandler = new ServerHandler((content) =>
            this.setState({ content: content })
        );
    }

    render() {
        if (this.state.content === null)
            return this.RenderMainPage(this.RenderLoadingPage);
        return this.RenderMainPage(this.RenderLoadedPage);
    }

    RenderMainPage(RenderContent) {
        return <>{RenderContent()}</>;
    }

    RenderLoadingPage() {
        return (
            <div className="content">
                <h1>Loading...</h1>
            </div>
        );
    }

    RenderLoadedPage() {
        return <div className="content"></div>;
    }
}

export default App;
