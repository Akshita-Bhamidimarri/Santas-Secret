import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddParticipants = () => {
  const [participants, setParticipants] = useState([{ name: '', email: '' }]);
  const [showSubmit, setShowSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChangeinInput = (index, event) => {
    const { name, value } = event.target;
    const newParticipants = [...participants];
    newParticipants[index][name] = value;
    setParticipants(newParticipants);
  };

  const addParticipant = () => {
    setParticipants([...participants, { name: '', email: '' }]);
    setShowSubmit(true); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Add_Participants:', participants);
    navigate('/Event_Details');
  };

  return (
    <main className="max-w-md mx-auto p-4 bg-red-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {participants.map((participant, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <input type="text" placeholder="Name" name="name" value={participant.name} onChange={(e) => handleChangeinInput(index, e)} className="border rounded p-2"/>
            <input type="email" placeholder="Email" name="email" value={participant.email} onChange={(e) => handleChangeinInput(index, e)} className="border rounded p-2"/>
          </div>
        ))}
        <div className="flex justify-between">
          <button type="submit" className={`bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 ${!showSubmit ? 'hidden' : ''}`}>
            Submit and Proceed
          </button>
          <button type="button" onClick={addParticipant} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add Participant
          </button>
        </div>
      </form>
    </main>
  );
};
