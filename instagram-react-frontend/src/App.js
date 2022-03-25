import React, { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from "react"
import Dashboard from './pages/dashboard';

// setting up Lazy loading to avoid massive hit on the network
const Login = lazy(() => import("./pages/login"))
const Signup = lazy(() => import("./pages/signup"))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading your page...</p>}>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/login" component={Login} ></Route>
          <Route path="/signup" component={Signup} ></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
