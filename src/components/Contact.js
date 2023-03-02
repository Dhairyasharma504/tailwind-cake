import React from 'react';
import Description from './atoms/Description';
import PrimaryButton from './atoms/PrimaryButton';
import Title from './atoms/Title';

function Contact() {
  return (
    <div>
      <div className="container px-4 py-10 mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <Title title=" contact us" />

            <Description
              TextBrand
              description="Ask us everything and we would love to hear from you"
            />

            <form className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm  text-lightShade ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2   text-darkShade placeholder-gray-400 bg-white border rounded-md focus:outline-none "
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-lightShade ">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-darkShade placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none "
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-lightShade ">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2  text-darkShade placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none"
                  placeholder="Message"
                />
              </div>
            </form>
            <div className=" mt-8">
              <PrimaryButton label=" get in touch" />
            </div>
          </div>

          <div className=" mx-auto ">
            <img
              className=" object-cover mx-auto rounded-full w-72 h-72"
              src="/images/about1.jpg.webp"
              alt=""
            />

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2  text-brand"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-lightShade truncate w-72 ">
                  OUR OFFICES: London, UK ,Punjab, India
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2  text-brand "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-lightShade truncate w-72 ">
                  +44-7747810130
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2  text-brand"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-lightShade truncate w-72">
                  sales@zeiq.co
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
