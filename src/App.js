import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来ass App extends Component
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <span>{ this.props.value }</span>
        <button onClick={ click }>Increase</button>
      </div>
    );
  }
}

const click = () =>{

}
const mapStateToprops = (state) =>{
    return {
        value: state.count
    }
};
const mapDispathToprops = (dispath) =>{
     return {
      click:() => { dispath({
         type:"ADD"
       })}
     }
};

App = connect(
   mapStateToprops,
   mapDispathToprops
)(App)


export default App;
