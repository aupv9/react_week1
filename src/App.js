import React,{Component} from 'react';

import Home from './pages/home';
import Profile from './pages/profile';

class App extends Component{


  render(){
    return (
      <div>
        {/* <Home></Home> */}
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
