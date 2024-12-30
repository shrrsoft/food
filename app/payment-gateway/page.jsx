import Link from "next/link";

const PaymentGatewayPage = () => {
  return (
    <div className="text-center ">
      <h1 className="mb-4 bg-[#E51A21] p-2 w-72 mx-auto font-bold text-white">
        دموی درگاه پرداخت
      </h1>
      <p className="bg-[#E51A21] p-2 w-72 mx-auto text-white">
        این درگاه پرداخت واقعی نیست! یک تصویر است
      </p>
      <img
        src="/payment-gateway.jpg"
        alt="payment-gateway"
        className="mx-auto"
      />
      <Link
        href="/"
        className="bg-[#264aa6db] text-white p-2 block w-64 mx-auto rounded-md mb-4">
        برگشت به صفحه ی اصلی
      </Link>
    </div>
  );
};

export default PaymentGatewayPage;
