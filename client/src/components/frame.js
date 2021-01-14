import React from "react";
import "./frame.css";

class Frame extends React.Component {
    render() {
        return (
            <div>
                <img
                    src={this.props.imgPath}
                    alt={this.props.title}
                    className={this.props.addClass}
                />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Frame;
