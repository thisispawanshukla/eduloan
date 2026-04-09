const express = require('express');
const app = express();
app.use(express.json());

// In-memory mock database
let nextId = 1;
const loanApplications = [];

app.post('/api/loans/apply', (req, res) => {
  const { studentName, university, courseOfStudy, loanAmount } = req.body;

  // Basic validation
  if (!studentName || !university || !courseOfStudy || !loanAmount) {
    return res.status(400).json({ error: 'Missing required fields: studentName, university, courseOfStudy, loanAmount' });
  }

  if (isNaN(Number(loanAmount)) || Number(loanAmount) <= 0) {
    return res.status(400).json({ error: 'loanAmount must be a positive number' });
  }

  const newApplication = {
    id: nextId++,
    studentName: String(studentName).trim(),
    university: String(university).trim(),
    courseOfStudy: String(courseOfStudy).trim(),
    loanAmount: Number(loanAmount),
    status: 'Pending Review',
    appliedAt: new Date(),
  };

  loanApplications.push(newApplication);
  console.log('New Edu Loan Application:', newApplication);

  return res.status(201).json({ message: 'Loan application received', application: newApplication });
});

app.get('/api/loans/apply', (req, res) => {
  res.json({ applications: loanApplications });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Edu Loan backend running on port ${PORT}`);
});
