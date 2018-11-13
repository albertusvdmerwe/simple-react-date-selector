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
/**/
import Datepicker from "./index";
var Example = /** @class */ (function (_super) {
    __extends(Example, _super);
    function Example(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { Date: "" };
        return _this;
    }
    Example.prototype.render = function () {
        var _this = this;
        return (React.createElement(Datepicker, { onChange: function (date) { _this.setState({ Date: date }); }, placeholder: 'Date', value: this.state.Date }));
    };
    return Example;
}(Component));
export default Example;
//# sourceMappingURL=example.js.map