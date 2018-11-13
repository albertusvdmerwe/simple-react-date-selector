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
import moment from "moment";
import Selections from "./item/selections";
var year = moment().year();
var Year = /** @class */ (function (_super) {
    __extends(Year, _super);
    function Year() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Year.prototype.getYearArray = function () {
        var yearItems = [];
        for (var x = 1980; x <= year; x++) {
            yearItems.push(x);
        }
        return yearItems.reverse();
    };
    Year.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, year = _a.year, month = _a.month, day = _a.day, headerStyles = _a.headerStyles, bodyStyles = _a.bodyStyles;
        if (!year && !month && !day) {
            return (React.createElement("div", { className: "simple-react-date-selector-scrollables" },
                React.createElement("div", { className: "simple-react-date-selector-selection-heading", style: headerStyles }, "Year"),
                React.createElement("div", { style: bodyStyles }, this.getYearArray()
                    .map(function (year) { return React.createElement(Selections, { key: "years-selector-" + year, value: String(year), onClick: function (value) { return onChange(value); } }); }))));
        }
        return null;
    };
    return Year;
}(Component));
export default Year;
//# sourceMappingURL=year.js.map