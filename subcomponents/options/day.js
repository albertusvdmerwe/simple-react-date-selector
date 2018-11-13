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
var Day = /** @class */ (function (_super) {
    __extends(Day, _super);
    function Day() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Day.prototype.getDayArray = function () {
        var daysArray = [];
        var props = Object.assign(this.props);
        var year = props.year, month = props.month;
        var noOfDays = moment(year + "-" + month, "YYYY-MM").daysInMonth();
        for (var x = 1; x <= noOfDays; x++) {
            daysArray.push(x);
        }
        return daysArray;
    };
    Day.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, year = _a.year, month = _a.month, day = _a.day, headerStyles = _a.headerStyles, bodyStyles = _a.bodyStyles;
        if (year && month && !day) {
            return (React.createElement("div", { className: "simple-react-date-selector-scrollables" },
                React.createElement("div", { className: "simple-react-date-selector-selection-heading", style: headerStyles }, "Day"),
                React.createElement("div", { style: bodyStyles }, this.getDayArray()
                    .map(function (day) {
                    day = String(day);
                    if (day.length === 1) {
                        day = "0" + day;
                    }
                    return React.createElement(Selections, { key: "days-selector-" + day, value: day, onClick: function (value) { return onChange(value); } });
                }))));
        }
        return null;
    };
    return Day;
}(Component));
export default Day;
//# sourceMappingURL=day.js.map