import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Year from "./options/year";
import Month from "./options/month";
import Day from "./options/day";
import SelectedDatesDisplay from "./selected-dates-display";

class Pickers extends Component {
    render() {

        const {props}=this;
        const {onChange,containerStyles}=props;

        return (
            <div className="simple-react-date-selector-datepickers" style={containerStyles}>
                <Year {...props} onChange={value=>onChange(value,'year')}/>
                <Month {...props} onChange={value=>onChange(value,'month')}/>
                <Day {...props} onChange={value=>onChange(value,'day')}/>
                <SelectedDatesDisplay {...props}/>  
             </div>
        );
    }
}

Pickers.propTypes = {
    onChange:PropTypes.func.isRequired,
    year:PropTypes.string.isRequired,
    month:PropTypes.string.isRequired,
    day:PropTypes.string.isRequired,
    headerStyles:PropTypes.object.isRequired,
    bodyStyles:PropTypes.object.isRequired,
    containerStyles:PropTypes.object.isRequired,
    footerStyles:PropTypes.object.isRequired
};

export default Pickers;