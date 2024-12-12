import type { Metadata } from "next";
import type { ReactNode } from "react";
import RootLayout from '@/components/layout/RootLayout'
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

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
  title: "NextCar",
  description: "Vind de beste auto voor een scherpe prijs",
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className="tw-w-full" lang="en">
      <Head>
            <meta
      name="viewport"
      content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, viewport-fit=cover"
    />
      </Head>
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
