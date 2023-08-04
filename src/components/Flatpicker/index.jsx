/* eslint-disable react/no-string-refs */
import React, { useEffect, useRef, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import 'flatpickr/dist/flatpickr.min.css';
// import 'flatpickr/dist/themes/light.css';
import PropType from 'prop-types';

const DatePicker = (props) => {
  const refDatePicker = useRef();

  const [state, setState] = useState({
    selectValue: props.selectValue ? props.selectValue : '',
    options: props.options
      ? Object.assign({}, props.options, {
          plugins: [new rangePlugin({ input: `#${props.fromDateID}` })]
        })
      : { plugins: [new rangePlugin({ input: `#${props.fromDateID}` })] },
    disabled: props.disabled ? props.disabled : false,
    placeholder: props.placeholder ? props.placeholder : ''
  });

  useEffect(() => {
    setState({
      selectValue: state.selectValue ? state.selectValue : '',
      placeholder: state.placeholder ? state.placeholder : '',
      options: state.options
        ? Object.assign({}, state.options, {
            plugins: [new rangePlugin({ input: `#${state.fromDateID}` })]
          })
        : { plugins: [new rangePlugin({ input: `#${state.fromDateID}` })] },
      disabled: state.disabled ? state.disabled : false
    });
  }, [state.selectValue]);

  return (
    <Flatpickr
      disabled={state.disabled}
      ref={refDatePicker}
      placeholder={state.placeholder}
      options={state.options}
      value={state.selectValue}
      onChange={(e) => setState({ selectValue: e })}
    />
  );
};

DatePicker.propTypes = {
  selectValue: PropType.array,
  options: PropType.array,
  fromDateID: PropType.any,
  disabled: PropType.any,
  placeholder: PropType.any
};

export default DatePicker;
