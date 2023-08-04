// ** React Imports
import { Fragment } from 'react';

import PropType from 'prop-types';

// ** Reactstrap Imports
import { Modal, ModalBody, ModalHeader, Table } from 'reactstrap';
import { Dinner, Theater, Boardroom, Ushape, Cabaret, Hollow, Reaception } from '../../assets/svg/capicityaTable/index';

const CapacityChart = ({ capacity, setCapacity }) => {
  return (
    <Fragment>
      <Modal isOpen={capacity} toggle={() => setCapacity(!capacity)} className="modal-dialog-centered capacity-modal  modal-fullscreen">
        {/* modal header */}
        <ModalHeader className="" toggle={() => setCapacity(!capacity)}></ModalHeader>
        {/* modal header end */}

        <ModalBody className="">
          <div className="text-center">
            <h1 className="section-title">Capacity chart</h1>
          </div>
          <Table responsive className="">
            <thead>
              <tr>
                <th scope="col" className="text-nowrap"></th>
                <th scope="col" className="text-nowrap">
                  L x W x H
                </th>
                <th scope="col" className="text-nowrap">
                  Room surface
                </th>
                <th scope="col" className="text-nowrap">
                  <div className="thwithicon">
                    Dinner
                    <Dinner />
                  </div>
                </th>
                <th scope="col" className="text-nowrap">
                  <div className="thwithicon">
                    Reception
                    <Reaception />
                  </div>
                </th>
                <th scope="col" className="text-nowrap">
                  <div className="thwithicon">
                    Boardroom
                    <Boardroom />
                  </div>
                </th>
                <th scope="col" className="text-nowrap">
                  <div className="thwithicon">
                    Theatre
                    <Theater />
                  </div>
                </th>
                <th scope="col" className="text-nowrap">
                  <div className="thwithicon">
                    U shape
                    <Ushape />
                  </div>
                </th>
                <th scope="col" className="text-nowrap">
                  <div className="thwithicon">
                    Cabaret
                    <Cabaret />
                  </div>
                </th>
                <th scope="col" className="text-nowrap">
                  <div className="thwithicon">
                    Hollow
                    <Hollow />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-nowrap fw-bold">Banquet Hall</td>
                <td className="text-nowrap">6.7 x 4.6 x 3.8</td>
                <td className="text-nowrap d-flex flex-column">
                  <span>104 m²</span>
                  <span>1119 sqf</span>
                </td>
                <td className="text-nowrap">80</td>
                <td className="text-nowrap">160</td>
                <td className="text-nowrap">30</td>
                <td className="text-nowrap">80</td>
                <td className="text-nowrap">30</td>
                <td className="text-nowrap">30</td>
                <td className="text-nowrap">30</td>
              </tr>
              <tr>
                <td className="text-nowrap fw-bold">Nilaya Party Lawn</td>
                <td className="text-nowrap">6.7 x 4.6 x 3.8</td>
                <td className="text-nowrap d-flex flex-column">
                  <span>104 m²</span>
                  <span>1119 sqf</span>
                </td>
                <td className="text-nowrap">80</td>
                <td className="text-nowrap">160</td>
                <td className="text-nowrap">30</td>
                <td className="text-nowrap">80</td>
                <td className="text-nowrap">30</td>
                <td className="text-nowrap">30</td>
                <td className="text-nowrap">30</td>
              </tr>
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

CapacityChart.propTypes = {
  capacity: PropType.bool,
  setCapacity: PropType.func
};

export default CapacityChart;
