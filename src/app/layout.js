import './globals.css'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chatty App',
  description: 'Your favorite AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body className={inter.className}>{children}</body>  
      </UserProvider>

    </html>
  )
}
