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
var moment_1 = require("moment");
var selections_1 = require("./item/selections");
var Day = /** @class */ (function (_super) {
    __extends(Day, _super);
    function Day() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Day.prototype.getDayArray = function () {
        var daysArray = [];
        var _a = this.props, year = _a.year, month = _a.month;
        var noOfDays = moment_1.default(year + "-" + month, "YYYY-MM").daysInMonth();
        for (var x = 1; x <= noOfDays; x++) {
            daysArray.push(x);
        }
        return daysArray;
    };
    Day.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, year = _a.year, month = _a.month, day = _a.day, headerStyles = _a.headerStyles, bodyStyles = _a.bodyStyles;
        if (year && month && !day) {
            return (react_1.default.createElement("div", { className: "simple-react-date-selector-scrollables" },
                react_1.default.createElement("div", { className: "simple-react-date-selector-selection-heading", style: headerStyles }, "Day"),
                react_1.default.createElement("div", { style: bodyStyles }, this.getDayArray()
                    .map(function (day) {
                    day = String(day);
                    if (day.length === 1) {
                        day = "0" + day;
                    }
                    return react_1.default.createElement(selections_1.default, { key: "days-selector-" + day, value: day, onClick: function (value) { return onChange(value); } });
                }))));
        }
        return null;
    };
    return Day;
}(react_1.Component));
Day.propTypes = {
    onChange: prop_types_1.default.func.isRequired,
    year: prop_types_1.default.string.isRequired,
    month: prop_types_1.default.string.isRequired,
    day: prop_types_1.default.string.isRequired,
    headerStyles: prop_types_1.default.object.isRequired,
    bodyStyles: prop_types_1.default.object.isRequired
};
exports.default = Day;
//# sourceMappingURL=day.js.map