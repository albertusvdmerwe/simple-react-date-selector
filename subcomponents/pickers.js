"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var year_1 = require("./options/year");
var month_1 = require("./options/month");
var day_1 = require("./options/day");
var selected_dates_display_1 = require("./selected-dates-display");
var Pickers = /** @class */ (function (_super) {
    __extends(Pickers, _super);
    function Pickers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pickers.prototype.render = function () {
        var props = this.props;
        var onChange = props.onChange, containerStyles = props.containerStyles;
        return (react_1.default.createElement("div", { className: "simple-react-date-selector-datepickers", style: containerStyles },
            react_1.default.createElement(year_1.default, __assign({}, props, { onChange: function (value) { return onChange(value, 'year'); } })),
            react_1.default.createElement(month_1.default, __assign({}, props, { onChange: function (value) { return onChange(value, 'month'); } })),
            react_1.default.createElement(day_1.default, __assign({}, props, { onChange: function (value) { return onChange(value, 'day'); } })),
            react_1.default.createElement(selected_dates_display_1.default, __assign({}, props))));
    };
    return Pickers;
}(react_1.Component));
Pickers.propTypes = {
    onChange: prop_types_1.default.func.isRequired,
    year: prop_types_1.default.string.isRequired,
    month: prop_types_1.default.string.isRequired,
    day: prop_types_1.default.string.isRequired,
    headerStyles: prop_types_1.default.object.isRequired,
    bodyStyles: prop_types_1.default.object.isRequired,
    containerStyles: prop_types_1.default.object.isRequired,
    footerStyles: prop_types_1.default.object.isRequired
};
exports.default = Pickers;
//# sourceMappingURL=pickers.js.map