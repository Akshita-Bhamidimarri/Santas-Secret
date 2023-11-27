import React from 'react';
import { NavLink } from 'react-router-dom';

export const Contact = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Somen Bandishti</h2>
          <div className="flex items-center justify-center space-x-4">
            <NavLink to="https://github.com/somen4898" className="text-blue-600 hover:underline">GitHub</NavLink>
            <NavLink to="mailto:somen4898@gmail.com" className="text-blue-600 hover:underline">Email</NavLink>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Akshita Bhamidimarri</h2>
          <div className="flex items-center justify-center space-x-4">
            <NavLink to="https://github.com/Akshita-Bhamidimarri" className="text-blue-600 hover:underline">GitHub</NavLink>
            <NavLink to="https://www.linkedin.com/in/akshita-bhamidimarri-375548231/" className="text-blue-600 hover:underline">LinkedIn</NavLink>
            <NavLink to="mailto:akshi.bham@gmail.com" className="text-blue-600 hover:underline">Email</NavLink>
          </div>
        </section>
      </div>
    </main>
  );
};
