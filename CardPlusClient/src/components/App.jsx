import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import UserContainer from '../containers/UserContainer.js';

export default class App extends React.Component{
    render(){
      return (<UserContainer/>);
    }
};
