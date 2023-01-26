import './index.css';
import { Home, Details } from './pages';
import reportWebVitals from './reportWebVitals';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "details",
    element: <Details />,
  },
]);

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);

reportWebVitals();
