import Waitlist from "./Waitlist";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./components/Test";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Waitlist />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <h1>LOG IN</h1>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/test",
      element: <Test />,
      errorElement: <Test />,
    },
  ]);
  return (
    <>
      <div className="container-div">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
