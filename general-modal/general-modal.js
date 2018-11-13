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
    function GeneralModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralModal.prototype.render = function () {
        var _a = this.props, visible = _a.visible, children = _a.children, _b = _a.onClick, onClick = _b === void 0 ? null : _b;
        var additionalClass = visible ? "modal-visible" : "";
        return (React.createElement("div", { className: "general-modal " + additionalClass, onClick: function () {
                if (typeof onClick === "function") {
                    onClick();
                }
            } }, children));
    };
    return GeneralModal;
}(Component));
export default GeneralModal;
//# sourceMappingURL=general-modal.js.map