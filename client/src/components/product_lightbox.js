import React from "react";
import "./product_lightbox.css";

class ProductLightbox extends React.Component {
    render() {
        return (
            <div className="border">
                <img
                    className="image-lightbox"
                    src={this.props.imgPath}
                    alt="DERP"
                ></img>
            </div>
        );
    }
}

export default ProductLightbox;
