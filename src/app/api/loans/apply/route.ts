// In-memory store for loan applications (mock database)
const loanApplications: {
  id: number;
  studentName: string;
  university: string;
  courseOfStudy: string;
  loanAmount: number;
  status: string;
  appliedAt: Date;
}[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, university, courseOfStudy, loanAmount } = body;

    // Basic validation
    if (!studentName || !university || !courseOfStudy || !loanAmount) {
      return Response.json(
        { error: 'Missing required fields: studentName, university, courseOfStudy, loanAmount' },
        { status: 400 }
      );
    }

    if (isNaN(Number(loanAmount)) || Number(loanAmount) <= 0) {
      return Response.json(
        { error: 'loanAmount must be a positive number' },
        { status: 400 }
      );
    }

    const newApplication = {
      id: loanApplications.length + 1,
      studentName: String(studentName).trim(),
      university: String(university).trim(),
      courseOfStudy: String(courseOfStudy).trim(),
      loanAmount: Number(loanAmount),
      status: 'Pending Review',
      appliedAt: new Date(),
    };

    loanApplications.push(newApplication);

    return Response.json(
      { message: 'Loan application received', application: newApplication },
      { status: 201 }
    );
  } catch {
    return Response.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function GET() {
  return Response.json({ applications: loanApplications });
}
