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
var SelectedDatesDisplay = /** @class */ (function (_super) {
    __extends(SelectedDatesDisplay, _super);
    function SelectedDatesDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedDatesDisplay.prototype.render = function () {
        var _a = this.props, year = _a.year, month = _a.month, day = _a.day, footerStyles = _a.footerStyles;
        if (year !== "") {
            return (React.createElement("div", { className: "simple-react-date-selector-selections-made-container", style: footerStyles },
                React.createElement("table", { className: "simple-react-date-selector-selections-made" },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, year),
                            React.createElement("td", null, month),
                            React.createElement("td", null, day))))));
        }
        return null;
    };
    return SelectedDatesDisplay;
}(Component));
export default SelectedDatesDisplay;
//# sourceMappingURL=selected-dates-display.js.map