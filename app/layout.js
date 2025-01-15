import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Footer from "./components/Footer";
import { UserProvider } from "@/context/UserContext";



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
          <body className={` ${vazirMatn.variable} antialiased`}>
            {children}
            <Footer />
          </body>
        </html>
      </UserProvider>
    </CartProvider>

  );
}
