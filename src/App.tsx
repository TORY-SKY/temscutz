import Waitlist from "./Waitlist";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OurTeam from "./components/OurTeam";
import MySwiperComponent from "./components/MySwiperComponent";
import AboutUs from "./components/AboutUs";

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
      errorElement: <ErrorPage />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/team",
      element: <OurTeam />,
      errorElement: <ErrorPage />,
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
