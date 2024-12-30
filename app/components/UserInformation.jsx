const UserInformation = () => {
  return (
    <div className="mx-auto p-4 flex flex-col gap-4 border-2 w-[80%] md:w-[40%]">
      <h2 className="mx-auto font-bold">اطلاعات مشتری</h2>
      <h3>نام : نام و نام خانوادگی کاربر</h3>
      <h3> شماره تماس : شماره موبایل کاربر</h3>
      <h3> آدرس: آدرس کاربر که هنگام ثبت نام وارد کرده است.</h3>
    </div>
  );
};

export default UserInformation;
