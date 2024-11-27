import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import applepay from '../img/apple-pay.png';
import paypal from '../img/paypal.png';

const validationSchema = Yup.object({
  cardholderName: Yup.string()
    .min(1, 'Cardholder name must be at least 1 character')
    .max(32, 'Cardholder name must be at most 32 characters')
    .required('Cardholder name is required'),

  cardNumber: Yup.string()
    .length(16, 'Card number must be exactly 16 characters')
    .matches(/^[0-9]{16}$/, 'Card number must be in a valid format')
    .required('Card number is required'),

  expiration: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Expiration date must be in MM/YY format')
    .test('expiration-date', 'Expiration date cannot be earlier than current date', function (value) {
      const currentDate = new Date();
      const [month, year] = value.split('/').map((val) => parseInt(val, 10));
      const expirationDate = new Date(`20${year}-${month}-01`);
      return expirationDate >= currentDate;
    })
    .required('Expiration date is required'),

  cvv: Yup.string()
    .length(3, 'CVV must be exactly 3 digits')
    .matches(/^[0-9]{3}$/, 'CVV must be a 3-digit number')
    .required('CVV is required'),

  postalCode: Yup.string()
    .min(3, 'Postal code must be at least 3 characters')
    .max(12, 'Postal code must be at most 12 characters')
    .matches(/^[A-Za-z0-9]+$/, 'Postal code can only contain letters and numbers')
    .required('Postal code is required'),

  paymentMethod: Yup.string()
    .oneOf(['applePay', 'paypal'], 'Please select a payment method')
    .required('Payment method is required'),
});

const Payment = () => {
  return (
    <div className='dark:bg-darksmooth dark:text-white h-screen'>
      <div className="navbar border-grayscale-90 border-b-2">
        <h1 className="p-5 text-center font-bold text-2xl">CineMax</h1>
      </div>

      <Formik
        initialValues={{
          cardholderName: '',
          cardNumber: '',
          expiration: '',
          cvv: '',
          postalCode: '',
          paymentMethod: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isValid }) => (
          <Form>
            <div className="payment flex flex-col md:flex-row justify-between w-full">
              <div className="payment-methods p-5 md:p-16 w-full md:w-1/2">
                <h2 className="font-bold text-2xl mb-4">Payment Method</h2>

                <div className="payment flex flex-col mb-6">
                  <label className="label flex space-x-2 cursor-pointer dark:bg-linedark bg-grayscale-20 w-full rounded-full px-5 my-2">
                    <Field
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      className="form-radio w-4 accent-[#B43FEB]"
                    />
                    <img src={paypal} alt="Paypal" className="h-12 w-auto" />
                  </label>

                  <label className="flex space-x-2 cursor-pointer dark:bg-linedark bg-grayscale-20 w-full rounded-full px-5 my-2">
                    <Field
                      type="radio"
                      name="paymentMethod"
                      value="applePay"
                      className="form-radio w-4 accent-[#B43FEB]"
                    />
                    <img src={applepay} alt="Apple Pay" className="h-12 w-auto" />
                  </label>
                  <ErrorMessage name="paymentMethod" component="div" className="text-red-500" />
                  <span className="font-medium text-grayscale-70 text-sm text-left">Or checkout using a credit card</span>
                </div>

                <div className="mb-4 w-full">
                  <label className="block text-sm font-medium text-grayscale-70">Cardholder Name</label>
                  <Field
                    type="text"
                    name="cardholderName"
                    className="p-3 mt-1 block w-full dark:bg-linedark bg-grayscale-20 rounded-full outline-none"
                  />
                  <ErrorMessage name="cardholderName" component="div" className="text-red-500" />
                </div>

                <div className="flex flex-col md:flex-row mb-4">
                  <div className="md:w-3/4 mb-4 md:mb-0 mr-0 md:mr-2">
                    <label className="block text-sm font-medium text-grayscale-70">Card Number</label>
                    <Field
                      type="text"
                      name="cardNumber"
                      className="p-3 mt-1 block w-full dark:bg-linedark bg-grayscale-20 rounded-full outline-none"
                      placeholder="Ex: 4111 1111 1111 1111"
                    />
                    <ErrorMessage name="cardNumber" component="div" className="text-red-500" />
                  </div>

                  <div className="md:w-2/4 mb-4 md:mb-0 mr-0 md:mr-2">
                    <label className="block text-sm font-medium text-grayscale-70">Expiration Date</label>
                    <Field
                      type="text"
                      name="expiration"
                      className="p-3 mt-1 block w-full dark:bg-linedark bg-grayscale-20 rounded-full outline-none"
                      placeholder="MM/YY"
                    />
                    <ErrorMessage name="expiration" component="div" className="text-red-500" />
                  </div>

                  <div className="md:w-2/4">
                    <label className="block text-sm font-medium text-grayscale-70">CVV</label>
                    <Field
                      type="text"
                      name="cvv"
                      className="p-3 mt-1 block w-full dark:bg-linedark bg-grayscale-20 rounded-full outline-none"
                    />
                    <ErrorMessage name="cvv" component="div" className="text-red-500" />
                  </div>
                </div>

                <div className="w-full md:w-52">
                  <label className="block text-sm font-medium text-grayscale-70">Postal Code</label>
                  <Field
                    type="text"
                    name="postalCode"
                    className="p-3 mt-1 block w-full dark:bg-linedark bg-grayscale-20 rounded-full outline-none"
                    placeholder="Postal or Zip Code"
                  />
                  <ErrorMessage name="postalCode" component="div" className="text-red-500" />
                </div>
              </div>

              <div className="dark:bg-linedark bg-grayscale-20 p-5 md:p-16 w-full md:w-1/2">
                <div className="w-3/4 mx-auto">
                  <div className="grid grid-cols-2 gap-y-2 text-lg font-bold">
                    <div className="text-grayscale-70">Subtotal</div>
                    <div className="dark:text-white text-right text-gray-800">$4.99</div>

                    <div className="text-grayscale-70">Plan Type</div>
                    <div className="dark:text-white text-right text-gray-800">Monthly</div>

                    <div className="text-grayscale-70">Monthly Plan Discount</div>
                    <div className="text-right">- $5.00</div>
                  </div>

                  <hr className="my-4" />
                  <div className="grid grid-cols-2 gap-y-2 text-lg font-bold mb-6">
                    <div className="font-medium text-grayscale-70">Billed Now</div>
                    <div className="dark:text-white text-right font-medium text-gray-800">$35.00</div>
                  </div>

                  <span className="font-bold text-grayscale-70 text-sm">You will be charged $5 every yearly thereafter while the subscription is active. Cancel any time.</span>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`w-full py-2 my-10 font-semibold rounded-3xl focus:outline-none ${
                      isValid ? 'bg-primary text-white' : 'bg-gray-400 text-gray-800 cursor-not-allowed'
                    }`}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Payment;
