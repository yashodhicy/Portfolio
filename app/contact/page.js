"use client";

import { ValidationError, useForm } from "@formspree/react";

const Contactme = () => {
  const [state, handleSubmit] = useForm("xnqkwpoq");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div className=" mb-5 h-full">
      <p className=" text-2xl">Contact me</p>
      <div className="box-border mt-2 flex flex-col gap-3 sm:px-3 sm:justify-right md:flex-row ">
        <img
          className="box-content flex max-w-sm shrink rounded-full"
          src="/giphy.gif"
        />
        <form
          onSubmit={handleSubmit}
          className=" box-content my-3 m-auto min-w-md sm:w-2/5 text-cyan-800"
        >
          <div className="m-2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium "
            ></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full name"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring-sky-600 focus:border-sky-600"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="m-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium "
            ></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring-sky-600 focus:border-sky-600"
            />
          </div>

          <div className="m-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium"
            ></label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring-sky-600 focus:border-sky-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-sky-600 mb-2 text-white py-2 px-4 rounded hover:bg-sky-850 hover:scale-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contactme;
