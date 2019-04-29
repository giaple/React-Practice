import React, { Component } from 'react';

import Slider from '../Slider/Slider';

class LeftContent extends Component {
    render() {
        return (
            <div className="widget-col col-left flex">
                <div className="widget" id="micPhone">
                    <div className="help"></div>
                    <div className="tip">
                        I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
							</div>

                    <Slider
                        title="microphone"
                        secondTitle="mic volume"
                        footmin="low" footmid="medium" footmax="high"
                    >
                    </Slider>
                    <Slider
                        title=""
                        secondTitle="MIC SENSITIVITY"
                        footmin="low" footmid="medium" footmax="high"
                        h2body="Adjust this setting to remove unwanted background noise or increase the amount of mic output heard"
                    />

                </div>
            </div>
        );
    }
}

export default LeftContent;