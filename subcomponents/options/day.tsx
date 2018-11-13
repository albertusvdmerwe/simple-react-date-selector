import React, { Component } from "react";
import moment from "moment";
import Selections from "./item/selections";

interface Props {
  onChange: (value: string) => void;
  year: string;
  month: string;
  day: string;
  headerStyles: object;
  bodyStyles: object;
}

class Day extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getDayArray(): number[] {
    const daysArray = [];
    const { year, month } = this.props;
    const noOfDays: number = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
    for (let x = 1; x <= noOfDays; x++) {
      daysArray.push(x);
    }

    return daysArray;
  }

  handleClick(value: string): void {
    const { onChange } = this.props;
    onChange(value);
  }

  getFullDay(day: number): string {
    if (day < 10) {
      return `0${day.toString()}`;
    }

    return day.toString();
  }

  render() {
    const { year, month, day, headerStyles, bodyStyles } = this.props;

    if (year && month && !day) {
      return (
        <div className="simple-react-date-selector-scrollables">
          <div
            className="simple-react-date-selector-selection-heading"
            style={headerStyles}
          >
            Day
          </div>
          <div style={bodyStyles}>
            {this.getDayArray().map((dayValue :number) => {
              const dayAsString: string = this.getFullDay(dayValue);

              return (
                <Selections
                  key={`days-selector-${dayAsString}`}
                  value={dayAsString}
                  onClick={this.handleClick}
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

export default Day;
