import React from 'react';
import ReactDOM from 'react-dom';
import linkState from 'react-link-state';

//Define Calculator Component here
//BEGIN_CHALLENGE
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }
  _handleAdd(){
    var resultData = parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10);
    this.setState({
      result: resultData
    });
  }
  _handleSub(){
    var resultData = parseInt(this.state.num1, 10) - parseInt(this.state.num2, 10);
    this.setState({
      result: resultData
    });
  }
  _handleMul(){
    var resultData = parseInt(this.state.num1, 10) * parseInt(this.state.num2, 10);
    this.setState({
      result: resultData
    });
  }
  _handleDiv(){
    var resultData = parseInt(this.state.num1, 10) / parseInt(this.state.num2, 10);
    this.setState({
      result: resultData
    });
  }
  render(){
    return (
      <div className="container text-center" style={{marginTop:16 + 'em'}}>
        <InputNumber valueLink={linkState(this, 'num1')} />
        <InputNumber valueLink={linkState(this, 'num2')} />
        <div className="row" style={{marginTop:2 + 'em'}}>
          <div className="col-md-offset-4 col-md-1">
            <button className="btn btn-primary" onClick={this._handleAdd.bind(this)} >Add</button>
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary" onClick={this._handleSub.bind(this)} >Subtract</button>
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary" onClick={this._handleMul.bind(this)} >Multiply</button>
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary" onClick={this._handleDiv.bind(this)} >Divide</button>
          </div>
        </div>
        <div className="alert">
          <strong>Result {this.state.result}</strong>
        </div>
      </div>
    );
  }
}
//END_CHALLENGE

//InputNumber Component is used to take number input from user
class InputNumber extends React.Component {
  constructor() {
    super();
  }
  render() {
    var props = this.props;
    return <input type="number" {...props} />
  }
}

module.exports = Calculator;
