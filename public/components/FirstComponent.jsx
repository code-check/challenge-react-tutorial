import React from 'react';
import ReactDOM from 'react-dom';

//Define FirstComponent here
//BEGIN_CHALLENGE
class FirstComponent extends React.Component {
  constructor() {
    super();
  }
  render(){
    return (
      <h1 className="container text-center">Simple Calculator</h1>
    );
  }
}
//END_CHALLENGE

module.exports = FirstComponent;
