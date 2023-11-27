import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState({ budget: '', date: '' });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event_Details:', eventDetails);
    //backend
    navigate('/Show_Result');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  return (
    <main className="max-w-md mx-auto p-4 bg-red-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="budget" className="text-gray-600 font-semibold">
            Budget
          </label>
          <input type="text" id="budget" name="budget" value={eventDetails.budget} onChange={handleInputChange} placeholder="Enter budget amount" className="border rounded p-2"/>
          <label htmlFor="date" className="text-gray-600 font-semibold">
            Date
          </label>
          <input type="date" id="date" name="date" value={eventDetails.date} onChange={handleInputChange} placeholder="Select last date" className="border rounded p-2"/>
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};
