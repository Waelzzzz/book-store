import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/**
 * Root layout component.
 * Navbar and Footer wrap every page via React Router's <Outlet />.
 * <ScrollRestoration /> resets scroll position on route changes.
 */
export default function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
