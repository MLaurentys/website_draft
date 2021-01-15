import React from "react";

import "./additional_content.css";

class AdditionalContent extends React.Component {
    render() {
        return (
            <>
                <img
                    className="additional-section-icon"
                    src="thumbs_down_icon.png"
                    alt="thumbs down icon"
                />
                <h1>Tablets</h1>
                <p>
                    A tablet computer, commonly shortened to tablet, is a mobile
                    device, typically with a mobile operating system and
                    touchscreen display processing circuitry, and a rechargeable
                    battery in a single, thin and flat package. Tablets, being
                    computers, do what other personal computers do, but lack
                    some input/output (I/O) abilities that others have. Modern
                    tablets largely resemble modern smartphones, the only
                    differences being that tablets are relatively larger than
                    smartphones, with screens 7 inches (18 cm) or larger,
                    measured diagonally,and may not support access to a cellular
                    network.
                </p>
                <p>
                    The touchscreen display is operated by gestures executed by
                    finger or digital pen (stylus), instead of the mouse,
                    touchpad, and keyboard of larger computers. Portable
                    computers can be classified according to the presence and
                    appearance of physical keyboards. Two species of tablet, the
                    slate and booklet, do not have physical keyboards and
                    usually accept text and other input by use of a virtual
                    keyboard shown on their touchscreen displays. To compensate
                    for their lack of a physical keyboard, most tablets can
                    connect to independent physical keyboards by Bluetooth or
                    USB; 2-in-1 PCs have keyboards, distinct from tablets.
                </p>
                <div className="images">
                    <img
                        src={
                            "https://cdn.pixabay.com/photo/2017/02/26/04/02/" +
                            "woman-2099465_960_720.jpg"
                        }
                        alt="Mulher sorrindo usando um tablet"
                    />
                    <img
                        src={
                            "https://images.freeimages.com/images/" +
                            "large-previews/f32/pills-tablets-1-1524568.jpg"
                        }
                        alt="Um monte de pílulas e remédios"
                    />
                </div>
                <p>
                    The form of the tablet was conceptualized in the middle of
                    the 20th century (Stanley Kubrick depicted fictional tablets
                    in the 1968 science fiction film A Space Odyssey) and
                    prototyped and developed in the last two decades of that
                    century. In 2010, Apple released the iPad, the first
                    mass-market tablet to achieve widespread popularity.[5]
                    Thereafter, tablets rapidly rose in ubiquity and soon became
                    a large product category used for personal, educational and
                    workplace applications,[6] with sales stabilizing in the
                    mid-2010s.[7][8][9] Popular uses for a tablet PC include
                    viewing presentations, video-conferencing, reading e-books,
                    watching movies, sharing photos and more.[10]
                </p>
            </>
        );
    }
}

export default AdditionalContent;
