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
    </html>
  );
}
