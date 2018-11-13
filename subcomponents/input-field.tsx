import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import CalendarIcon from "@material-ui/icons/CalendarToday";

class DateInputField extends Component {

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

DateInputField.propTypes = {
    placeholder:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,
};

export default DateInputField;