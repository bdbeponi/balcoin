import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Bapple Coin",
  description: "The Bapple Coin | Cripto Challenger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="https://api.skillerszone.com//photos/blog/images/dall_e_2024-11-19_19.51.36_-_a_circular_cryptocurrency_logo_for__bapple___resembling_bitcoin_with_a_gold_background__featuring_the_letter__b__in_bold_white_at_the_center._an_apple-removebg-preview-1732024402002.png"
        type="image/x-icon"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
