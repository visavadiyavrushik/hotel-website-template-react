import React, { useState } from 'react';
import clsx from 'clsx';
import PropType from 'prop-types';
import Select, { components } from 'react-select';
import CommonButton from '../Button/CommonButton';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow-down.svg';

const options = [
  { value: 'businessMeeting', label: 'Business meeting' },
  { value: 'Conference', label: 'Conference' },
  { value: 'CorporateEvents', label: 'Corporate events' },
  { value: 'Otherevents', label: 'Other events' }
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDown />
    </components.DropdownIndicator>
  );
};

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: 'transparent',
    borderBottom: '1px solid #E6DFD8',
    borderWidth: '0px',
    borderRadius: '0',
    // Overwrittes the different states of border
    borderColor: state.isFocused ? '#e6dfd8' : 'e6dfd8',
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? '#e6dfd8' : '#e6dfd8'
    }
  }),
  option: (base, state) => ({
    ...base,
    color: state.isSelected ? '#fff' : '#1d4567',
    background: state.isSelected ? '#1d4567' : '#fff',
    '&:hover': {
      // Overwrittes the different states of border
      background: '#1d4567',
      color: '#fff'
    }
  }),
  menu: (base, state) => ({
    ...base,
    background: '#fff',
    borderRadius: '0',
    borderColor: state.isFocused ? 'yellow' : 'green'
  }),
  placeholder: (base) => ({
    ...base,
    color: '#060606'
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none'
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '2px 8px 0 0'
  })
};

const ContactUs = ({ Events }) => {
  const [ContactUsInfo, setContactUsInfo] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactUsInfo({ ...ContactUsInfo, [name]: value });
  };
  return (
    <>
      <section className="ContactUs">
        <div className="container">
          <div className="row">
            <div className="offset-0 offset-lg-1 col-12 col-md-11 ">
              <h2 className="section-title">Contact us</h2>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                  <p className="welcome-note">We are at your disposal for any questions. Please complete the form and we will reply to you as soon as possible.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-7 m-auto Contact-wrapper">
              <form spellCheck="false">
                {Events && (
                  <div className={clsx('input-block form-group')}>
                    <Select
                      // defaultMenuIsOpen
                      styles={customStyles}
                      components={{ DropdownIndicator }}
                      className="Select"
                      placeholder="Select type of event"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                )}

                <div className={clsx('input-block form-group', ContactUsInfo?.name && 'hasValue')}>
                  <input type="text" name="name" id="name" spellCheck="false" onChange={handleChange} />
                  <span className="placeholder">Your name</span>
                </div>
                <div className={clsx('input-block form-group', ContactUsInfo?.email && 'hasValue')}>
                  <input type="text" name="email" id="email" onChange={handleChange} spellCheck="false" />
                  <span className="placeholder">Your email</span>
                </div>
                <div className={clsx('input-block form-group', ContactUsInfo?.message && 'hasValue')}>
                  <textarea type="text" name="message" id="message" rows="4" onChange={handleChange} spellCheck="false" />
                  <span className="placeholder">Your message</span>
                </div>
                <p className="formText">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms and Conditions apply.</p>
                <CommonButton className="book-btn header-btn contactBtn">Send</CommonButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ContactUs.propTypes = {
  Events: PropType.bool
};
export default ContactUs;
