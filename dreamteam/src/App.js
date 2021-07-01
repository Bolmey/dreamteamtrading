import './App.css';
import { Route, Switch } from 'react-router-dom'
import home from './components/home/home.js'
import signup from './components/signup/signup'

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={home}></Route>
        <Route exact path="/signup" component={signup}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
