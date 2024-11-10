import Waitlist from "./Waitlist";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./components/Test";
import OurTeam from "./components/OurTeam";
import MySwiperComponent from "./components/MySwiperComponent";

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
      element: <MySwiperComponent />,
      errorElement: <h1>Error</h1>,
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
