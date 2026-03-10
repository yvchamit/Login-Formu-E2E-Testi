import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Success from "./components/Success";
import { useState } from "react";

function App() {

  const [username, setUsername] = useState("");

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login setUsername={setUsername}/>
          </Route>
          <Route path="/Success">
            <Success username={username}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
