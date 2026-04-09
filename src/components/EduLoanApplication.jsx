'use client';
import { useState } from 'react';

export default function EduLoanApplication() {
  const [formData, setFormData] = useState({
    studentName: '',
    university: '',
    courseOfStudy: '',
    loanAmount: '',
  });
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setIsError(false);

    try {
      const response = await fetch('/api/loans/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Application submitted successfully! We will review your educational loan.');
        setFormData({ studentName: '', university: '', courseOfStudy: '', loanAmount: '' });
      } else {
        setIsError(true);
        setStatus(data.error || 'Failed to submit application. Please try again.');
      }
    } catch {
      setIsError(true);
      setStatus('Error connecting to the server. Please try again later.');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Educational Loan Application</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            placeholder="Enter your full name"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">University / College</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            placeholder="Enter your university or college"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Course of Study</label>
          <input
            type="text"
            name="courseOfStudy"
            value={formData.courseOfStudy}
            placeholder="e.g. B.Tech Computer Science"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Requested Loan Amount (₹)</label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            placeholder="Enter loan amount"
            onChange={handleChange}
            min="1000"
            required
            className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
        >
          Apply for Loan
        </button>
      </form>
      {status && (
        <p className={`mt-4 font-semibold ${isError ? 'text-red-600' : 'text-green-600'}`}>
          {status}
        </p>
      )}
    </div>
  );
}
