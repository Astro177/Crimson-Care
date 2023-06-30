import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crimson Care",
  description: "Blood Donation Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className="lg:container mx-auto">
          <NavBar />
          <div className="min-h-[calc(100vh-242px)]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
