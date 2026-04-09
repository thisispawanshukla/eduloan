export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎓 EduLoan</h1>
      <p>Fund your higher education. Compare and apply for education loans from top banks and NBFCs.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Compare Loans</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>Bank A</h3>
            <p>Interest Rate: 8.5%</p>
            <button>Apply Now</button>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>NBFC B</h3>
            <p>Interest Rate: 9.2%</p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>
    </main>
  );
}