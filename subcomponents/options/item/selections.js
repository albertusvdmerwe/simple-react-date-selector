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
var Selections = /** @class */ (function (_super) {
    __extends(Selections, _super);
    function Selections(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Selections.prototype.handleClick = function (event) {
        event.stopPropagation();
        var _a = this.props, value = _a.value, onClick = _a.onClick;
        onClick(value);
    };
    Selections.prototype.render = function () {
        var value = this.props.value;
        return (React.createElement("div", { className: "simple-react-date-selector-selections", onClick: this.handleClick }, value));
    };
    return Selections;
}(Component));
export default Selections;
//# sourceMappingURL=selections.js.map