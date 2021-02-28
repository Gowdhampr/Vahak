import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Style
import "./App.scss";

/** Layouts **/
import DefaultLayout from "./containers/DefaultLayout";

// Views
import Home from "./views/home";

/*
   App Content
*/
function App() {
  return (
    <div>
      <div className="routeSection">
        <Router>
          <Switch>
            <DefaultLayout
              exact
              name="Home"
              path="/bid/:id"
              component={Home}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
