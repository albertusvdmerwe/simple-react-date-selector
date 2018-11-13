import React, { Component } from "react";
import Selections from "./item/selections";

interface Props {
  onChange: (value: string) => void;
  year: string;
  month: string;
  day: string;
  headerStyles: object;
  bodyStyles: object;
}

class Month extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  getMonthArray(): number[] {
    const monthItems = [];

    for (let x = 1; x <= 12; x++) {
      monthItems.push(x);
    }

    return monthItems;
  }

  getMonthAsString(month: number): string {
    if (month < 10) {
      return `0${month.toString()}`;
    }

    return month.toString();
  }

  handleOnClick(value: string): void {
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const { year, month, day, headerStyles, bodyStyles } = this.props;

    if (year && !month && !day) {
      return (
        <div className="simple-react-date-selector-scrollables">
          <div
            className="simple-react-date-selector-selection-heading"
            style={headerStyles}
          >
            Month
          </div>
          <div style={bodyStyles}>
            {this.getMonthArray().map((monthValue: number) => {
              const monthAsString: string = this.getMonthAsString(monthValue);

              return (
                <Selections
                  key={`months-selector-${monthAsString}`}
                  value={monthAsString}
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

export default Month;
