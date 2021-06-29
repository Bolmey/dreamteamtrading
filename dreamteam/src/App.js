import './App.css';
import { Route, Switch } from 'react-router-dom'
import home from './components/home/home.js'

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={home}></Route>
      </Switch>
    </div>
  );
}

export default App;
