import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../asset/logo.svg";
import { navLink } from "../data/dummy";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return (
    <div
      className={`${
        isScroll ? "bg-[#FFD2CC] h-[60px] lg:-top-[60px]" : " h-[80px]"
      } lg:px-[72px] px-5 w-full z-[10] fixed transition-all duration-300 ease-in-out flex justify-between items-center`}
    >
      <div className="w-14">
        <img
          src="https://media.cakeresume.com/image/upload/s--GwTGWRC8--/c_pad,fl_png8,h_400,w_400/v1669344934/ulutbewzlkzorhbghn2d.png"
          alt="logo-altech"
          className="w-full h-full object-contain"
        />
      </div>
      <ul className="hidden md:block">
        <li className="flex gap-5">
          {navLink.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.id}
                className={`${
                  isScroll ? "text-[14px]" : "text-[18px]"
                }  hover:text-[#6C63FF] transition duration-300 ease-in-out hover:cursor-pointer`}
              >
                {item.name}
              </Link>
            );
          })}
        </li>
      </ul>
      <div className="flex items-center gap-x-3">
        <button
          onClick={() => navigate("/login")}
          className="bg-white py-1 px-12 rounded-md border-blue-500 border-2 text-blue-500"
        >
          Login
        </button>
        <FiMenu
          size={24}
          className="block md:hidden"
          onClick={() => setNav((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          nav ? "right-0" : "-right-full"
        } w-full md:w-[50%]  bg-white h-screen absolute  top-0 p-10 block md:hidden`}
      >
        <AiOutlineClose
          className="text-2xl mb-3"
          onClick={() => setNav((prev) => !prev)}
        />
        <ul>
          <li className="flex flex-col  gap-5">
            {navLink.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  className="text-[18px] py-2 hover:text-orange transition duration-300 ease-in-out border-b-2 z-[20]"
                >
                  {item.name}
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
