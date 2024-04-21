import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./_assets/Fonts";

export const metadata: Metadata = {
  title:
    "vcechinese.com - The Ultimate Place to Supercharge Your VCE Chinese Studies",
};

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
