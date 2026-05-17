import { Bitter, Geist, Geist_Mono, Smooch_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const smoochSans = Smooch_Sans({
  variable: "--font-smooch-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "SportNest",
  description: "Created by Parvez Nur Shadhin",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${smoochSans.variable} ${bitter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(family-name:--font-bitter)">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
