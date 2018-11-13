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
        return (react_1.default.createElement("div", { className: "simple-react-date-selector-selections", onClick: this.handleClick }, value));
    };
    return Selections;
}(react_1.Component));
Selections.propTypes = {
    value: prop_types_1.default.string.isRequired,
    onClick: prop_types_1.default.func.isRequired,
};
exports.default = Selections;
//# sourceMappingURL=selections.js.map