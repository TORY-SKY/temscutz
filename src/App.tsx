import Waitlist from "./Waitlist";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./components/Test";
import OurTeam from "./components/OurTeam";

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
    {
      path: "/team",
      element: <OurTeam />,
      errorElement: <h1>Error Accessing this page</h1>,
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
