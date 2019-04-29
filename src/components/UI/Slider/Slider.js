import React, { Component } from 'react';

import './Slider.css'

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            value: 50
        }
    }

    displaySliderHandler = () => {
        const isActive = this.state.isActive;

        this.setState({
            isActive: !isActive
        })
    }

    changedvalueHandler = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        let titleStyle = this.props.title !== "" ? "title" : "h2-title mt20";
        let titleText = this.props.title !== "" ? this.props.title : this.props.secondTitle;
        if (this.props.title === "" && this.props.secondTitle === "") {
            titleStyle = "";
        }
        let on = this.state.isActive || this.props.isDisplay? "on" : "";
        const isActive = this.state.isActive || this.props.isDisplay;
        return (
            <div>
                {titleStyle === "" ? null : <div className={titleStyle}>
                    {titleText}
                    <div className={"switch switch-slider " + on} onClick={() => this.displaySliderHandler()} >
                        <div className="handle"></div>
                    </div>
                </div>
                }

                {this.props.title !== "" ? <div className="h2-title mt20">{this.props.secondTitle}</div> : null}
                <div className="h2-body">{this.props.h2body}</div>
                <div className={"slider-container " + on} style={{ width: 512 }}>
                    <div className="foot min">{this.props.footmin}</div>
                    <div className="foot mid">{this.props.footmid}</div>
                    <div className="foot max">{this.props.footmax}</div>
                    <div id={this.props.idsl + "Fill"} className="left" style={{ width: 5.12 * this.state.value }} />
                    <div className="track" />
                    <div className="slider-tip" style={{ left: 5.12 * this.state.value }}>{this.state.value}</div>
                    <input type="range" min={0} max={100} step={1} className="slider" id={this.props.idsl + "Range"} defaultValue={this.state.value} disabled={!isActive} onChange={isActive ? this.changedvalueHandler : null} />
                </div>
            </div>
        );
    }
}

export default Slider;