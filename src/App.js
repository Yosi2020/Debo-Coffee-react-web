import './App.css';
import Headers from './Headers';
import Home from './Home';
import { FooterContainer } from './containers/footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Origin_from_data from './Origin_from_data';
import { useStateValue } from './StateProvider';
import Contact from './componets/Contact';

function App() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/contact">
         <Contact/>
        </Route>
        <Route path="/order">
          <Headers/>
          {basket.map(item =>(
            <Origin_from_data
              id = {item.id}
              body = {item.body}
              image = {item.image}
              eyu = {item.eyu}/>))}
          <FooterContainer/>
        </Route>
        <Route path="/">
          <Headers/>
          <Home/>
          <FooterContainer/>
        </Route>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
