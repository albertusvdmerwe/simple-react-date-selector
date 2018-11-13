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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from 'react';
import Pickers from "./subcomponents/pickers";
import DateInputField from "./subcomponents/input-field";
import GeneralModal from "./general-modal/general-modal";
import { stylesObjects } from "./styles/styles-objects";
import { defaultState } from "./state";
var header = stylesObjects.header, body = stylesObjects.body, container = stylesObjects.container, footer = stylesObjects.footer;
var Datepicker = /** @class */ (function (_super) {
    __extends(Datepicker, _super);
    function Datepicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = defaultState;
        _this.closeModal = _this.closeModal.bind(_this);
        _this.handleItemSelected = _this.handleItemSelected.bind(_this);
        return _this;
    }
    Datepicker.prototype.getSetFullDate = function () {
        var fullDate = "";
        var _a = this.state, year = _a.year, month = _a.month, day = _a.day;
        var onChange = this.props.onChange;
        if (year && month && day) {
            fullDate = year + "-" + month + "-" + day;
        }
        if (fullDate !== "") {
            this.setState(defaultState, function () { return onChange(fullDate); });
        }
    };
    Datepicker.prototype.closeModal = function () {
        this.setState(defaultState);
    };
    Datepicker.prototype.handleItemSelected = function (value, type) {
        if (type === 'year') {
            this.setState({ year: value }, this.getSetFullDate);
        }
        if (type === "month") {
            this.setState({ month: value }, this.getSetFullDate);
        }
        if (type === 'day') {
            this.setState({ day: value }, this.getSetFullDate);
        }
    };
    Datepicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, value = _a.value, _b = _a.headerStyles, headerStyles = _b === void 0 ? header : _b, _c = _a.bodyStyles, bodyStyles = _c === void 0 ? body : _c, _d = _a.containerStyles, containerStyles = _d === void 0 ? container : _d, _e = _a.footerStyles, footerStyles = _e === void 0 ? footer : _e;
        var modalVisible = this.state.modalVisible;
        var _f = this, handleItemSelected = _f.handleItemSelected, closeModal = _f.closeModal;
        return (React.createElement("div", { className: "simple-react-date-selector" },
            React.createElement(GeneralModal, { visible: modalVisible, onClick: closeModal },
                React.createElement(Pickers, __assign({}, this.state, { placeholder: placeholder, value: value, headerStyles: headerStyles, bodyStyles: bodyStyles, containerStyles: containerStyles, footerStyles: footerStyles }, { onChange: handleItemSelected }))),
            React.createElement(DateInputField, { placeholder: placeholder, onClick: function () { return _this.setState({ modalVisible: true }); }, value: value })));
    };
    return Datepicker;
}(Component));
export default Datepicker;
//# sourceMappingURL=datepicker.js.map