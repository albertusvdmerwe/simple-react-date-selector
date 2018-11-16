var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Datepicker from "../../datepicker";
var ExampleComponent = /** @class */ (function (_super) {
    __extends(ExampleComponent, _super);
    function ExampleComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: "",
            visible: true
        };
        /*reset this keyword to be this class - callbacks change the this keyword, change it back*/
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    ExampleComponent.prototype.handleChange = function (value) {
        /*value is the date as a string*/
        this.setState({ value: value });
    };
    ExampleComponent.prototype.componentDidMount = function () {
        /*
      
        toggle between visible and not every 5 seconds (just an example of this props in action)
        */
        var _this = this;
        window.setInterval(function () {
            _this.setState({ visible: !_this.state.visible });
        }, 5000);
    };
    ExampleComponent.prototype.render = function () {
        var _a = this.state, value = _a.value, visible = _a.visible;
        return (React.createElement(Datepicker, { yearRange: { from: 2000, to: 2015 }, onChange: this.handleChange, value: value, placeholder: "Select a date", visible: visible }));
    };
    return ExampleComponent;
}(Component));
ReactDOM.render(React.createElement(ExampleComponent, null), document.getElementById('root'));
//# sourceMappingURL=example.js.map