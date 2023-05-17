import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'MetrOhGnome',
  description: 'music practice machine and noisemaker funtimes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className='bg-slate-800 flex flex-col items-center justify-center min-h-screen min-w-fit box-border'
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
