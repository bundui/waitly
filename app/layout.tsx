import React from "react";
import type { Metadata } from "next";
import { Cal_Sans as FontHeading, Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

const fontHeading = FontHeading({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: "400"
});

export const metadata: Metadata = {
  title: "Waitly: Waiting list Next.js template.",
  description:
    "A simple and useful waiting list Next.js template. It's free and open source. Built with React, Tailwind CSS, and shadcn/ui. Typescript compatible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
          className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased`}
      >
        <div className="bg-pattern"></div>
        {children}
      </body>
    </html>
  );
}
