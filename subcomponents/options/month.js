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
import Selections from "./item/selections";
var Month = /** @class */ (function (_super) {
    __extends(Month, _super);
    function Month(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnClick = _this.handleOnClick.bind(_this);
        return _this;
    }
    Month.prototype.getMonthArray = function () {
        var monthItems = [];
        for (var x = 1; x <= 12; x++) {
            monthItems.push(x);
        }
        return monthItems;
    };
    Month.prototype.getMonthAsString = function (month) {
        if (month < 10) {
            return "0" + month.toString();
        }
        return month.toString();
    };
    Month.prototype.handleOnClick = function (value) {
        var onChange = this.props.onChange;
        onChange(value, 'month');
    };
    Month.prototype.render = function () {
        var _this = this;
        var _a = this.props, year = _a.year, month = _a.month, day = _a.day, headerStyles = _a.headerStyles, bodyStyles = _a.bodyStyles;
        if (year && !month && !day) {
            return (React.createElement("div", { className: "simple-react-date-selector-scrollables" },
                React.createElement("div", { className: "simple-react-date-selector-selection-heading", style: headerStyles }, "Month"),
                React.createElement("div", { style: bodyStyles }, this.getMonthArray().map(function (monthValue) {
                    var monthAsString = _this.getMonthAsString(monthValue);
                    return (React.createElement(Selections, { key: "months-selector-" + monthAsString, value: monthAsString, onClick: _this.handleOnClick }));
                }))));
        }
        return null;
    };
    return Month;
}(Component));
export default Month;
//# sourceMappingURL=month.js.map