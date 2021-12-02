import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ImamPage from "./components/ImamPage";
import UserPage from "./components/UserPage";
import MosquePage from "./components/MosquePage";
import ImamTable from "./components/ImamTable";
import UserTable from "./components/UserTable";
import MosqueTable from "./components/MosqueTable";
import ImamGraph from "./components/ImamGraph";
import UserGraph from "./components/UserGraph";
import ImamManageAcc from "./components/ImamManageAcc";
import UserManageAcc from "./components/UserManageAcc";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/auth";

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <ProtectedRoute exact path="/home" component={HomePage} />
            <ProtectedRoute exact path="/home/imam" component={ImamPage} />
            <ProtectedRoute exact path="/home/user" component={UserPage} />
            <ProtectedRoute exact path="/home/mosque" component={MosquePage} />
            <ProtectedRoute
              exact
              path="/home/imam/table"
              component={ImamTable}
            />
            <ProtectedRoute
              exact
              path="/home/imam/graph"
              component={ImamGraph}
            />
            <ProtectedRoute
              exact
              path="/home/imam/manage"
              component={ImamManageAcc}
            />
            <ProtectedRoute
              exact
              path="/home/user/table"
              component={UserTable}
            />
            <ProtectedRoute
              exact
              path="/home/user/graph"
              component={UserGraph}
            />
            <ProtectedRoute
              exact
              path="/home/user/manage"
              component={UserManageAcc}
            />
            <ProtectedRoute
              exact
              path="/home/mosque/table"
              component={MosqueTable}
            />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
