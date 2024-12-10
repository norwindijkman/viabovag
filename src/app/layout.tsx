import type { Metadata } from "next";
import type { ReactNode } from "react";
import RootLayout from '@/components/layout/RootLayout'
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CameraStore",
  description: "Buy Amazing Camera's and lenses",
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className="tw-w-full" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
