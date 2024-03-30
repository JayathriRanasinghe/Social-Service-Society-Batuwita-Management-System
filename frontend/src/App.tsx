import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { History } from "history";
import { router } from "./routes/asyncRoutes";

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
