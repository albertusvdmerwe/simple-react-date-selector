import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pickers from "./subcomponents/pickers";
import DateInputField from "./subcomponents/input-field";
import GeneralModal from "./general-modal/general-modal";
import {stylesObjects} from "./styles/styles-objects";
import {defaultState} from "./state";
const {headerStyles,bodyStyles,containerStyles,footerStyles}=stylesObjects;
class Datepicker extends Component {

    constructor(props)
    {
        super(props);
        this.state=defaultState;
        this.closeModal=this.closeModal.bind(this);
        this.handleItemSelected=this.handleItemSelected.bind(this);
    }

    getSetFullDate(){
        var fullDate="";
        const {year,month,day}=this.state;
        const {onChange}=this.props;
        
        if(year&&month&&day)
        {
            fullDate=`${year}-${month}-${day}`;
        }

        if(fullDate!=="")
        {
            this.setState(defaultState,()=>onChange(fullDate));
        }
    }

    closeModal()
    {
        this.setState(defaultState);
    }

    handleItemSelected(value,type){
        
        if(type==='year')
        {
            this.setState({year:value},this.getSetFullDate);
        }

        if(type==="month")
        {
            this.setState({month:value},this.getSetFullDate);
        }

        if(type==='day')
        {
            this.setState({day:value},this.getSetFullDate);
        }
    }
    
    render() {

        const {placeholder,value}=this.props;
        const {modalVisible}=this.state;
        const {handleItemSelected,closeModal,state,props}=this;

        return(
            <React.Fragment>
                <GeneralModal visible={modalVisible} onClick={closeModal}> 
                    <Pickers {...state} {...props} onChange={handleItemSelected}/>
                </GeneralModal>
                <DateInputField 
                    placeholder={placeholder} 
                    onClick={()=>this.setState({modalVisible:true})}
                    value={value}
                />
            </React.Fragment>
        );

    }
}

Datepicker.propTypes = {
    onChange:PropTypes.func.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    headerStyles:PropTypes.object,
    bodyStyles:PropTypes.object,
    containerStyles:PropTypes.object,
    footerStyles:PropTypes.object
};


Datepicker.defaultProps = {headerStyles,bodyStyles,containerStyles,footerStyles};


export default Datepicker;