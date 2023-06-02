import React, { useState } from 'react';
import The from './The.css';
const Home2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform complaint registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Complaint:', complaint);
    // Reset form fields
    setName('');
    setEmail('');
    setComplaint('');
  };

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">Register a Complaint</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={handleNameChange}
                  className="input"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="input"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="complaint" className="block text-white mb-1">
                Complaint
              </label>
              <textarea
                id="complaint"
                name="complaint"
                required
                value={complaint}
                onChange={handleComplaintChange}
                rows={4}
                className="input"
                placeholder="Enter your complaint"
              />
            </div>
            <div className="mt-6">
              <button type="submit" className="btn-primary w-[100px] p-[2px] hover:w-[105px] hover:space-x-5 ">
                Register Complaint
              </button>
            </div>
          </form>
        </div>
      </main>

    </div>
  );
};

export default Home2;