import React from "react";
import Modal from "react-modal";
import "./frame.css";

import ProductLightbox from "./product_lightbox";

Modal.setAppElement("#root");

class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };

        this.RenderModal = this.RenderModal.bind(this);
        this.RenderNormal = this.RenderNormal.bind(this);
    }

    render() {
        if (this.state.selected) return this.RenderModal();
        return this.RenderNormal();
    }

    RenderNormal() {
        return (
            <div
                className="frame"
                onClick={() => this.setState({ selected: true })}
            >
                <img
                    className={"gallery-image " + this.props.addClass}
                    src={this.props.imgPath}
                    alt={this.props.title}
                />
                <h1 className="frame-caption">{this.props.title}</h1>
            </div>
        );
    }

    RenderModal() {
        return (
            <Modal
                className="frame-modal"
                isOpen={true}
                onRequestClose={() => this.setState({ selected: false })}
            >
                <ProductLightbox imgPath={this.props.imgPath} />
            </Modal>
        );
    }
}

export default Frame;
