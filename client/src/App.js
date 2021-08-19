import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={SignUp} />
          <Route path='/login' exact component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
