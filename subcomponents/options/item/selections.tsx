import React, { Component } from "react";

interface Props {
  value: string;
  onClick: (value: string) => void;
}

class Selections extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event):void {
    event.stopPropagation();
    const { value, onClick } = this.props;
    onClick(value);
  }

  render() {
    const { value } = this.props;

    return (
      <div
        className="simple-react-date-selector-selections"
        onClick={this.handleClick}
      >
        {value}
      </div>
    );
  }
}

export default Selections;
