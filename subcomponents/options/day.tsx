import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import Selections from "./item/selections";

class Day extends Component {
    
    getDayArray(){
        const daysArray=[];
        const props=Object.assign(this.props);
        const {year,month}=props;
        const noOfDays=moment(`${year}-${month}`,"YYYY-MM").daysInMonth();
        for(var x=1;x<=noOfDays;x++)
        {
            daysArray.push(x);
        }

        return daysArray;
    }
    
    render() {

        const {onChange,year,month,day,headerStyles,bodyStyles}=this.props;

        if(year&&month&&!day)
        {   
            return (
                <div className="simple-react-date-selector-scrollables">
                    <div className="simple-react-date-selector-selection-heading" style={headerStyles}>Day</div>
                    <div style={bodyStyles}>
                        {   
                            this.getDayArray()
                            .map(
                                day=>
                                {
                                    day=String(day);
                                    
                                    if(day.length===1)
                                    {
                                        day=`0${day}`;
                                    }
        
        
                                    return <Selections key={`days-selector-${day}`} value={day} onClick={value=>onChange(value)}/>;
                                }
                            )
                        }
                    </div>
                </div>
            );
        }

        return null;
    }
}

Day.propTypes = {
    onChange:PropTypes.func.isRequired,
    year:PropTypes.string.isRequired,
    month:PropTypes.string.isRequired,
    day:PropTypes.string.isRequired,
    headerStyles:PropTypes.object.isRequired,
    bodyStyles:PropTypes.object.isRequired
};

export default Day;