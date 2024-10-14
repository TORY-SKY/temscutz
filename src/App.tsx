import Waitlist from "./Waitlist";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
