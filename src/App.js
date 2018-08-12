import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import { firebaseInit } from './utils/firebasePush';

import Loader from "./components/common/Loader";
// Beta route not being used currently
// const BetaIndex = Loadable({
//   loader: () => import('./components/beta/Index'),
//   loading: () => <div>Loading BetaIndex</div>,
// });
// const ZonalsRegister = Loadable({
//   loader: () => import('./components/zonal/common/zonalsregistration'),
//   loading: () => <Loader />,
// });

const CAIndex = Loadable({
  loader: () => import('./components/ca/Index'),
  loading: () => <Loader />,
});

const FAQIndex = Loadable({
  loader: () => import("./components/beta/faq/Index"),
  loading: () => <Loader />
});

const SponsorsIndex = Loadable({
  loader: () => import("./components/beta/sponsors/Index"),
  loading: () => <Loader />
});
const QuizardryIndex = Loadable({
  loader: () => import("./components/beta/quizardry/index"),
  loading: () => <Loader />
});

const TeamIndex = Loadable({
  loader: () => import("./components/beta/team/Index"),
  loading: () => <Loader />
});

const HomeIndex = Loadable({
  loader: () => import("./components/beta/home/Index"),
  loading: () => <Loader />
});

const VerifyCerti = Loadable({
  loader: () => import("./components/verifyCerti/Index"),
  loading: () => <Loader />
});

const Policy = Loadable({
  loader: () => import("./components/common/Policy"),
  loading: () => <Loader />
})

const Terms = Loadable({
  loader: () => import("./components/common/Terms"),
  loading: () => <Loader />
})
const CampusIndex = Loadable({
  loader: () => import('./components/campusAmbassador/Index'),
  loading: () => <Loader />,
});
// const ZonalsIndex = Loadable({
//     loader:() =>import("./components/zonal/Index"),
//   loading:() => <Loader />
// })
class App extends Component {
  componentDidMount() {
    firebaseInit()
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/beta" component={BetaIndex} /> */}
          <Route exact path="/" component={HomeIndex} />
          <Route exact path="/sponsors" component={SponsorsIndex} />
          <Route exact path="/quizardry" component={QuizardryIndex} />
          <Route exact path="/team" component={TeamIndex} />
          <Route exact path="/faq" component={FAQIndex} />

          <Route path="/ca/" component={CAIndex} />
          <Route path="/campusAmbassador/" component={CampusIndex} />

          {/* <Route path="/zonals" component={ZonalsIndex} />  */}
          {/* <Route path="/zonals" component={ZonalsRegister} /> */}

          < Route path="/verifyCerti/" component={VerifyCerti} />
          <Route path="/policy" component={Policy} />
          <Route path="/terms" component={Terms} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;