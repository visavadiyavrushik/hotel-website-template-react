import React from 'react';

const Info = () => {
  return (
    <div className="container">
      <div className="ew-tabs row contacts-detail">
        <div className="col-12 col-md-6  col-lg-3  Contact-info">
          <h5 className="">Hotel Address</h5>
          <p>501 Street name,Area Name,state , India</p>
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0 mt-lg-0 col-lg-3  offset-0 offset-lg-1">
          <h5 className="">Hotel Contact</h5>
          <p className="m-0">T: +1 88885 99995</p>
          <p>E: yourmail@gmail.com</p>
        </div>
        <div className="col-12 col-lg-4 col-md-12 mt-3 mt-lg-0 offset-0 offset-lg-1">
          <h5 className="">Reservations</h5>
          <p className="m-0">T: +1 88885 99995</p>
          <p>E: yourmail@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
