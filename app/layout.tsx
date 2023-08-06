import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    default: 'Telepole',
    template: '%s | Telepole',
  },
  description: 'Telepole is a community driven platform for sharing posters and stickers.',
}

import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="assets/favicon.ico" />
      </head>

      <body>{children}</body>
    </html>
  )
}
