import { Suspense, useLayoutEffect } from 'react';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
// import Home from './views/home';
import Footer from './components/footer/footer';
// import About from './views/about';
import Router from './Router';
import { useLocation } from 'react-router-dom';
import ComponentSpinner from './components/loadar/Loading-spinner';

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Suspense fallback={<ComponentSpinner />}>
      <Wrapper>
        <div className="App">
          <Header />
          <Router />
          {/* <Home /> */}
          {/* <About /> */}
          <Footer />
        </div>
      </Wrapper>
    </Suspense>
  );
}

export default App;
