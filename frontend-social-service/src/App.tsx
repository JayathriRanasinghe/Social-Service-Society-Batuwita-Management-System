import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/asyncRoutes";

const App: React.FC = () => {
  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
    </>
  );
};

export default App;