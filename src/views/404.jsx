import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';

import NotFoundImg from '../assets/img/404img.jpg';
import CommonButton from '../components/Button/CommonButton';

const NotFound = ({ setNotFound }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setNotFound(true);
    return () => {
      setNotFound(false);
    };
  }, []);

  return (
    <section className="not-found-section">
      <div className="container">
        <div className="row not-found-row">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <img src={NotFoundImg} alt="img" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-4 offset-0 offset-lg-1 pb-4 pb-lg-0">
            <p>404 error</p>
            <h2>Oops! The page you were looking for couldn&apos;t be found.</h2>
            <CommonButton className="primary-btn book-btn " onClick={() => navigate('/')}>
              Go to homepage
            </CommonButton>
          </div>
        </div>
      </div>
    </section>
  );
};

NotFound.propTypes = {
  setNotFound: PropType.func
};

export default NotFound;
