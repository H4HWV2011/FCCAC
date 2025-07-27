import './globals.css'

export const metadata = {
  title: 'Fayette County Community Arts Center',
  description: 'FCCAC - A vibrant hub for artistic expression and community engagement in Fayette County, WV. Part of Harmony for Hope, Inc.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
