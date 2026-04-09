import EduLoanApplication from '../../components/EduLoanApplication';

export const metadata = {
  title: 'Apply for Loan – EduLoan',
  description: 'Submit your educational loan application.',
};

export default function ApplyPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Apply for an Education Loan</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Fill in the details below and our team will review your application and get back to you shortly.
        </p>
      </div>
      <EduLoanApplication />
    </main>
  );
}
