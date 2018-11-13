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
var Day = /** @class */ (function (_super) {
    __extends(Day, _super);
    function Day(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Day.prototype.getDayArray = function () {
        var daysArray = [];
        var _a = this.props, year = _a.year, month = _a.month;
        var noOfDays = moment(year + "-" + month, "YYYY-MM").daysInMonth();
        for (var x = 1; x <= noOfDays; x++) {
            daysArray.push(x);
        }
        return daysArray;
    };
    Day.prototype.handleClick = function (value) {
        var onChange = this.props.onChange;
        onChange(value, 'day');
    };
    Day.prototype.getFullDay = function (day) {
        if (day < 10) {
            return "0" + day.toString();
        }
        return day.toString();
    };
    Day.prototype.render = function () {
        var _this = this;
        var _a = this.props, year = _a.year, month = _a.month, day = _a.day, headerStyles = _a.headerStyles, bodyStyles = _a.bodyStyles;
        if (year && month && !day) {
            return (React.createElement("div", { className: "simple-react-date-selector-scrollables" },
                React.createElement("div", { className: "simple-react-date-selector-selection-heading", style: headerStyles }, "Day"),
                React.createElement("div", { style: bodyStyles }, this.getDayArray().map(function (dayValue) {
                    var dayAsString = _this.getFullDay(dayValue);
                    return (React.createElement(Selections, { key: "days-selector-" + dayAsString, value: dayAsString, onClick: _this.handleClick }));
                }))));
        }
        return null;
    };
    return Day;
}(Component));
export default Day;
//# sourceMappingURL=day.js.map