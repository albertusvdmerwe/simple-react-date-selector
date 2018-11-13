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
import TextField from "@material-ui/core/TextField";
import CalendarIcon from "@material-ui/icons/CalendarToday";
var DateInputField = /** @class */ (function (_super) {
    __extends(DateInputField, _super);
    function DateInputField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateInputField.prototype.render = function () {
        var _a = this.props, placeholder = _a.placeholder, onClick = _a.onClick, value = _a.value;
        return (React.createElement(TextField, { label: placeholder, value: value, type: "text", margin: "normal", variant: "outlined", disabled: true, InputProps: {
                endAdornment: React.createElement(CalendarIcon, { style: { cursor: 'pointer' }, onClick: onClick })
            } }));
    };
    return DateInputField;
}(Component));
export default DateInputField;
//# sourceMappingURL=input-field.js.map