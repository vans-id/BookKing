import React, { useState } from 'react';
import InputNumber from '../components/UI/Forms/InputNumber/InputNumber';

const DetailPage = () => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      style={{ width: '300px' }}
      className='container'
    >
      <InputNumber
        max={30}
        suffix=' night'
        onChange={handleChange}
        isSuffixPlural
        name='value'
        value={value}
      />
    </div>
  );
};

export default DetailPage;
