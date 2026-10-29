import { createBrowserRouter } from 'react-router';
import { HomePage } from '../pages/HomePage';
import Fleet from '../pages/Fleet.tsx';
import Destinations from '../pages/Destinations.tsx';
import Hotels from '../pages/Hotels.tsx';
import Booking from '../pages/Booking.tsx';

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
  {
    path: '/hotels',
    element: <Hotels/>
  },
  {
    path: '/booking',
    element: <Booking/>
  }
]);
