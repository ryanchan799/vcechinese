import type { Metadata } from "next";
import "./globals.css";
import { heebo } from "./_assets/Fonts";

export const metadata: Metadata = {
  title: "VCE Chinese - Helping you score high",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
