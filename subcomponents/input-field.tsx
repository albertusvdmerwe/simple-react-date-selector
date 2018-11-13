import React, { Component } from 'react';

interface Props{
    placeholder:string;
    onClick:()=>void;
    value:string;
}

class DateInputField extends Component <Props,{}>{

    render() {

        return (
            <input type="text" {...this.props} readOnly/>
        );
    }
}

export default DateInputField;