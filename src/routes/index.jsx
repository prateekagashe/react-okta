import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import HomePage from '../components/homePage'

import { RequiredAuth } from "./securedRoutes";
import { LoginCallback } from "@okta/okta-react";

function RouterComponent(props) {
  return (
    <React.Fragment>
      <Routes >
        <Route path='/' element={<RequiredAuth />}  >
          <Route index element={<HomePage />} />
        </Route>
        
        <Route path="callback" element={<LoginCallback loadingElement={<h1>Loading.. </h1>} />} />
      </Routes>
    </React.Fragment>
        
    
  );
}

export default RouterComponent;