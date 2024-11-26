import React from 'react'
import applepay from '../img/apple-pay.png'
import paypal from '../img/paypal.png'
function Payment() {
  return (
    <>
        <div>
    <div className='navbar border-b-2'>
        <h1 className='m-5 text-center font-bold text-2xl'>CineMax</h1>
    </div>

    <div className='payment flex flex-col md:flex-row justify-between w-full'>

        <div className='payment-methods p-5 md:p-16 w-full md:w-1/2'>
            <h2 className='font-bold text-2xl mb-4'>Payment Method</h2>

            <div className="payment flex flex-col mb-6">
                <label className="label flex space-x-2 cursor-pointer bg-grayscale-20 w-full rounded-full px-5 my-2">
                    <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="applePay" 
                    className="form-radio w-4 accent-[#B43FEB]"
                    />
                    <img src={paypal} 
                        alt="Apple Pay" 
                        className="h-12 w-auto" />
                </label>

                <label className="flex space-x-2 cursor-pointer bg-grayscale-20 w-full rounded-full px-5 my-2">
                    <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="applePay" 
                    className="form-radio w-4 accent-[#B43FEB]"
                    />
                    <img src={applepay} 
                        alt="Apple Pay" 
                        className="h-12 w-auto" />
                </label>
                <span className='font-medium text-grayscale-70 text-sm text-left'>Or checkout using a credit card</span>
            </div>
            <form>
                <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-grayscale-70">Cardholder Name</label>
                    <input 
                    type="text" 
                    className="p-3 mt-1 block w-full bg-grayscale-20 rounded-full outline-none"
                    placeholder="" 
                    />
                </div>
                <div className="flex flex-col md:flex-row mb-4">
                    <div className='md:w-3/4 mb-4 md:mb-0 mr-0 md:mr-2'>
                        <label className="block text-sm font-medium text-grayscale-70">Expiration Date</label>
                        <input 
                            type="text" 
                            className="p-3 mt-1 block w-full bg-grayscale-20 rounded-full outline-none"
                            placeholder="Ex: 31111 1111 1111 1111" 
                        />
                    </div>
                    
                    <div className='md:w-2/4 mb-4 md:mb-0 mr-0 md:mr-2'>
                        <label className="block text-sm font-medium text-grayscale-70">Expiration</label>
                        <input 
                            type="text" 
                            className="p-3 mt-1 block w-full bg-grayscale-20 rounded-full outline-none"
                            placeholder="MM/YY" 
                        />
                    </div>

                    <div className='md:w-2/4'>
                        <label className="block text-sm font-medium text-grayscale-70">CVV</label>
                        <input 
                            type="text" 
                            className="p-3 mt-1 block w-full bg-grayscale-20 rounded-full outline-none"
                            placeholder="" 
                        />
                    </div>
                </div>
                <div className="w-full md:w-52">
                    <label className="block text-sm font-medium text-grayscale-70">Postal Code</label>
                    <input 
                    type="text" 
                    className="p-3 mt-1 block w-full bg-grayscale-20 rounded-full outline-none"
                    placeholder="Postal or Zip Code" 
                    />
                </div>
            </form>
        </div>

        <div className='bg-grayscale-20 p-5 md:p-16 w-full md:w-1/2'>
            <div className="w-3/4 mx-auto">
                <div className="grid grid-cols-2 gap-y-2 text-lg font-bold">
                    <div className="text-grayscale-70">Subtotal</div>
                    <div className="text-right text-gray-800">$4.99</div>
                    
                    <div className="text-grayscale-70">Plan Type</div>
                    <div className="text-right text-gray-800">Monthly</div>
                    
                    <div className="text-grayscale-70">Monthly Plan Discount</div>
                    <div className="text-right">- $5.00</div>

                </div>
                    <hr className='my-4'/>
                <div className='grid grid-cols-2 gap-y-2 text-lg font-bold mb-6'>
                    <div className="font-medium text-grayscale-70">Billed Now</div>
                    <div className="text-right font-medium text-gray-800">$35.00</div>
                </div>
                <span className='font-bold text-grayscale-70 text-sm'>You will be charged $5 every yearly thereafter while the subscription is active. Cancel any time.</span>
                <button className='w-full py-2 my-10 bg-primary text-white font-semibold rounded-3xl focus:outline-none'>Pay</button>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Payment