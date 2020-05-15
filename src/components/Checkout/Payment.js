import React from 'react';
import Fade from 'react-reveal/Fade';

import './Shared.scss';
import InputText from '../UI/Forms/InputText/InputText';
import InputFile from '../UI/Forms/InputFile/InputFile';
import logoBCA from '../../assets/images/icons/logo_bca.svg';
import logoMandiri from '../../assets/images/icons/logo_mandiri.svg';

const Payment = ({
  data,
  ItemDetails,
  checkout,
  changed,
}) => {
  const tax = 10;
  const subTotal =
    ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className='container mb-4'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-5 left-content py-5'>
            <Fade delay={300}>
              <p className='mb-4'>
                Transfer Pembayaran
              </p>
              <p>Tax : {tax}%</p>
              <p>Subtotal : ${subTotal} USD</p>
              <p>Total : ${grandTotal} USD</p>

              <div className='row mt-4'>
                <div className='col-3 text-right'>
                  <img
                    src={logoBCA}
                    alt='bcabank'
                    width='60'
                  />
                </div>
                <div className='col'>
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>Stayseeker</dd>
                  </dl>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-3 text-right'>
                  <img
                    src={logoMandiri}
                    alt='bcabank'
                    width='60'
                  />
                </div>
                <div className='col'>
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>Stayseeker</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-lg-5 py-5 right-content'>
            <Fade delay={600}>
              <label htmlFor='proofPayment'>
                Upload Bukti Transfer
              </label>
              <InputFile
                accept='image/*'
                id='proofPayment'
                name='proofPayment'
                value={data.proofPayment}
                changed={changed}
              />
              <label htmlFor='bankName'>
                Asal Bank
              </label>
              <InputText
                type='text'
                id='bankName'
                name='bankName'
                value={data.bankName}
                changed={changed}
              />
              <label htmlFor='bankHolder'>
                Nama Pengirim
              </label>
              <InputText
                type='text'
                id='bankHolder'
                name='bankHolder'
                value={data.bankHolder}
                changed={changed}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Payment;
