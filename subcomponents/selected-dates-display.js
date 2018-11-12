import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedDatesDisplay extends Component {
    
    render() {

        const {year,month,day,footerStyles}=this.props;

        if(year!=="")
        {
            return (
                <div className="simple-react-date-selector-selections-made-container" style={footerStyles}>
                     <table className="simple-react-date-selector-selections-made">
                        <tbody>
                            <tr>
                                <td>
                                    {year}
                                </td>
                                <td>
                                    {month}
                                </td>
                                <td>
                                    {day}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }

        return null;
    }
}

SelectedDatesDisplay.propTypes = {
    year:PropTypes.string.isRequired,
    month:PropTypes.string.isRequired,
    day:PropTypes.string.isRequired,
    footerStyles:PropTypes.object.isRequired,
};

export default SelectedDatesDisplay;