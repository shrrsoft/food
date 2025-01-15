import Header from "../components/Header";

const Storelayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Storelayout;
