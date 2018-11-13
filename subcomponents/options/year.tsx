import React, { Component } from "react";
import moment from "moment";

import Selections from "./item/selections";
const currentYear = moment().year();

interface Props {
  onChange: (value: string,type: string) => void;
  year: string;
  month: string;
  day: string;
  headerStyles: object;
  bodyStyles: object;
}

class Year extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  getYearArray(): number[] {
    const yearItems = [];

    for (let x = currentYear - 15; x <= currentYear; x++) {
      yearItems.push(x);
    }

    return yearItems.reverse();
  }

  handleOnClick(value: string): void {
    const { onChange } = this.props;
    onChange(value,'year');
  }

  getYearAsString(year: number): string {
    return year.toString();
  }

  render() {
    const { year, month, day, headerStyles, bodyStyles } = this.props;

    if (!year && !month && !day) {
      return (
        <div className="simple-react-date-selector-scrollables">
          <div
            className="simple-react-date-selector-selection-heading"
            style={headerStyles}
          >
            Year
          </div>
          <div style={bodyStyles}>
            {this.getYearArray().map((yearValue: number) => {
              const yearAsString: string = this.getYearAsString(yearValue);

              return (
                <Selections
                  key={`years-selector-${yearAsString}`}
                  value={yearAsString}
                  onClick={this.handleOnClick}
                />
              );
            })}
          </div>
        </div>
      );
    }

    return null;
  }
}

export default Year;
