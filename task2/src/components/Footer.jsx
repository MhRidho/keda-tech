import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-800 pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium lg:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">Keda Tech</h2>
              <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
              <p>keda@gmail.com</p>
              <p>Jl. Jakarta No. 23</p>
              <p>Indonesia</p>
            </div>
            <div className="w-full px-4 mb-12 lg:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">
                Category Letter
              </h3>
              <ul className="text-slate-300">
                <li>
                  <Link
                    to={"/"}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Programming
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Life Style
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 lg:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Link</h3>
              <ul className="text-slate-300">
                <li>
                  <Link
                    to={"/"}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5 gap-2">
              <Link
                to={"/"}
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white"
              >
                <FiYoutube title="Youtube" className="text-white text-xl" />
              </Link>
              <Link
                to={"/"}
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white"
              >
                <FiInstagram title="Instagram" className="text-white text-xl" />
              </Link>
              <Link
                to={"/"}
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white"
              >
                <FiFacebook title="Facebook" className="text-white text-xl" />
              </Link>
              <Link
                to={"/"}
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white"
              >
                <FiLinkedin title="LinkedIn" className="text-white text-xl" />
              </Link>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Created by <span className="text-green-500">✔</span> :{" "}
              <Link to={"/"} target="_blank" className="font-bold text-primary">
                Muhammad Ridho
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
