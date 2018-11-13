import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import CalendarIcon from "@material-ui/icons/CalendarToday";

interface Props{
    placeholder:string;
    onClick:()=>void;
    value:string;
}

class DateInputField extends Component <Props,{}>{

    render() {

        const{placeholder,onClick,value}=this.props;

        return (
            <TextField
                label={placeholder}
                value={value}
                type="text"
                margin="normal"
                variant="outlined"
                disabled
                InputProps={{
                    endAdornment:<CalendarIcon style={{cursor:'pointer'}} onClick={onClick}/>
                  }}
            />
        );
    }
}

export default DateInputField;