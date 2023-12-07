import type { Metadata } from 'next'
import { Barlow, Fraunces } from "next/font/google";
import './globals.css'

const barlow = Barlow({ subsets: ['latin'], weight: ['600'], variable:"--font-barlow" })
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: 'Sunnyside',
  description: 'We are creatives',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${barlow.variable}`}
    >
      <body className='bg-white'>{children}</body>
    </html>
  );
}
