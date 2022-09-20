import './styles/global.scss';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='App'>   
        <Header />          
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/checkout' exact component={Checkout} />
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
