import React,{Component} from 'react';
import logo from './logo.svg';
import './style/sass/main.scss';
import Home from './pages/home'
class App extends Component{


  render(){
    return (
      <div>
        <Home></Home>
      </div>
    );
  }
}

export default App;
