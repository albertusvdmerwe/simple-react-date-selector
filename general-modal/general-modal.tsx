import React, { Component } from "react";

interface Props {
    visible: boolean;
    children: JSX.Element;
    onClick?: ()=> void;
}

export default class GeneralModal extends Component<Props, {}> {
    render() {

        const {visible, children, onClick=null} = this.props;

        const additionalClass = visible ? "modal-visible" : "";

        return (
            <div className={`general-modal ${additionalClass}`} onClick={() => {
                if (typeof onClick === "function") {
                    onClick();
                }
            }}>
                {children}
            </div>
        );
    }
}