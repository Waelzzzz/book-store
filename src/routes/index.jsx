import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Store from '../pages/Store';
import Contact from '../pages/Contact';

/**
 * Centralised route configuration.
 * App acts as the root layout (Navbar + Footer wrapper);
 * each page renders inside the <Outlet /> in App.jsx.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,      element: <Home />    },
      { path: 'books',    element: <Store />   },
      { path: 'about',    element: <About />   },
      { path: 'contact',  element: <Contact /> },
    ],
  },
]);

export default router;
