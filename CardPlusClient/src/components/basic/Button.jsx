import React from 'react';

export default class CommandLink extends React.Component{
    render(){
      return (
          <input className="button" type="submit" value={this.props.value} onClick={this.props.onClick}/>
      );
    }
};
