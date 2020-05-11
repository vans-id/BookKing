import React, { useState } from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';
// import { screen } from '@testing-library/dom';
import InputDate from './InputDate';

const TestInput = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputDate
      max={30}
      onChange={handleChange}
      name='value'
      value={value}
    />
  );
};

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector(
    '.input-date'
  );
  const input = container.querySelector(
    'input.form-control'
  );

  return {
    container,
    wrapper,
    input,
  };
};

test('should have wrapper with className .input-date', () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

test('should have <input> tag with className .form-control', () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test('should show the datepicker when <input> clicked', () => {
  const { container, input } = setup();

  // screen.debug()
  fireEvent.click(input, { button: 1 });

  const datePickerWrapper = container.querySelector(
    '.date-range-wrapper'
  );
  //  screen.debug()
  expect(datePickerWrapper).toBeInTheDocument();
});
