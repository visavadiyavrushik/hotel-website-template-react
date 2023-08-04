import React from 'react';
import PropType from 'prop-types';
import Select, { components } from 'react-select';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow-down.svg';
import clsx from 'clsx';

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

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDown />
    </components.DropdownIndicator>
  );
};

const CommonSelect = (props) => {
  const { options, placeholder, style, selectedOption, setSelectedOption } = props;

  return (
    <div className={clsx('input-block form-group', style ? style : '')}>
      <Select
        // defaultMenuIsOpen
        styles={customStyles}
        components={{ DropdownIndicator }}
        className="Select"
        placeholder={placeholder ? placeholder : 'Please Select Option'}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

CommonSelect.propTypes = {
  options: PropType.array,
  placeholder: PropType.string,
  style: PropType.string,
  selectedOption: PropType.object,
  setSelectedOption: PropType.func
};

export default CommonSelect;
