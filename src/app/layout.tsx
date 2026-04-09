import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>EduLoan - Fund Your Future</title>
        <meta name="description" content="Compare and apply for education loans from top banks and NBFCs." />
      </head>
      <body className="bg-gray-50 min-h-screen text-gray-900">{children}</body>
    </html>
  )
}