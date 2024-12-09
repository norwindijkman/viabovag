'use client'; 

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="tw-mb-14 tw-container tw-mx-auto">
      {children}
    </div>
  );
}
