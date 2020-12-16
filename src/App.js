import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import classes from './App.module.scss';
import Layout from './hoc/Layout/Layout'

const LandingScreen = React.lazy(() => {
  return import("./containers/LandingScreen/LandingScreen");
});

const InstructionScreen = React.lazy(() => {
  return import("./containers/Instructions/Instructions");
});


const QuizScreen = React.lazy(() => {
  return import("./containers/QuizBuilder/QuizBuilder");
});


const ResultScreen = React.lazy(() => {
  return import("./containers/ResultScreen/ResultScreen");
});

const GCardScreen = React.lazy(() => {
  return import("./components/GCards/GCards");
});


const App = (props) => {
  
  let routes = (
      <Switch>
            <Route path="/cards" exact render={(props) => <GCardScreen {...props} /> } />
            <Route path="/cards/:id" exact render={(props) => <GCardScreen {...props} /> } />
            <Route path="/result" exact render={(props) => <ResultScreen {...props} /> } />
            <Route path="/quiz" exact render={(props) => <QuizScreen {...props} /> } />
            <Route path="/instructions" exact render={(props) => <InstructionScreen {...props} /> } />
            <Route path="/" exact render={(props) => <LandingScreen {...props} /> } />
            <Redirect to="/" />
      </Switch>
  );

  return (
      <div>
        <Layout>
          <Suspense fallback={<div className={classes.Loading}><span></span></div>}>{routes}</Suspense>
        </Layout>
      </div>
  );
}

export default App;
