import type { Metadata } from 'next'
import "./globals.css";
import localfont from "next/font/local"

const futura = localfont({
  src: [{
    path : "../public/fonts/futura/FuturaNewBook-Reg.ttf",
    weight: "700"
  },
],
variable : "--font-futura",
});


export const metadata: Metadata = {
  title: 'Fibin',
  description: 'Fibin is a platform to discover ease.',
  icons: {
    icon: '/assets/icons/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${futura.variable}`}>{children}</body> 
    </html>
  )
}
