import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Secure Share | File Transfer Platform',
  description: 'SecureShare: Safeguard your data with confidence during online file transfers. Discover a reliable solution for seamless and secure file sharing. Try it today!',
  openGraph: {
    title: 'Secure Share | File Transfer Platform',
    description: 'SecureShare: Safeguard your data with confidence during online file transfers. Discover a reliable solution for seamless and secure file sharing. Try it today!',
    images: "https://media.istockphoto.com/id/1155041243/vector/gold-and-red-shield-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=Oc3RTFU6aKsd7BRpgW9VXHXxytkCE594yFGLpQYndlE="
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
