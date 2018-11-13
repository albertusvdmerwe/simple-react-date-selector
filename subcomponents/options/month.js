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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var selections_1 = require("./item/selections");
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
            return (react_1.default.createElement("div", { className: "simple-react-date-selector-scrollables" },
                react_1.default.createElement("div", { className: "simple-react-date-selector-selection-heading", style: headerStyles }, "Month"),
                react_1.default.createElement("div", { style: bodyStyles }, this.getMonthArray()
                    .map(function (month) {
                    month = String(month);
                    if (month.length === 1) {
                        month = "0" + month;
                    }
                    return react_1.default.createElement(selections_1.default, { key: "months-selector-" + month, value: month, onClick: function (value) { return onChange(value); } });
                }))));
        }
        return null;
    };
    return Month;
}(react_1.Component));
Month.propTypes = {
    onChange: prop_types_1.default.func.isRequired,
    year: prop_types_1.default.string.isRequired,
    month: prop_types_1.default.string.isRequired,
    day: prop_types_1.default.string.isRequired,
    headerStyles: prop_types_1.default.object.isRequired,
    bodyStyles: prop_types_1.default.object.isRequired
};
exports.default = Month;
//# sourceMappingURL=month.js.map