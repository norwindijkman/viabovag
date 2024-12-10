'use client';

import type { ReactNode } from "react";
import useInitializeFavorites from "@/stores/favorites/useInitializeFavorites";
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import Container from '@/components/layout/Container/Container'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  useInitializeFavorites()
  return (
    <div>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
}
