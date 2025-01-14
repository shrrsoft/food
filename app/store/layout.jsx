import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";
import Header from "../components/Header";

const Storelayout = ({ children }) => {
  return (
    <CartProvider>
      <UserProvider>
        <Header />
        {children}
      </UserProvider>
    </CartProvider>
  );
};

export default Storelayout;
