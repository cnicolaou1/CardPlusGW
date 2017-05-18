import React from 'react';

export default class TextField extends React.Component{
    render(){
      return (
          <span className="textField">{this.props.value}</span>
      );
    }
};
