'use client'
import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const form = useRef();
  const [state, handleSubmit] = useForm("mwpeqljp");
  if (state.succeeded) {
    return (
      <div className="md:h-screen w-full dark:bg-gray-100 flex">
        <div className="lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center justify-center">
          <div className="flex flex-col gap-4 text-black dark:text-black p-4 rounded-lg border border-kashBlue-100 shadow-xl shadow-slate-400/30">
            <h5 className="text-sm text-black font-semibold">Korean American Society of Houston</h5>
            <div className="w-full flex gap-2 items-center justify-around">
              <div className="text-5xl font-semibold uppercase font-serif">Thank You</div>
              <hr className="w-[50%] h-1 rounded-full border-t-kashBlue-600 bg-kashBlue-600" />
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget justo sit amet massa hendrerit bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/" className="w-full px-4 py-1 border-2 border-kashBlue-600 rounded-sm text-center flex items-center justify-center duration-200 hover:bg-kashBlack-100 hover:text-white">
                Return to homepage
              </a>
              <a href="https://app.joinit.com/o/kash" target="blank" className="w-full text-white px-4 py-1 bg-kashBlue-600 rounded-sm text-center flex items-center justify-center duration-200 hover:bg-kashBlack-100">
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:h-screen flex items-center">
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          <div className="bg-kashBlue-900 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-kashBlue-300">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget justo sit amet massa hendrerit bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin.
            </p>
            <div className="flex items-center mt-5">
              <span className="text-sm">House #14, Street #12, something Road, Houston, Texas.</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-sm">+832 100 1000</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-sm">some information?</span>
            </div>
          </div>
          <form ref={form} className="md:col-span-8 p-10" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input
                  name="firstName"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name" type="text" placeholder="Jane" required
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input
                  name="lastName"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="Doe" required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email Address
                </label>
                <input
                  name="email"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email" type="email" placeholder="********@*****.***" required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            {/* Message */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder='Something awesome!'
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-message" required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 font-bold">
                    <input name="newsletter" className="mr-4 sm:mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">
                      Sign me up your newsletter!
                    </span>
                  </label>
                </div>
                <button
                  className="shadow bg-kashBlue-600 hover:bg-kashBlue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 sm:px-6 rounded"
                  type="submit"
                  disabled={state.submitting}>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}