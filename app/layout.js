import "@code-hike/mdx/dist/index.css"
import './globals.css'


import { Providers } from './providers'

// custom: font
import { Nunito_Sans, Overpass, Open_Sans } from 'next/font/google'
const font = Open_Sans({ subsets: ['latin'] })
// const subfont = Montserrat({subsets: ['latin']})

// export const metadata = {
//   title: 'SuchCodeWow',
//   description: 'SuchCodeWow assistants and tutorials',
// }

// html and body tags should be created here
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}><Providers>{children}</Providers></body>
    </html>
  )
}
