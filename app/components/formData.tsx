'use client'

import { useState } from 'react';

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      // Handle successful submission
      console.log('Form submitted successfully');
    } else {
      // Handle error
      console.error('Form submission error');
    }
  };

  return (
    
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-6">
      <div className="w-1/2 max-w-2xl bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h2 className="text-3xl font-extrabold text-center text-white drop-shadow-lg">
            Contact Us
          </h2>
        </div>
        <div className='flex flex-col items-start pl-4'>
        <form onSubmit={handleSubmit} className="p-6 space-y-6 ">
          <div className="flex items-center">
            <label htmlFor="name" className="w-1/4 text-right mr-4 text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-3/4 px-4 py-2 border bg-slate-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className="w-1/4 text-right mr-4 text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div className="flex items-start">
            <label htmlFor="message" className="w-1/4 text-right mr-4 mt-2 text-gray-700 font-semibold">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-md hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition duration-150 hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
    )
}
