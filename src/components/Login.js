import React from 'react'
import macbook from '../img/macbook.png'
import searchGoogle from '../img/search.png'
import facebook from '../img/facebook.png'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
      <div className='h-screen overflow-hidden'>
        <div className='flex justify-between'>
          <div className='m-0 p-0 bg-primary w-2/4' >
            <div className='w-2/3 m-auto my-5 p-5 flex flex-col justify-between '>
              <h1 className='text-white text-3xl font-bold'>The biggest international and local film streaming</h1>
              <p className='text-grayscale-30 font-bold text-sm my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
            <div className='w-full'>
              <img className='w-full object-cover' src={macbook} alt='macbook'/>
            </div>
          </div>
          <div className='w-2/4 text-center'>
          <h3 className='font-bold text-xl my-5'>CineMax</h3>
            <div className='py-10'>
              <h1 className='text-3xl font-bold mb-10'> Hey there, <br/> Welcome Back </h1>
              <Link className='felx justify-around bg-grayscale-20 w-3/4 mx-auto block rounded-3xl p-2 my-3'> <span> <img className='w-6 h-6 inline-block' src={searchGoogle} alt='' /> </span> <span className='font-bold mx-3'>Login with Google</span> </Link>
              <Link className='felx justify-around bg-grayscale-20 w-3/4 mx-auto block rounded-3xl p-2 my-3'> <span> <img className='w-6 h-6 inline-block' src={facebook} alt='' /> </span> <span className='font-bold mx-3'>Login with Google</span> </Link>

              <div class="flex items-center justify-center my-5 w-3/4 mx-auto">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-4 text-sm font-bold text-grayscale-60">Or Login With</span>
                <div class="flex-grow border-t border-gray-300"></div>
              </div>

              <form className='w-3/4 mx-auto text-left'>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold text-grayscale-60">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 px-5 w-full border border-gray-300 rounded-3xl bg-grayscale-20 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-bold text-grayscale-60">Password</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 p-2 px-5 w-full border border-gray-300 rounded-3xl bg-grayscale-20 focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-4">
                <button className="w-full py-2 bg-primary text-white font-semibold rounded-3xl focus:outline-none">
                  Login
                </button>
              </div>

              <div className="flex justify-end mb-4">
                <Link className="text-sm text-primary hover:underline font-bold">Forgot password?</Link>
              </div>

              <div className="text-center text-sm">
                <p className='text-grayscale-60 font-bold'>Don't have an account? <Link className="text-primary font-bold hover:underline">Register</Link></p>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login