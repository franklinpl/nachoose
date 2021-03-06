import './App.css';
import {useState} from 'react'
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'

//components
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import HomeScreen from './components/HomeScreen'
import Choose from './components/Choose'
import YourOrder from './components/YourOrder'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Switch>
        <Route exact path='/' component={HomeScreen}/>
        <Route exact path='/choose' component={Choose}/>
        <Route exact path='your-order' component={YourOrder}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    
    </div>
  );
}

export default App;
