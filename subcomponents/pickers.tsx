import React, { Component } from 'react';

import Year from "./options/year"; 
import Month from "./options/month";
import Day from "./options/day"; 
import SelectedDatesDisplay from "./selected-dates-display"; 

interface Props{
	onChange:(value:string,type:string)=>void;
	year:string;
	month:string;
	day:string;
	headerStyles:object;
	bodyStyles:object;
	containerStyles:object;
	footerStyles:object;
}

class Pickers extends Component <Props,{}>{  
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

export default Pickers;