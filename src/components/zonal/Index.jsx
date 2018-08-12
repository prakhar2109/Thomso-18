import React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loader from "../common/Loader";
const loading = ({ error }) => {
  if (error) {
    return <div>Error loading component</div>;
  } else {
    return <Loader />;
  }
};

const AdminIndex = Loadable({
  loader: () => import("./admin/Index"),
  loading: loading
});

const DelhiIndex= Loadable({
  loader: () => import("./delhi/Index"),
  loading: loading
});
export default class ZonalsIndex extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/zonals/admin" component={AdminIndex} />
        <Route path="/zonals/delhi" component={DelhiIndex} />
      </React.Fragment>
    );
  }
}
