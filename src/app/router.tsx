import { createBrowserRouter } from 'react-router';
import { HomePage } from '../pages/HomePage';
import Booking from '../pages/Booking.tsx';
import Destinations from '../pages/Destinations.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/booking',
    element: <Booking />,
  },
  {
    path: '/destinations',
    element: <Destinations />,
  },
]);
