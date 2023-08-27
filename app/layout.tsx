import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google';

// components
import Navbar from '@app/app/components/navbar/Navbar'
import ClientOnly from './components/ClientOnly/ClientOnly';
import Modal from './components/modal/Modal';

export const metadata: Metadata = {
  title: 'Vico',
  description: 'Apartment rental in the heart of the city',
}

const nunito = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClientOnly>
        <Modal isOpen title='Sign In' />
        <Navbar />
      </ClientOnly>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
