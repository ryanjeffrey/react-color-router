import RGB from './components/RGB/RGB';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';

import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/rgb/10/22/42" />
        </Route>
        <Route exact path="/rgb/:r/:g/:b">
          <NavBar />
          <RGB />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
