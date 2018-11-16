import React, { Component } from "react";
import YearRange from "../../interfaces/YearRange";
import Selections from "./item/selections";

interface Props {
  onChange: (value: string,type: string) => void;
  year: string;
  month: string;
  day: string;
  headerStyles: object;
  bodyStyles: object;
  yearRange:YearRange;
}

class Year extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  getYearArray(): number[] {
    const {yearRange}=this.props;

    const yearItems = [];

    for (let x = yearRange.from; x <= yearRange.to; x++) {
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
