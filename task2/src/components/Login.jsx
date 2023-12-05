import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "antd";
import { FiEye, FiEyeOff } from "react-icons/fi";
import BgLogin from "../asset/login.jpg";
// import Outlook from '../assets/img/outlook-logo.svg'

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eye, setEye] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/home");
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover"
          src={BgLogin}
          alt="login-img"
        />
      </div>
      <div className="flex flex-col justify-center">
        <form className="px-10 xl:px-32 w-full">
          <h2 className="text-2xl font-bold py-10">Masuk</h2>
          <div>
            <span className="font-semibold text-slate-800">Email</span>
            <input
              type="text"
              placeholder="Email"
              className="text-sm w-full pr-10 py-2 border-b-2 mb-1 focus:outline-none"
            />
          </div>
          <div className="mt-5">
            <span className="font-semibold text-slate-800">Password</span>
            <div className="flex items-center border-b-2">
              <input
                type={eye ? "password" : "text"}
                placeholder="Password"
                className="text-sm pr-10 py-2 focus:outline-none w-full"
              />
              <span onClick={() => setEye(!eye)} className="text-slate-500">
                {eye ? (
                  <FiEye className="cursor-pointer" />
                ) : (
                  <FiEyeOff className="cursor-pointer" />
                )}
              </span>
            </div>
          </div>

          <div className="flex justify-end">
            <Modal
              title="Reset Password"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p className="mb-2">Email</p>
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2 border"
              />
              <p className="text-red-600 text-xs mt-2">
                * Silahkan Masukan Email anda Untuk Mereset Password
              </p>
            </Modal>
            <span
              onClick={showModal}
              className="text-center pt-5 text-sm cursor-pointer underline"
            >
              Lupa password?
            </span>
          </div>
          <div className="text-center">
            <Link to={"/"} className="flex justify-center my-3">
              <button className="top-40 w-full right-56 bg-slate-800 hover:bg-slate-700 text-white px-12 py-3 rounded-md font-semibold">
                Masuk
              </button>
            </Link>
            <span className="text-xs">ATAU</span>
            <Link to={"/"} className="flex justify-center border mt-3">
              <button className="w-full text-slate-800 px-12 rounded-md font-semibold flex justify-center">
                <img
                  className="w-16"
                  src="https://asset.kompas.com/crops/CLjiHFPPa5GJihSrpTWbwNni99M=/167x0:1067x600/750x500/data/photo/2022/06/29/62bba4c09354f.png"
                  alt="google"
                />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
