import React from 'react'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/context/AuthContext';
import Signup from './components/Signup';
import Home from './pages/Home';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Container 
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh"}}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
              </Router>
            </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
