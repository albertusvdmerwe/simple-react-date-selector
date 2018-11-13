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
var GeneralModal = /** @class */ (function (_super) {
    __extends(GeneralModal, _super);
    function GeneralModal(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnClick = _this.handleOnClick.bind(_this);
        return _this;
    }
    GeneralModal.prototype.handleOnClick = function () {
        var _a = this.props.onClick, onClick = _a === void 0 ? null : _a;
        if (typeof onClick === "function") {
            onClick();
        }
    };
    GeneralModal.prototype.render = function () {
        var _a = this.props, visible = _a.visible, children = _a.children;
        var additionalClass = visible ? "modal-visible" : "";
        return (React.createElement("div", { className: "general-modal " + additionalClass, onClick: this.handleOnClick }, children));
    };
    return GeneralModal;
}(Component));
export default GeneralModal;
//# sourceMappingURL=general-modal.js.map