import { userContext } from "@/context/UserContext";
import { useContext } from "react";

const UserInformation = () => {
  const { userMobileNumber, userAddress, userName } = useContext(userContext);
  return (
    <div className="mx-auto p-4 flex flex-col gap-4 border-2 w-[80%] md:w-[40%]">
      <h2 className="mx-auto font-bold">اطلاعات مشتری</h2>
      <h3>نام : {userName}</h3>
      <h3> شماره تماس : {userMobileNumber}</h3>
      <h3> آدرس: {userAddress}.</h3>
    </div>
  );
};

export default UserInformation;
