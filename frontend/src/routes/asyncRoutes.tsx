import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Dashboard } from "../layout";

const Member = React.lazy(() => import("../containers/Member"));


export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Member />}>
        <Route path="/member" element={<Member />} />
      </Route>
    )
);
