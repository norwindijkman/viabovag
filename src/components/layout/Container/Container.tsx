'use client'; 

import type { ReactNode } from "react";

export default function Main({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="tw-mb-14 tw-container tw-mx-auto">
      {children}
    </div>
  );
}
