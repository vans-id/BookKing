import React, { useState } from 'react';
// import InputNumber from '../components/UI/Forms/InputNumber/InputNumber';
import InputDate from '../components/UI/Forms/InputDate/InputDate';
import Breadcrumb from '../components/UI/Breadcrumb/Breadcrumb';

const DetailPage = () => {
  // const [value, setValue] = useState(1);

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const [value, setValue] = useState({
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: 'selection',
  // });

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  const breadcrumb = [
    { pageTitle: 'Home', pageHref: '' },
    { pageTitle: 'House Details', pageHref: '' },
  ];

  return (
    <div
      style={{ width: '300px' }}
      className='container'
    >
      {/* <InputDate
        max={30}
        onChange={handleChange}
        name='value'
        value={value}
      /> */}
      <Breadcrumb
        data={breadcrumb}
        className='breadcrumb'
      />
    </div>
  );
};

export default DetailPage;
