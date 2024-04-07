import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
    </html>
  );
}
