import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      inputText: '',
      checked: true,
      shouldRenderSpan: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.props, this.state, prevProps, prevState);
  }

  onClick(e){  
    console.log('clicked alert ' + e.target.innerHTML);
  }
  onChange(e){
    console.log(e.target.value);
    this.setState({
      inputText: e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();
    console.log(this.input.value + ' is submitted');//have to bind, because it access the `this` which refers to the class itself
  }
  updateCheck(){
    this.setState( (prevState) => ({
      checked: !prevState.checked
    }));
  }

  renderSpan(){
    if(!this.state.shouldRenderSpan){
      return null;
    }else{
      return <span>Span based on the shouldRender state</span>;
    }
  }

  onClickButton(){
    console.log('click');
    this.setState( (prevState) => ({
      shouldRenderSpan: !prevState.shouldRenderSpan
    }));
  }

  render() {
    const title = 'This is a simple React JS App';
    const list = [
      'item 1','item 2','item 3'
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro">
          {title}
          <p>Click the items:</p>
          {
            list.map((item, index)=>{
              return (
                <div key={index} onClick={this.onClick}>{item}</div>
              );
            })
          }
        </h1>
        
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} ref={input => this.input = input}/>           
        </form>
        <div className="span">{this.state.inputText}</div>
              
        <Button text1={this.state.inputText} onClick={this.onClickButton}/>

        <input type="checkbox" name="check" checked={this.state.checked} onChange={this.updateCheck} />
          
        <div>
          {this.renderSpan()}
        </div>
      </div>
    );
  }
}

export default App;

