import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./_assets/Fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link rel="icon" type="image/x-icon" href="/images/logo.ico"></link>
    </html>
  );
}
