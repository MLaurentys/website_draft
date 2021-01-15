/*
 * This is the entry point of the react client application. The file contains
 *  the definition and implementation of application class.
 */

import React from "react";
import "./app.css";

import ServerHandler from "./server_handler";
import Menu from "./components/menu";
import Gallery from "./components/gallery";
import AdditionalContent from "./components/additional_content";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            menuState: "open",
        };
        this.RenderLoadedPage = this.RenderLoadedPage.bind(this);
        this.RenderMainPage = this.RenderMainPage.bind(this);
        this.ChangeMenuState = this.ChangeMenuState.bind(this);
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

    ChangeMenuState() {
        if (this.state.menuState === "open")
            this.setState({ menuState: "closed" });
        else this.setState({ menuState: "open" });
    }

    RenderMainPage(RenderContent) {
        return (
            <>
                <div className={"menu " + this.state.menuState}>
                    <Menu
                        clickCB={this.ChangeMenuState}
                        state={this.state.menuState}
                    />
                </div>
                <section className={"main-page menu-" + this.state.menuState}>
                    <div id="serverContent">{RenderContent()}</div>
                    <button
                        className="make-scroll-button"
                        onClick={() =>
                            document
                                .getElementById("additionalContent")
                                .scrollIntoView()
                        }
                    >
                        &#8615;
                    </button>
                    <div id="additionalContent">
                        <AdditionalContent />
                    </div>
                </section>
            </>
        );
    }

    RenderLoadingPage() {
        return <h1>Loading...</h1>;
    }

    RenderLoadedPage() {
        return <Gallery content={this.state.content} />;
    }
}

export default App;
