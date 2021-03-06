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
import React, { Component } from "react";
import moment from "moment";
import Pickers from "./subcomponents/pickers";
import DateInputField from "./subcomponents/input-field";
import GeneralModal from "./general-modal/general-modal";
import { deepClone } from "./helpers/objects.helpers";
import { stylesObjects } from "./styles/styles-objects";
import { defaultState } from "./state";
var header = stylesObjects.header, body = stylesObjects.body, container = stylesObjects.container, footer = stylesObjects.footer;
var currentYear = moment().year();
var Datepicker = /** @class */ (function (_super) {
    __extends(Datepicker, _super);
    function Datepicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = defaultState;
        _this.closeModal = _this.closeModal.bind(_this);
        _this.handleItemSelected = _this.handleItemSelected.bind(_this);
        _this.handleDateInputFieldClicked = _this.handleDateInputFieldClicked.bind(_this);
        return _this;
    }
    Datepicker.prototype.checkAndInvokeListeners = function () {
        var _a = this.props, _b = _a.onClosed, onClosed = _b === void 0 ? null : _b, _c = _a.onOpened, onOpened = _c === void 0 ? null : _c;
        var modalVisible = this.state.modalVisible;
        if (typeof onClosed === "function" && modalVisible === false) {
            onClosed();
        }
        if (typeof onOpened === "function" && modalVisible === true) {
            onOpened();
        }
    };
    Datepicker.prototype.getSetFullDate = function () {
        var _this = this;
        var fullDate = "";
        var _a = this.state, year = _a.year, month = _a.month, day = _a.day;
        var onChange = this.props.onChange;
        if (year && month && day) {
            fullDate = year + "-" + month + "-" + day;
        }
        if (fullDate !== "") {
            this.setState(defaultState, function () {
                onChange(fullDate);
                _this.checkAndInvokeListeners();
            });
        }
    };
    Datepicker.prototype.closeModal = function () {
        this.setState(defaultState, this.checkAndInvokeListeners);
    };
    Datepicker.prototype.showModal = function () {
        var newState = deepClone(defaultState);
        newState = Object.assign({}, newState, { modalVisible: true });
        this.setState(newState, this.checkAndInvokeListeners);
    };
    Datepicker.prototype.handleItemSelected = function (value, type) {
        if (type === "year") {
            this.setState({ year: value }, this.getSetFullDate);
        }
        if (type === "month") {
            this.setState({ month: value }, this.getSetFullDate);
        }
        if (type === "day") {
            this.setState({ day: value }, this.getSetFullDate);
        }
    };
    Datepicker.prototype.handleDateInputFieldClicked = function () {
        this.setState({ modalVisible: true }, this.checkAndInvokeListeners);
    };
    Datepicker.prototype.updateDatePickerVisibility = function () {
        var _a = this.props.visible, visible = _a === void 0 ? null : _a;
        if (typeof visible === "boolean") {
            if (visible === true) {
                this.showModal();
            }
            if (visible === false) {
                this.closeModal();
            }
        }
    };
    Datepicker.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.visible !== prevProps.visible) {
            this.updateDatePickerVisibility();
        }
    };
    Datepicker.prototype.componentDidMount = function () {
        this.updateDatePickerVisibility();
    };
    Datepicker.prototype.render = function () {
        var _a = this.props, placeholder = _a.placeholder, value = _a.value, _b = _a.headerStyles, headerStyles = _b === void 0 ? header : _b, _c = _a.bodyStyles, bodyStyles = _c === void 0 ? body : _c, _d = _a.containerStyles, containerStyles = _d === void 0 ? container : _d, _e = _a.footerStyles, footerStyles = _e === void 0 ? footer : _e, _f = _a.yearRange, yearRange = _f === void 0 ? { from: currentYear - 15, to: currentYear + 15 } : _f;
        var modalVisible = this.state.modalVisible;
        var _g = this, handleItemSelected = _g.handleItemSelected, closeModal = _g.closeModal;
        return (React.createElement("div", { className: "simple-react-date-selector" },
            React.createElement(GeneralModal, { visible: modalVisible, onClick: closeModal },
                React.createElement(Pickers, __assign({}, this.state, {
                    bodyStyles: bodyStyles,
                    containerStyles: containerStyles,
                    footerStyles: footerStyles,
                    headerStyles: headerStyles,
                    yearRange: yearRange
                }, { onChange: handleItemSelected }))),
            React.createElement(DateInputField, { placeholder: placeholder, onClick: this.handleDateInputFieldClicked, value: value })));
    };
    return Datepicker;
}(Component));
export default Datepicker;
//# sourceMappingURL=datepicker.js.map