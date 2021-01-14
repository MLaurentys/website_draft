import React from "react";
import "./gallery.css";

import Frame from "./frame";

class Gallery extends React.Component {
    render() {
        let content = this.props.content;
        return (
            <>
                <h1>{content.title}</h1>
                <div className="baseGrid">
                    <div className="frame main item1">
                        <Frame
                            addClass="mainPic"
                            title={content.mainImage.title}
                            imgPath={content.mainImage.path}
                        />
                    </div>
                    <div className="innerGrid item2">
                        {content.secondaryImages.map((info) => (
                            <div className="frame" key={info.title}>
                                <Frame
                                    title={info.title}
                                    imgPath={info.path}
                                    main=""
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
