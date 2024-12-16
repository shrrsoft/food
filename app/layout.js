import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "@/context/CartContext";
import Footer from "./components/Footer";


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

export const metadata = {
  title: "Maani FastFood",
  description: "Online Food Ordering",
};

export default function RootLayout({ children }) {
  return (
        <CartProvider>

    <html lang="fa" dir="rtl">     

      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased mt-24`}
        > <Navbar />
          {children}
          <Footer />
      </body>
      </html>
          </CartProvider>

  );
}
