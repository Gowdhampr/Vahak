// Home
import VehicleDetailsPage from "./views/VehicleDetailsPage";

// List of routes
const routes = [
  {
    path: "/bid/:id",
    exact: true,
    name: "Vehicle Details Page",
    component: VehicleDetailsPage
  }
];

export default routes;
