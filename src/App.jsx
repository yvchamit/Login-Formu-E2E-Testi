import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Success from "./components/Success";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
