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
import Selections from "./item/selections";
var Month = /** @class */ (function (_super) {
    __extends(Month, _super);
    function Month() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Month.prototype.getMonthArray = function () {
        var monthItems = [];
        for (var x = 1; x <= 12; x++) {
            monthItems.push(x);
        }
        return monthItems;
    };
    Month.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, year = _a.year, month = _a.month, day = _a.day, headerStyles = _a.headerStyles, bodyStyles = _a.bodyStyles;
        if (year && !month && !day) {
            return (React.createElement("div", { className: "simple-react-date-selector-scrollables" },
                React.createElement("div", { className: "simple-react-date-selector-selection-heading", style: headerStyles }, "Month"),
                React.createElement("div", { style: bodyStyles }, this.getMonthArray()
                    .map(function (month) {
                    month = String(month);
                    if (month.length === 1) {
                        month = "0" + month;
                    }
                    return React.createElement(Selections, { key: "months-selector-" + month, value: month, onClick: function (value) { return onChange(value); } });
                }))));
        }
        return null;
    };
    return Month;
}(Component));
export default Month;
//# sourceMappingURL=month.js.map