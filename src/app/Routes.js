import React, { Suspense, lazy } from "react"
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import ProtectedRoute from './ProtectedRoute'
import { AppContainer } from "../components/atoms"
import { Navbar } from '../containers'

const Landing = lazy(() => import('../containers/Landing'))
const Dashboard = lazy(() => import('../containers/Dashboard'))
const Login = lazy(() => import('../containers/Login'))


function Routes(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
      <Router>
          <Route
              render={({ location }) => {
                  return (
                      <AppContainer>
                          <Navbar />
                          <TransitionGroup component={null}>
                              <CSSTransition
                                  timeout={5000}
                                  classNames="page"
                                  key={location.key}
                              >
                                  <Suspense fallback={<div>loading...</div>}>
                                      <Switch location={location}>
                                          <Route exact path="/" component={Landing} />
                                          <Route path="/login" component={Login} />
                                          <ProtectedRoute
                                              exact
                                              path="/dashboard"
                                              component={Dashboard}
                                              isAuthenticated={!isAuthenticated}
                                              isVerifying={isVerifying}
                                          />

                                      </Switch>
                                  </Suspense>
                              </CSSTransition>
                          </TransitionGroup>
                      </AppContainer>
                  );
              }}
          />
      </Router>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(Routes);
