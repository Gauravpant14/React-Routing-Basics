import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Dashboard2 from "./components/Dashboard2";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />        
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard2" component={Dashboard2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
