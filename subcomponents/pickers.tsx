import React, { Component } from "react";

import Year from "./options/year";
import Month from "./options/month";
import Day from "./options/day";
import SelectedDatesDisplay from "./selected-dates-display";

interface Props {
  onChange: (value: string, type: string) => void;
  year: string;
  month: string;
  day: string;
  headerStyles: object;
  bodyStyles: object;
  containerStyles: object;
  footerStyles: object;
}

class Pickers extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(value: string, type: string):void {
    const { onChange } = this.props;
    onChange(value, type);
  }

  render() {
    const { props,handleOnChange } = this;
    const {containerStyles } = props;

    return (
      <div
        className="simple-react-date-selector-datepickers"
        style={containerStyles}
      >
        <Year {...props} onChange={handleOnChange} />
        <Month {...props} onChange={handleOnChange} />
        <Day {...props} onChange={handleOnChange} />
        <SelectedDatesDisplay {...props} />
      </div>
    );
  }
}

export default Pickers;
