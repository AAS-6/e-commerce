import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AA Shopping",
  description: "Your all-in-one electronic one-stop shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
