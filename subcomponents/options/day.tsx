import React, { Component } from 'react';
import moment from "moment";
import Selections from "./item/selections";

interface Props{
    onChange:(value:string)=>void;
    year:string;
    month:string;
    day:string;
    headerStyles:object;
    bodyStyles:object;
}

class Day extends Component <Props, {}> {
    
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

export default Day;