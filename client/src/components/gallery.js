import React from "react";
import "./gallery.css";

import Frame from "./frame";

class Gallery extends React.Component {
    render() {
        let content = this.props.content;
        return (
            <>
                <h1 className="main-title">{content.title}</h1>
                <div className="baseGrid">
                    <div className="item1">
                        <Frame
                            addClass="mainPic"
                            title={content.mainImage.title}
                            imgPath={content.mainImage.path}
                            lightbox={content.mainImage.lightbox}
                        />
                    </div>
                    <div className="innerGrid item2">
                        {content.secondaryImages.map((info) => (
                            <div key={info.title}>
                                <Frame
                                    title={info.title}
                                    imgPath={info.path}
                                    lightbox={info.lightbox}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Gallery;
