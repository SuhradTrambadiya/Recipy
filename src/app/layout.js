import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Assuming Navbar component is in Navbar.js

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipy App",
  description: "Created By Suhrad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
