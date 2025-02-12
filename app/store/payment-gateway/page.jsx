import Image from "next/image";

const PaymentGatewayPage = () => {
  return (
    <div className="text-center ">
      <h1 className="bg-[#E51A21] p-2 w-72 mx-auto text-white">
        این یک درگاه پرداخت واقعی نیست! <br /> یک تصویر است
      </h1>
      <Image
        width={500}
        height={500}
        src="/payment-gateway.jpg"
        alt="payment-gateway"
        className="mx-auto"
      />
    </div>
  );
};

export default PaymentGatewayPage;
