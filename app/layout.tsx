import Footer from '@/components/Footer'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Header from '@/components/Header'

export const metadata = {
  title: 'metrOhgnome',
  description: 'music practice machine and noisemaker funtimes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}>
      <html lang="en">
        <body
          className='bg-slate-800 flex flex-col items-center justify-center min-h-screen min-w-fit box-border'
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
