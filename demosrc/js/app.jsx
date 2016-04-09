/* eslint-env browser */

import React from "react";
import ReactDOM from "react-dom";
import es6BindAll from "es6bindall";
import ReactNativeBootstrapSlider from "../../dist/react-native-bootstrap-slider.js";

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: props.startValue,
            min: props.min,
            max: props.max,
            step: props.step
        };
        es6BindAll(this, ["changeValue", "changeAxes"]);
    }
    changeValue(e) {
        this.setState({ currentValue: e.target.value });
    }
    changeAxes() {
        this.setState({
            currentValue: 500,
            min: 0,
            max: 2000,
            step: 100
        });
    }
    render() {
        var newValue = this.state.currentValue;
        return (
            <div>
               <ReactNativeBootstrapSlider
                    value = { this.state.currentValue }
                    handleChange = { this.changeValue }
                    step = { this.state.step }
                    max = { this.state.max }
                    min = { this.state.min } />
                 <br /> <br />
                Value: { newValue }
                <br /><br />
                <button onClick = { this.changeAxes } > Change axes! </button>
            </div>
        );
    }

}

ReactDOM.render(<Demo
        polyfill = { false }
        startValue = { 3000 }
        max = { 20000 }
        min = { 1000 }
        step = { 1000 } />, document.getElementById("main"));
