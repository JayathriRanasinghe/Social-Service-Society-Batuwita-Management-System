import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Dashboard } from "../layout";
import { LoginPage } from "../layout";

const Member = React.lazy(() => import("../containers/Member"));
const AddMember = React.lazy(() =>import("../containers/AddMember"));
const AddPayment = React.lazy(()=>import("../containers/Payments"))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginPage />} />,
      <Route
        path="/member"
        element={
          <Dashboard>
            <Member />
          </Dashboard>
        }
      />
      ,
      <Route path="/members" element={<Member />} />,
      <Route
        path="/member/add-member"
        element={
          <Dashboard>
            <AddMember />
          </Dashboard>
        }
      />
      ,
      <Route
        path="/payments/all-payments"
        element={
          <Dashboard>
            <AddPayment />
          </Dashboard>
        }
      />
      ,
    </Route>
  )
);
