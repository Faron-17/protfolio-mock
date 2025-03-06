import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const soraSans = Sora({
  subsets: ['latin'],
  display: 'swap',
}) 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${soraSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
