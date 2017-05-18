import React from 'react';

export default class InputField extends React.Component{
    render(){
      return (
          <input type="text" className="inputField" name={this.props.name} id={this.props.id}/>
      );
    }
};
