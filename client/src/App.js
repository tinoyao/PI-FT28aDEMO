import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail';
import ActivityCreate from './components/ActivityCreate';
import Error404 from './components/Error404';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home/:id' component={Detail} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/activities' component={ActivityCreate} />
          <Route path='*' component={Error404} />
        </Switch>
      </div>    
    </BrowserRouter>
  );
}

export default App;
