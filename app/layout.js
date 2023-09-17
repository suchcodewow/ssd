import "@code-hike/mdx/dist/index.css";
import "./globals.css";

import { Providers } from "./providers";

// custom: font
import { Nunito_Sans, Overpass, Open_Sans } from "next/font/google";
const font = Nunito_Sans({ subsets: ["latin"] });

// html and body tags should be created here
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
