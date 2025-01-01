"use client";
import { createContext, useState, useEffect } from "react";

export const userContext = createContext({
  login: [],
});

export function UserProvider({ children }) {
  // Login
  const [isLogin, setIsLogin] = useState("");
  useEffect(() => {
    const isLoginFromLocalStorage = localStorage.getItem("isLogin");
    if (isLoginFromLocalStorage) {
      setIsLogin(JSON.parse(isLoginFromLocalStorage));
    }
  }, []);
  useEffect(() => {
    if (isLogin !== "") {
      localStorage.setItem("isLogin", JSON.stringify(isLogin));
    }
  }, [isLogin]);

  // user mobile-number
  const [userMobileNumber, setUserMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const userMobileNumberFromLocalStorage =
      localStorage.getItem("mobileNumber");
    if (userMobileNumberFromLocalStorage) {
      setUserMobileNumber(JSON.parse(userMobileNumberFromLocalStorage));
    }
  }, []);
  useEffect(() => {
    if (userMobileNumber !== "") {
      localStorage.setItem("mobileNumber", JSON.stringify(userMobileNumber));
    }
  }, [userMobileNumber]);
  useEffect(() => {
    const passwordFromLocalStorage = localStorage.getItem("password");
    if (passwordFromLocalStorage) {
      setPassword(JSON.parse(passwordFromLocalStorage));
    }
  }, []);
  useEffect(() => {
    if (userMobileNumber !== "") {
      localStorage.setItem("password", JSON.stringify(password));
    }
  }, [password]);

  // user address
  const [userAddress, setUserAdress] = useState("");
  useEffect(() => {
    const userAddressFromLocalStorage = localStorage.getItem("adress");
    if (userAddressFromLocalStorage) {
      setUserAdress(JSON.parse(userAddressFromLocalStorage));
    }
  }, []);
  useEffect(() => {
    if (userAddress !== "") {
      localStorage.setItem("adress", JSON.stringify(userAddress));
    }
  }, [userAddress]);

  // username
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userNameFromLocalStorage = localStorage.getItem("userName");
    if (userNameFromLocalStorage) {
      setUserName(JSON.parse(userNameFromLocalStorage));
    }
  }, []);
  useEffect(() => {
    if (userName !== "") {
      localStorage.setItem("userName", JSON.stringify(userName));
    }
  }, [userName]);

  // context value
  const contextValue = {
    isLogin: isLogin,
    setIsLogin: setIsLogin,
    userMobileNumber: userMobileNumber,
    setUserMobileNumber: setUserMobileNumber,
    userAddress: userAddress,
    setUserAdress: setUserAdress,
    userName: userName,
    setUserName: setUserName,
    password: password,
    setPassword: setPassword,
  };

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
}
// const mobileNumberFromLocal = JSON.parse(
//   localStorage.getItem("userAndPass")
// ).mobileNumber;
