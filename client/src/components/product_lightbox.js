import React from "react";
import "./product_lightbox.css";

class ProductLightbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: 0,
        };
        this.info = props.info;
        this.ChangeDisplayedImage = this.ChangeDisplayedImage.bind(this);
    }

    ChangeDisplayedImage() {
        if (this.state.selectedImage + 1 === this.info.imagePaths.length)
            this.setState({ selectedImage: 0 });
        else this.setState({ selectedImage: this.state.selectedImage + 1 });
    }

    render() {
        return (
            <div className="border">
                <img
                    className="image-lightbox"
                    src={this.info.imagePaths[this.state.selectedImage]}
                    alt={this.info.title}
                />
                <button onClick={this.ChangeDisplayedImage}>&gt;</button>
                <h1>{this.info.title}</h1>
                <p>{this.info.description}</p>
            </div>
        );
    }
}

export default ProductLightbox;
