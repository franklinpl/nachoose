import './App.css';
import {Route, Switch} from 'react-router-dom';

//components
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import HomeScreen from './components/HomeScreen'
import Choose from './components/choose/Choose'
  import ChooseASize from './components/choose/ChooseASize'
  import ChooseATortilha from './components/choose/ChooseATortilha'
  import ChooseAProtein from './components/choose/ChooseAProtein';
  import ChooseACheese from './components/choose/ChooseACheese';
  import ChooseSomeVeggies from './components/choose/ChooseSomeVeggies';
  import ChooseASauce from './components/choose/ChooseASauce';
  import Review from './components/choose/Review';
import YourOrder from './components/YourOrder'
import About from './components/About'
import Payment from './components/Payment'
import OnTheWay from './components/OnTheWay'




function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Switch>
        <Route exact path='/' component={HomeScreen}/>
        <Route exact path='/choose' component={Choose}/>
        <Route exact path='/choose/choose-a-size' component={ChooseASize}/>
          <Route exact path='/choose/choose-a-tortilha' component={ChooseATortilha}/>
          <Route exact path='/choose/choose-a-protein' component={ChooseAProtein}/>
          <Route exact path='/choose/choose-a-cheese' component={ChooseACheese}/>
          <Route exact path='/choose/choose-some-veggies' component={ChooseSomeVeggies}/>
          <Route exact path='/choose/choose-a-sauce' component={ChooseASauce}/>
          <Route exact path='/choose/review' component={Review}/>
        <Route exact path='/your-order' component={YourOrder}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/payment' component={Payment}/>
        <Route exact path='/onTheWay' component={OnTheWay}/>
      </Switch>
    
    </div>
  );
}

export default App;
