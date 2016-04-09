/* eslint-env browser */

import React from "react";
import browser from "detect-browser";
import ReactNativeSlider from "react-html5-slider";
import ReactBootstrapSlider from "react-bootstrap-slider";

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
