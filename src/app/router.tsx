import { createBrowserRouter } from 'react-router';
import { HomePage } from '../pages/HomePage';
import Fleet from '../pages/Fleet.tsx';
import Destinations from '../pages/Destinations.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/fleet',
    element: <Fleet />,
  },
  {
    path: '/destinations',
    element: <Destinations />,
  },
]);
