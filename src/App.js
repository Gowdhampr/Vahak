import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Style
import "./App.scss";

/** Layouts **/
import DefaultLayout from "./containers/DefaultLayout";

// Views
import VehicleDetailsPage from "./views/VehicleDetailsPage";

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
              name="Vehicle Details page"
              path="/bid/:id"
              component={VehicleDetailsPage}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
