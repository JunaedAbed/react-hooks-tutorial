//useContext hook is used to store user and share it.

import React, { useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Index } from "./pages/index";
import { About } from "./pages/about";
import { UserContext } from "./userContext";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider value={value}>
          <Route path="/" exact component={Index}></Route>
          <Route path="/about/" component={About}></Route>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
