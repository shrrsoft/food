import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Header";
import { CartProvider } from "@/context/CartContext";
import Footer from "./components/Footer";
import { UserProvider } from "@/context/UserContext";
import Header from "./components/Header";


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
const vazirMatn = localFont({
  src: "./fonts/Vazirmatn-Regular.woff2",
  variable: "--font-vazir-matn",
  weight: "100 900",
});

export const metadata = {
  title: "Maani FastFood",
  description: "Online Food Ordering",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <UserProvider>
    <html lang="fa" dir="rtl">     
      <body
          className={` ${vazirMatn.variable} ${geistSans.variable} ${geistMono.variable} antialiased md:mt-32 mt-20`}
          > <Header />
          {children}
          <Footer />
      </body>
          
      </html>
          </UserProvider>
          </CartProvider>

  );
}
