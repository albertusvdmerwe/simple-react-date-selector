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
import React, { Component } from "react";
import moment from "moment";
import Selections from "./item/selections";
var currentYear = moment().year();
var Year = /** @class */ (function (_super) {
    __extends(Year, _super);
    function Year(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnClick = _this.handleOnClick.bind(_this);
        return _this;
    }
    Year.prototype.getYearArray = function () {
        var yearItems = [];
        for (var x = currentYear - 15; x <= currentYear; x++) {
            yearItems.push(x);
        }
        return yearItems.reverse();
    };
    Year.prototype.handleOnClick = function (value) {
        var onChange = this.props.onChange;
        onChange(value);
    };
    Year.prototype.getYearAsString = function (year) {
        return year.toString();
    };
    Year.prototype.render = function () {
        var _this = this;
        var _a = this.props, year = _a.year, month = _a.month, day = _a.day, headerStyles = _a.headerStyles, bodyStyles = _a.bodyStyles;
        if (!year && !month && !day) {
            return (React.createElement("div", { className: "simple-react-date-selector-scrollables" },
                React.createElement("div", { className: "simple-react-date-selector-selection-heading", style: headerStyles }, "Year"),
                React.createElement("div", { style: bodyStyles }, this.getYearArray().map(function (yearValue) {
                    var yearAsString = _this.getYearAsString(yearValue);
                    return (React.createElement(Selections, { key: "years-selector-" + yearAsString, value: yearAsString, onClick: _this.handleOnClick }));
                }))));
        }
        return null;
    };
    return Year;
}(Component));
export default Year;
//# sourceMappingURL=year.js.map