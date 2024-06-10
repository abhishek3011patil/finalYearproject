
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Videos from './components/Videos/Videos';
import Tracker from './components/Tracker/Tracker';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'




function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
<Route path="/" exact component={Home}/>
<Route path="/Tracker" component={Tracker}/>
<Route path="/News" component={News}/>
<Route path="/Videos" component={Contact}/>
<Route path="/Contact" component={Contact}/>

</Switch>
    
    </div>
    </Router>
  );
}

export default App;
