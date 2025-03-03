import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gulf Manpower Consultancy - Your Reliable Recruitment Partner",
  description: "Providing skilled and unskilled workforce solutions for businesses in the Gulf region. Find the right talent for your needs.",
  keywords: "Gulf recruitment, manpower consultancy, job placement, skilled labor, unskilled workforce, employment services",
  authors: [{ name: "Gulf Manpower Consultancy" }],
  creator: "Gulf Manpower Consultancy",
  publisher: "Gulf Manpower Consultancy",
  metadataBase: new URL("https://www.gulfmanpowerconsultancy.com"),
  openGraph: {
    title: "Gulf Manpower Consultancy - Your Reliable Recruitment Partner",
    description: "Providing skilled and unskilled workforce solutions for businesses in the Gulf region.",
    url: "https://www.gulfmanpowerconsultancy.com",
    type: "website",
    images: [
      {
        url: "https://www.gulfmanpowerconsultancy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gulf Manpower Consultancy Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GulfManpower",
    title: "Gulf Manpower Consultancy - Your Reliable Recruitment Partner",
    description: "Providing skilled and unskilled workforce solutions for businesses in the Gulf region.",
    images: "https://www.gulfmanpowerconsultancy.com/og-image.jpg",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
        {children}
      </body>
    </html>
  );
}
