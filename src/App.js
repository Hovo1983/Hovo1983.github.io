import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Logo from './Components/Logo.jpg';
import Main from './Components/Main';
import Pic1 from './Images/OIP.jpg';
import Pic2 from './Images/OIP1.jpg';
import Pic3 from './Images/OIP2.jpg'


class App extends React.Component{
  state = {
    product : [
      {name:"Prod-1",img:Pic1,price:50},
      {name:"Prod-2",img:Pic2,price:70},
      {name:"prod-3",img:Pic3,price:90}
    ],
  };
  render(){
   return <div>
     <Header icon={Logo}/>
     <Main products={this.state.product}/>
   </div>
  }
}

export default App;
