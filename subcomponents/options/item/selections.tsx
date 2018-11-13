import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Selections extends Component {
    
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
 
    handleClick(event){
        event.stopPropagation();
        const {value,onClick}=this.props;
        onClick(value);
    }
    
    render() {
        const {value}=this.props; 

        return (
            <div className="simple-react-date-selector-selections" onClick={this.handleClick}>
                {value}
            </div>
        );
    }
}

Selections.propTypes = {
    value:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
};

export default Selections;