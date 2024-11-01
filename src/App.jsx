import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import RootLayout from "./pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
