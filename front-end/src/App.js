import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserDashboard from "./components/User/UserDashboard";
import Header from "./components/Header/Header";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./components/Login/Login";
import { useAuth } from "./storage/loginContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { login } = useAuth();
  const isAuthenticated = login;
  console.log("Login :: ", login);
  return (
    <>
      <Router>
        <React.StrictMode>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={withRouter(UserDashboard)} />
              {!isAuthenticated && (
                <Route exact path="/login" component={Login} />
              )}
              <ProtectedRoute
                path="/admin"
                component={AdminDashboard}
                isAuthenticated={isAuthenticated}
              />
              <Route component={UserDashboard} />
              {/* <Route exact path="/">
              <UserDashboard />
            </Route>
            // <Route path="/admin">
            //   <AdminDashboard />
            // </Route> */}
            </Switch>
            <Footer />
          </div>
        </React.StrictMode>
      </Router>
    </>
  );
};

export default App;
