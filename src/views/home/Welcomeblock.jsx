import React from 'react';
import CommonButton from '../../components/Button/CommonButton';

export const Welcomeblock = () => {
  return (
    <section className="Welcome-block">
      <div className="container inner-wlk">
        <div className="row text-center">
          <h2 className="section-title">Welcome to Hotel </h2>
          <div className="col-12 col-md-9 m-auto">
            <p className="section-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti recusandae aliquid hic nemo aut autem, non deserunt consequuntur odit optio ipsam fugit architecto impedit praesentium
              expedita mollitia veniam tempore eligendi.
            </p>
          </div>
          <div className="col-12">
            <CommonButton className="m-auto read-btn">Read about us</CommonButton>
          </div>
        </div>
      </div>
    </section>
  );
};
