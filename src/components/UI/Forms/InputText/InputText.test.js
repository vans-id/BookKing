// import React, { useState } from 'react';
// import {
//   render,
//   fireEvent,
// } from '@testing-library/react';
// import InputText from './InputText';

// const TestInput = () => {
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <InputText
//       id='email'
//       name='email'
//       type='tel'
//       value={value}
//       changed={handleChange}
//     />
//   );
// };

// const setup = () => {
//   const { container } = render(<TestInput />);
//   const input = container.querySelector(
//     `input.form-control[name='email']`
//   );

//   return input;
// };

// test('Should be able to change value', () => {
//   const input = setup();

//   fireEvent.change(input, {
//     target: { value: 'blah@blah.com' },
//   });
//   expect(input.value).toBe('blah@blah.com');
// });

// test('Should not be able to change value within invalid input', () => {
//   const input = setup();

//   fireEvent.change(input, {
//     target: { value: 'blablabla' },
//   });
//   expect(input.value).toBe('');
// });
