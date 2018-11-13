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
var year = moment_1.default().year();
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
            return (react_1.default.createElement("div", { className: "simple-react-date-selector-scrollables" },
                react_1.default.createElement("div", { className: "simple-react-date-selector-selection-heading", style: headerStyles }, "Year"),
                react_1.default.createElement("div", { style: bodyStyles }, this.getYearArray()
                    .map(function (year) { return react_1.default.createElement(selections_1.default, { key: "years-selector-" + year, value: String(year), onClick: function (value) { return onChange(value); } }); }))));
        }
        return null;
    };
    return Year;
}(react_1.Component));
Year.propTypes = {
    onChange: prop_types_1.default.func.isRequired,
    year: prop_types_1.default.string.isRequired,
    month: prop_types_1.default.string.isRequired,
    day: prop_types_1.default.string.isRequired,
    headerStyles: prop_types_1.default.object.isRequired,
    bodyStyles: prop_types_1.default.object.isRequired
};
exports.default = Year;
//# sourceMappingURL=year.js.map