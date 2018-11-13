import React, { Component } from "react";

interface Props {
  visible: boolean;
  children: JSX.Element;
  onClick?: () => void;
}

export default class GeneralModal extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    event.stopPropagation();
    const { onClick = null } = this.props;
    if (typeof onClick === "function") {
      onClick();
    }
  }

  render() {
    const { visible, children } = this.props;

    const additionalClass: string = visible ? "modal-visible" : "";

    return (
      <div
        className={`general-modal ${additionalClass}`}
        onClick={this.handleOnClick}
      >
        {children}
      </div>
    );
  }
}
