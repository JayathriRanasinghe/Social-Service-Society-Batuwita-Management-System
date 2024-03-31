import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Dashboard } from "../layout";

const Member = React.lazy(() => import("../containers/Member"));


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <Dashboard>
            <Member />  
          </Dashboard>
        }
      />,
      <Route
        path="/member"
        element={
          <Dashboard>
            <Member />  
          </Dashboard>
        }
      />,
      <Route
        path="/members"
        element={
            <Member />
        }
      />,

    </Route>
  )
);
