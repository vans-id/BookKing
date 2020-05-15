import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import ItemDetails from '../json/itemDetails.json';
import Header from '../components/Shared/Header/Header';
import Button from '../components/UI/Button/Button';
import Stepper from '../components/UI/Stepper/Stepper';
import Numbering from '../components/UI/Stepper/Numbering';
import Meta from '../components/UI/Stepper/Meta';
import MainContent from '../components/UI/Stepper/MainContent';
import Controller from '../components/UI/Stepper/Controller';
import Information from '../components/Checkout/Information';
import Payment from '../components/Checkout/Payment';
import Completed from '../components/Checkout/Completed';

const Checkout = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    proofPayment: '',
    bankName: '',
    bankHolder: '',
  });

  useEffect(() => {
    document.title = 'Checkout';
    window.scrollTo(0, 0);
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const checkout = {
    duration: 3,
  };

  const steps = {
    bookingInformation: {
      title: 'Booking Information',
      description:
        'Please fill up the blank fields below',
      content: (
        <Information
          data={data}
          checkout={checkout}
          ItemDetails={ItemDetails}
          changed={onChange}
        />
      ),
    },
    payment: {
      title: 'Payment',
      description:
        'Kindly follow the instruction below',
      content: (
        <Payment
          data={data}
          checkout={checkout}
          ItemDetails={ItemDetails}
          changed={onChange}
        />
      ),
    },
    completed: {
      title: 'Yay! Completed',
      description: null,
      content: <Completed />,
    },
  };

  return (
    <>
      <Header isCentered />
      <Stepper steps={steps}>
        {(prevStep, nextStep, currentStep, steps) => (
          <>
            <Numbering
              data={steps}
              current={currentStep}
            />
            <Meta data={steps} current={currentStep} />
            <MainContent
              data={steps}
              current={currentStep}
            />
            {currentStep === 'bookingInformation' && (
              <Controller>
                {data.firstName !== '' &&
                  data.lastName !== '' &&
                  data.email !== '' &&
                  data.phone !== '' && (
                    <Fade>
                      <Button
                        className='btn mb-3'
                        type='button'
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className='btn'
                  type='link'
                  isBlock
                  isLight
                  href={`/properties/${ItemDetails._id}`}
                  onClick={prevStep}
                >
                  Cancel
                </Button>
              </Controller>
            )}
            {currentStep === 'payment' && (
              <Controller>
                {data.proofPayment !== '' &&
                  data.bankName !== '' &&
                  data.bankHolder !== '' && (
                    <Fade>
                      <Button
                        className='btn btn-sm-block mb-3'
                        type='button'
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className='btn'
                  type='link'
                  isBlock
                  isLight
                  href={`/properties/${ItemDetails._id}`}
                  onClick={prevStep}
                >
                  Cancel
                </Button>
              </Controller>
            )}
            {currentStep === 'completed' && (
              <Controller>
                <Fade>
                  <Button
                    className='btn px-5 mt-5'
                    hasShadow
                    isPrimary
                    type='link'
                    href='/'
                  >
                    Back to Home
                  </Button>
                </Fade>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
};

export default Checkout;
