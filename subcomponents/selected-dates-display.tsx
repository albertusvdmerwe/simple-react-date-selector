import React, { Component } from "react";

interface Props {
  year: string;
  month: string;
  day: string;
  footerStyles: object;
}

class SelectedDatesDisplay extends Component<Props, {}> {
  render() {
    const { year, month, day, footerStyles } = this.props;

    if (year !== "") {
      return (
        <div
          className="simple-react-date-selector-selections-made-container"
          style={footerStyles}
        >
          <table className="simple-react-date-selector-selections-made">
            <tbody>
              <tr>
                <td>{year}</td>
                <td>{month}</td>
                <td>{day}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    return null;
  }
}

export default SelectedDatesDisplay;
