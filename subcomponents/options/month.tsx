import React, { Component } from 'react';
import Selections from "./item/selections";

interface Props{
    onChange:(value:string)=>void;
    year:string;
    month:string;
    day:string;
    headerStyles:object;
    bodyStyles:object;
}


class Month extends Component <Props,{}>{
    
    getMonthArray(){
        const monthItems=[];

        for(var x=1;x<=12;x++)
        {
            monthItems.push(x);
        }

        return monthItems;
    }
    
    
    render() {
       
        const {onChange,year,month,day,headerStyles,bodyStyles} =this.props;

        if(year&&!month&&!day)
        {
            return (
                <div className="simple-react-date-selector-scrollables">
                    <div className="simple-react-date-selector-selection-heading" style={headerStyles}>Month</div>
                    <div style={bodyStyles}>
                    {   
                        this.getMonthArray()
                         .map(
                            month=>
                            {
                                month=String(month);
                                if(month.length===1){
                                    month=`0${month}`;
                                }

    
                                return <Selections key={`months-selector-${month}`} value={month} onClick={value=>onChange(value)}/>;
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

export default Month;