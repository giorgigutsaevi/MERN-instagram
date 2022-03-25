import React, { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from "react"
import Dashboard from './pages/dashboard';
import UserContext from './context/userContext';
import useAuthListener from './hooks/useAuthentication';

// setting up Lazy loading to avoid massive hit on the network
const Login = lazy(() => import("./pages/login"))
const Signup = lazy(() => import("./pages/signup"))

function App() {
  const { user } = useAuthListener();
  return (

    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading your page...</p>}>
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/login" component={Login} ></Route>
            <Route path="/signup" component={Signup} ></Route>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
