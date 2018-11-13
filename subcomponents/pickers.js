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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from 'react';
import Year from "./options/year";
import Month from "./options/month";
import Day from "./options/day";
import SelectedDatesDisplay from "./selected-dates-display";
var Pickers = /** @class */ (function (_super) {
    __extends(Pickers, _super);
    function Pickers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pickers.prototype.render = function () {
        var props = this.props;
        var onChange = props.onChange, containerStyles = props.containerStyles;
        return (React.createElement("div", { className: "simple-react-date-selector-datepickers", style: containerStyles },
            React.createElement(Year, __assign({}, props, { onChange: function (value) { return onChange(value, 'year'); } })),
            React.createElement(Month, __assign({}, props, { onChange: function (value) { return onChange(value, 'month'); } })),
            React.createElement(Day, __assign({}, props, { onChange: function (value) { return onChange(value, 'day'); } })),
            React.createElement(SelectedDatesDisplay, __assign({}, props))));
    };
    return Pickers;
}(Component));
export default Pickers;
//# sourceMappingURL=pickers.js.map