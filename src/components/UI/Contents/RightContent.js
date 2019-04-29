import React, { Component } from 'react';

import Slider from '../Slider/Slider';
import CheckBox from '../CheckBox/CheckBox';
import './RightContent.css'

class RightContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: {
                volume: {
                    isDisplay: false,
                    text: 'Volume Normalization'
                },
                noise: {
                    isDisplay: false,
                    text: 'Ambient Noise Reduction'
                },
                voice: {
                    isDisplay: false,
                    text: 'Voice Clarity'
                }
            }

        };
    }

    checkedBoxHandler(id) {
        let isDisplay = false;
        const checkbox = this.state.checkbox;

        if (id === 'volume') {
            isDisplay = this.state.checkbox[id].isDisplay;
            
            this.setState({
                
                checkbox: {
                    ...checkbox,
                    volume: {
                        ...checkbox[id],
                        isDisplay: !isDisplay
                    }
                }
            })
        }else if(id === 'noise'){
            isDisplay = this.state.checkbox[id].isDisplay;
            this.setState({
                checkbox: {
                    ...checkbox,
                    noise: {
                        ...checkbox[id],
                        isDisplay: !isDisplay
                    }
                }
            })
        }else if(id === 'voice'){
            isDisplay = this.state.checkbox[id].isDisplay;
            this.setState({
                checkbox: {
                    ...checkbox,
                    voice: {
                        ...checkbox[id],
                        isDisplay: !isDisplay
                    }
                }
            })
        }
    }

    render() {
        const CheckBoxArray = [];

        for (let e in this.state.checkbox) {
            CheckBoxArray.push({
                id: e,
                checked: this.state.checkbox[e].isDisplay,
                text: this.state.checkbox[e].text
            })
        }
        return (
            <div className="widget-col col-right flex">
                <div className="widget" id="micSidetone">
                    <Slider
                        title="SideTone"
                        footmin="0" footmax="100"
                    ></Slider>
                </div>
                <div className="widget" id="micEnhance">
                    <div className="help"></div>
                    <div className="tip">
                        I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
					</div>
                    <div className="title">enhancements</div>
                    {CheckBoxArray.map(checkboxElement => (
                        <CheckBox key = {checkboxElement.id}
                            isDisplay={checkboxElement.checked}
                            clicked={() => this.checkedBoxHandler(checkboxElement.id)}
                            id={checkboxElement.id}
                            text={checkboxElement.text}>
                            <Slider isDisplay={checkboxElement.checked}
                            title = "" secondTitle=""
                                footmin="low" footmid="medium" footmax="high"
                            ></Slider>
                        </CheckBox>
                    ))}

                </div>
            </div>
        );
    }

}

export default RightContent;