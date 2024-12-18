import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./Pagescss.css" ;
import "./mediaquery.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import FooterUp from "@/component/footerup";

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
  title: "E-commerce Hackathon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <FooterUp />
        <Footer />
      </body>
    </html>
  );
}