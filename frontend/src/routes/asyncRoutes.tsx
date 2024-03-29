import React from "react";
import { Route } from "react-router-dom";
import { Dashboard, DataPage } from "../layout";

const Member = React.lazy(() => import("../containers/Member"));

export default [
    <Route 
        exact
        key= "Member"
        path={"/"}
        render={ ()=> (
            <Dashboard.layout>
                <Member />
            </Dashboard.layout>
        ) }
    />
];