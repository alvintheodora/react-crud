import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {    
    const {text1, text2, onClick} = this.props;
    console.log(this.props);
    return (
      <button type="button" onClick={onClick}>{text1 + ' ' + text2}</button>
    );
  }
}

Button.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string
};
Button.defaultProps = {
    text2: ' toggle span'
};

export default Button;

