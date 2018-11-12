import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GeneralModal extends Component {

  render() {

        const {visible,children,onClick}=this.props;
        const additionalClass=visible?"modal-visible":"";

        return (
            <div className={`general-modal ${additionalClass}`} onClick={()=>{
                if(typeof onClick==="function")
                {
                    onClick();
                }
            }}>
                {children}
            </div>
        );
    }
}

GeneralModal.propTypes = {
    visible:PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired,
    onClick:PropTypes.func,
};

GeneralModal.defaultProps = {
    onClick:null
};
