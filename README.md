# challenge-react-tutorial
Build a simple calculator in React

### What is React ?
- React is just V in MVC.
- React is not a full framework instead it is just a View library.
- React does one thing, and one thing only: it renders your DOM.
- React contains a JavaScript implementation of the DOM called virtual DOM.
- Whenever state is changed, React creates a virtual DOM tree.
  - It diff's from the current one and re-renders only the differences from real DOM.
  - This enables React to make the minimum required modifications to the DOM.
  - Thus React is super fast in rendering UI when page is modified.  
- React Version used is `React 0.14.7`

### Step 1 - Components
- React builds UI using components - small, to-the-point blocks of UI with their own functionality totally encapsulated in themselves.
- Let's build our first Component

#### Run Test
Run command `codecheck` on terminal. Tests will fail with following message.
```
1) Calculator Component "before all" hook:
   ReferenceError: Calculator is not defined

2) First Component "before all" hook:
   ReferenceError: FirstComponent is not defined
```
Make First Component Test status passing by creating react Component as `FirstComponent` in [FirstComponent.jsx](/public/components/FirstComponent.jsx)
```javascript
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
```
 - Here we return the `h1` tag having `className` as `container` and `text-center`.
 - Note:
    - Since JSX is JavaScript, identifiers such as class and for are discouraged.
    - Instead, React DOM components expect DOM property names like className and htmlFor, respectively.
    - We are exporting the created components to be able to reuse them.
    - To render the components on your page, we import it into a `normal` javascript file, for example [main.js](public/main.js)
    - Components are imported and rendered in `main.js` which is used in [webpack-dev-server](webpack-config.js) used to serve react
    - If you run `webpack-dev-server` in terminal you can see the react output at `http://localhost:8080/webpack-dev-server/`

#### Run Test
Run command `codecheck` on terminal.
```
codecheck: Finish with code 1
codecheck: tests  : 2
codecheck: success: 1
codecheck: failure: 1
```

#### constructor
- Initial state is defined in the constructor of the component class.
- In ES6 classes, `this` cannot be used until `super()` is called.
- P.S: Try to remove `super()` from component, tests will fail.

#### props
- React components can be given data through a React feature called `props` i.e `properties`.

### Step 2 -
- By now you pretty much know about basic React Component. Let's go ahead.
- Now create Calculator Component in [CalculatorComponent](public/components/CalculatorComponent.jsx)

#### Specifications for Calculator
- Calculator has two numbers for input, let's call them `num1` and `num2` respectively and one result, let's call it `result`.
- Hence the constructor for Calculator component is as follows
```javascript
constructor() {
  super();
  this.state = {
    num1: 0,
    num2: 0,
    result: 0
  };
}
```
- Calculator will have 2 input fields and 4 buttons for Add, Subtract, Multiply and Divide respectively.
- Hence the render of Calculator Component will be as follows
```javascript
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
```
- Here we use [Bootstrap](http://getbootstrap.com/) classes
- For input field we created InputNumber Component which uses `linkState` for linking data with that particular instance of component.

#### setState
We can change the state using `this.setState`. When that is called, React will re-render your component to reflect the updated state.

#### Handling events
- The handlers are defined inline
- Be sure to 'bind' the context of the method to the class.
- Earlier versions of React did this automatically, but in ES6 you have to 'bind' events completely.
- Define functions _handleAdd(), _handleSub(), _handleMul(), _handleDiv() in Calculator Component.
- Now fix tests by writing functionality for addition, subtraction, multiplication and division in respective functions and set state of result variable.
  - You can write functionality for addition by writing following code in _handleAdd() function
  ```
  this.setState({
    result: parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10);
  });
  ```
  - Similarly write functionality for above defined functions.

**References:**
- [...props](https://gist.github.com/sebmarkbage/07bbe37bc42b6d4aef81) aka JSX Spread Attributes
- In next tutorial challenge we will cover Component LifeCycle (https://facebook.github.io/react/docs/component-specs.html)
  - data-binding
  - mounting
  - unmounting

### Test Results *before* solving the challenge  
```
codecheck: Finish with code 2
codecheck: tests  : 2
codecheck: success: 0
codecheck: failure: 2
```

### Test Results *after* solving the challenge
```
codecheck: Finish with code 0
codecheck: tests  : 6
codecheck: success: 6
codecheck: failure: 0
```
--- --- ---
## Run Tests
To run tests locally install `codecheck` by running the following command in terminal.
```
$ npm install codecheck -g
```
To run tests in web editor please click in `RUN` button on left side of web editor.

## Explain your code
In [answer.md](answer.md) write a brief explanation 
- About how your code works
- Problems faced while solving the challenge
- How you solved those problems
- Improvements/Feedbacks are also welcomed
