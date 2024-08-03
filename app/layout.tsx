import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hiring test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script id="security-script">
          {`
            // Disable right-click
            document.addEventListener('contextmenu', (e) => e.preventDefault());

            // Disable F12 key
            document.addEventListener('keydown', (e) => {
              if (e.key === 'F12') e.preventDefault();
            });

            // Disable print screen
            document.addEventListener('keyup', (e) => {
              if (e.key === 'PrintScreen') {
                navigator.clipboard.writeText('');
              }
            });

            // Disable copying
            document.addEventListener('copy', (e) => e.preventDefault());
          `}
        </Script>
      </body>
    </html>
  )
}
