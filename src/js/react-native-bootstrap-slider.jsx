/* eslint-env browser */

import React from "react";
// import ReactDOM from "react-dom";
// import Slider from "bootstrap-slider";
import browser from "detect-browser";
// import es6BindAll from "es6bindall";
import ReactNativeSlider from "react-html5-slider";
import ReactBootstrapSlider from "react-bootstrap-slider";

/* export class ReactNativeSlider extends React.Component {
    render() {
        return ( < input type = "range"
            value = { this.props.value }
            min = { this.props.min }
            max = { this.props.max }
            onInput = { this.props.handleChange }
            onChange = { this.handleOnChange }
            step = { this.props.step }
            className = "react-native-slider" / >
        );
    }
    handleOnChange() {
        // Nothing to do here.  Only present to prevent reactjs warning
        // about onChange not being present
    }
}

export class ReactBootstrapSlider extends React.Component {
    constructor(props) {
        super(props);
        es6BindAll(this, ["updateSliderValues"]);
    }
    render() {
        // The slider"s an input.  That"s all we need.  We"ll do the rest in
        // the componentDidMount() method.
        return <input / >;
    }

    componentDidMount() {
        var that = this;
        this.mySlider = new Slider(ReactDOM.findDOMNode(this), {
            "tooltip": this.props.tooltip || "show"
        });
        this.updateSliderValues();
        this.mySlider.on("change", function(e) {
            var fakeEvent = {
                target: {}
            };
            fakeEvent.target.value = e.newValue;
            that.props.handleChange(fakeEvent);
        });
    }
    componentDidUpdate() {
        this.updateSliderValues();
    }
    updateSliderValues() {
        this.mySlider.setAttribute("min", this.props.min);
        this.mySlider.setAttribute("max", this.props.max);
        this.mySlider.setAttribute("step", this.props.step);
        this.mySlider.setValue(this.props.value);

        var sliderEnable = this.props.disabled === "disabled" ? false : true;
        var currentlyEnabled = this.mySlider.isEnabled();
        if (sliderEnable) {
            if (!currentlyEnabled) {
                this.mySlider.enable();
            }
        } else {
            if (currentlyEnabled) {
                this.mySlider.disable();
            }
        }
    }
} */


export class ReactNativeBootstrapSlider extends React.Component {
    constructor(props) {
        super(props);
        // Although IE10+ displays the native range control,it:
        //      a) looks crap
        //      b) doesn"t respond to its Input or Change events properly.
        // So have augmented a feature test with some good, old-fashioned
        // browser sniffing to always display the Bootstrap version on IE.
        // var browserVersion = parseInt(browser.version, 10);
        // if (browser.name === "ie" && (browserVersion > 9 && browserVersion < 12)) {
        if (browser.name === "ie" || browser.name === "edge") {
            // IE all versions.  Note: previous versions of this  module used to display
            // the native control on IE 12/Edge, but it actually looks crap there too.
            this.supportsRange = false;
        } else {
            // All other browsers except IE.
            // Test whether range input is accepted by creating such a field, then seeing what its
            // type is set to.
            var input = document.createElement("input");
            input.setAttribute("type", "range");
            this.supportsRange = input.type !== "text" ? true : false;
        }
    }

    render() {
        var polyfill = typeof this.props.polyfill === "undefined" ? true : this.props.polyfill;
        if (polyfill && this.supportsRange) {
            return <ReactNativeSlider {...this.props } />;

        } else {
            return <ReactBootstrapSlider {...this.props } />;
        }
    }
}

export default ReactNativeBootstrapSlider;
