// ** Router imports
import { lazy, useState } from 'react';

// ** Router imports
import { useRoutes } from 'react-router-dom';

// ** Components
const Home = lazy(() => import('../src/views/home/index'));
const About = lazy(() => import('../src/views/about/index'));
const Cafe = lazy(() => import('../src/views/cafe/index'));
const Rooms = lazy(() => import('../src/views/roomssuites/index'));
const Facilities = lazy(() => import('../src/views/facilities/index'));
const EventsWeddings = lazy(() => import('../src/views/eventsWeddings/index'));
const Contacts = lazy(() => import('./views/contacts/index'));
const NotFound = lazy(() => import('./views/404'));
const CatalanStructurePage = lazy(() => import('../src/views/cafe/CatalanStructurePage'));

const Router = () => {
  // ** Hooks
  const [notFound, setNotFound] = useState(false);

  if (notFound) {
    window.document.body.classList.add('not-found-page');
  } else {
    window.document.body.classList.remove('not-found-page');
  }

  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/cafe',
      element: <Cafe />
    },
    {
      path: '/cafe-one',
      element: <CatalanStructurePage />
    },
    {
      path: '/facilities',
      element: <Facilities />
    },
    {
      path: '/rooms-suites',
      element: <Rooms />
    },
    {
      path: '/events-weddings',
      element: <EventsWeddings />
    },
    {
      path: '/contacts',
      element: <Contacts />
    },
    {
      path: '*',
      element: <NotFound setNotFound={setNotFound} />
    }
  ]);

  return routes;
};

export default Router;
