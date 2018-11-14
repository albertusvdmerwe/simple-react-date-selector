import React, { Component } from "react";

interface Props {
  visible: boolean;
  children: JSX.Element;
  onClick?: () => void;
  onOpened: () => void;
  onClosed: () => void;
}

export default class GeneralModal extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event): void {
    event.stopPropagation();
    const { onClick = null } = this.props;
    if (typeof onClick === "function") {
      onClick();
    }
  }

  handleVisibilityEventListeners(): void {
    const { visible, onOpened, onClosed } = this.props;

    if (visible === true && typeof onOpened === "function") {
      onOpened();
    }

    if (visible === false && typeof onClosed === "function") {
      onClosed();
    }
  }

  render() {
    const { visible, children } = this.props;
    const additionalClass: string = visible ? "modal-visible" : "";
    this.handleVisibilityEventListeners();

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
