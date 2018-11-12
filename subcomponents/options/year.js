import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

import Selections from "./item/selections";
const year = moment().year();

class Year extends Component {
    
    getYearArray(){
        var yearItems=[];
        
        for(var x=1980;x<=year;x++)
        {
            yearItems.push(x);
        }

        return yearItems.reverse();
    }
    
    render() {

        const {onChange,year,month,day,headerStyles,bodyStyles}=this.props;

        if(!year&&!month&&!day)
        {
            return (
                <div className="simple-react-date-selector-scrollables">
                    <div className="simple-react-date-selector-selection-heading" style={headerStyles}>Year</div>
                    <div style={bodyStyles}>
                    {   
                        this.getYearArray()
                         .map(
                            year=><Selections key={`years-selector-${year}`} value={String(year)} onClick={value=>onChange(value)}/>
                        )
                    }
                    </div>
                </div>
            );
        }

        return null;
    }
}

Year.propTypes={
    onChange:PropTypes.func.isRequired,
    year:PropTypes.string.isRequired,
    month:PropTypes.string.isRequired,
    day:PropTypes.string.isRequired,
    headerStyles:PropTypes.object.isRequired,
    bodyStyles:PropTypes.object.isRequired
};


export default Year;