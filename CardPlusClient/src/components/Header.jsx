import React from 'react';

export default class Header extends React.Component{
    render(){
      return (
        <div>
          <link type="text/css" rel="stylesheet" href="./resources/css/stylesheet.css"/>
          <h1 className="header" style={this.props.style}>{this.props.pageTitle}</h1>
        </div>
      );
    }
};
