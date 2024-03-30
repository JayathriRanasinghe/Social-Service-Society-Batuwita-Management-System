import React, { Suspense } from "react";
import { ConnectedRouter } from "connected-react-router";
import { RouterProvider } from "react-router-dom";
import { History } from "history";
import { router } from "./routes/asyncRoutes";
import { history } from "./store"; // Import the history object

interface IAppProps {
  history: History;
}

const App: React.FC<IAppProps> = ({ history }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
