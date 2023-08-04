// ** React Imports
import { Fragment, useState } from 'react';

// ** thirdParty Plugin
import clsx from 'clsx';
import PropType from 'prop-types';

// ** Reactstrap Imports
import { Col, Modal, ModalBody, Row } from 'reactstrap';

//** Logo
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

// ** Common Component
import CommonSelect from '../CommonSelect';
import CommonButton from '../Button/CommonButton';
import DatePicker from '../Flatpicker';

const options = [
  { value: 'option1', label: 'option1' },
  { value: 'option2', label: 'option2' },
  { value: 'option3', label: 'option3' },
  { value: 'option4', label: 'option4' }
];

const BookModal = ({ bookModal, setBookModal }) => {
  // ** States
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedAdults, setSelectedAdults] = useState(null);
  const [selectedChildren, setSelectedChildren] = useState(null);

  return (
    <Fragment>
      <Modal isOpen={bookModal} toggle={() => setBookModal(!bookModal)} className="modal-dialog-centered modal-fullscreen book-modal">
        {/* modal header */}
        <div className="modal-header">
          <div className="d-flex justify-content-center w-100">
            <Logo />
          </div>
          <button type="button" className="btn-close" onClick={() => setBookModal(!bookModal)} />
        </div>
        {/* modal header end */}

        <ModalBody className="px-sm-5 container">
          <div className="text-center">
            <h1 className="section-title">Book your stay</h1>
          </div>

          <Row className="modal-info">
            <Col xs="12" md="10" lg="8" className="m-auto">
              <Row className="g-1 g-md-4">
                <Col xs="12" md="6">
                  <CommonSelect options={options} placeholder="Select room type" selectedOption={selectedRoom} setSelectedOption={setSelectedRoom} />
                </Col>
                <Col xs="12" md="6" className="d-none d-md-block"></Col>

                <Col xs="12" md="6">
                  <div className={clsx('input-block form-group date-picker')}>
                    <DatePicker
                      options={{
                        dateFormat: 'd-M-Y',
                        defaultDate: '',
                        disableMobile: 'true',
                        minDate: 'today',
                        showMonths: 1
                      }}
                      fromDateID="DashboardEndDatePickera"
                      selectValue={[]}
                      placeholder="Arrival date"
                    />
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <div className={clsx('input-block form-group date-picker')}>
                    <input id="DashboardEndDatePickera" placeholder="Departure date" />
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <CommonSelect options={options} placeholder="Adults" selectedOption={selectedAdults} setSelectedOption={setSelectedAdults} />
                </Col>
                <Col xs="12" md="5">
                  <CommonSelect options={options} placeholder="Children (0-12 yrs)" selectedOption={selectedChildren} setSelectedOption={setSelectedChildren} />
                </Col>
                <Col xs="12" md="6">
                  <div className={clsx('input-block form-group')}>
                    <input type="text" name="name" id="name" spellCheck="false" />
                    <span className="placeholder">Promo code</span>
                  </div>
                </Col>
                <Col xs="12" md="5">
                  <CommonButton className="book-btn w-100">Check availability</CommonButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

BookModal.propTypes = {
  bookModal: PropType.bool,
  setBookModal: PropType.func
};

export default BookModal;
