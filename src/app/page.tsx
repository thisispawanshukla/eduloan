'use client';
import { useState } from 'react';

export default function Home() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(10);

  const calculateEMI = () => {
    const p = loanAmount;
    const r = (interestRate / 12) / 100;
    const n = tenureYears * 12;
    if (r === 0) return p / n;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const emi = calculateEMI().toFixed(0);

  const lenders = [
    { name: "State Bank A", rate: 8.4, maxAmount: "1.5 Cr", fee: "₹10,000", collateral: "Required > ₹7.5L" },
    { name: "National Bank B", rate: 9.1, maxAmount: "50 Lakhs", fee: "Zero", collateral: "Not Required" },
    { name: "EduFinance NBFC", rate: 10.5, maxAmount: "2 Cr", fee: "1%", collateral: "Flexible" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6">
          Fund Your Higher Education
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Don't let finances stop your dreams. Compare rates from top banks and NBFCs, calculate your EMI, and apply directly online.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
          Get Pre-Approved Now
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">EMI Calculator</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (₹)</label>
            <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
            <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tenure (Years)</label>
            <input type="number" value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))} className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="bg-blue-50 p-4 rounded-xl text-center">
            <p className="text-sm text-blue-800 font-semibold mb-1">Estimated Monthly EMI</p>
            <p className="text-3xl font-bold text-blue-900">₹{Number(emi).toLocaleString('en-IN')}</p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Compare Top Lenders</h2>
          {lenders.map((lender, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 hover:shadow-lg transition-shadow">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{lender.name}</h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-600">
                  <p>Interest Rate: <span className="font-semibold text-gray-900">{lender.rate}% p.a.</span></p>
                  <p>Max Amount: <span className="font-semibold text-gray-900">{lender.maxAmount}</span></p>
                  <p>Processing Fee: <span className="font-semibold text-gray-900">{lender.fee}</span></p>
                  <p>Collateral: <span className="font-semibold text-gray-900">{lender.collateral}</span></p>
                </div>
              </div>
              <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}