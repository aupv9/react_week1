import React,{Component} from 'react';

import Home from './pages/home';
import Profile from './pages/profile';
import RouterURL from './Router/Router';

class App extends Component{


  render(){
    return (
      <div>
        {/* <Home></Home> */}
        <RouterURL></RouterURL>
      </div>
    );
  }
}

export default App;
