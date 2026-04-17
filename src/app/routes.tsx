import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Booking } from "./pages/Booking";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { EVHybrid } from "./pages/EVHybrid";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "booking", Component: Booking },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "gallery", Component: Gallery },
      { path: "ev-hybrid", Component: EVHybrid },
    ],
  },
]);