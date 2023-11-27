import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">What is Secret Santa?</h1>
        <p className="mb-8">
          Secret Santa is a gift-giving tradition that is often practiced in groups, especially around the holiday season. It involves participants randomly selecting a person to whom they will anonymously give a gift. The identity of the gift giver remains a secret until the gift is revealed.
        </p>
        <h2 className="text-2xl font-bold mb-4">Why participate in Secret Santa?</h2>
        <ul className="list-disc pl-6 mb-8">
          <li className="mb-4">
            <span className="font-semibold">Fun and excitement:</span> Secret Santa adds an element of surprise and joy to gift-giving, making it an enjoyable experience for all involved.
          </li>
          <li className="mb-4">
            <span className="font-semibold">Promotes generosity:</span> It encourages people to think about others and express generosity through thoughtful gifts.
          </li>
        </ul>
        <Link to="/Add_Participants" className="inline-block bg-red-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
          Get Started
        </Link>
      </div>
    </main>
  );
};
