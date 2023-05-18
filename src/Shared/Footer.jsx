import { Link } from "react-router-dom";
import logo from "/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-300 mt-24">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 py-8">
        <Link to="/">
          <div className="flex items-center">
            <img className="w-16" src={logo} alt="logo" />
            <p className="font-bangers uppercase text-3xl">Toy Paradise</p>
          </div>
        </Link>

        <div className="flex flex-col">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div className="">
         
        </div>
      </div>
      <div className="border-t border-black">
        <p className="text-center py-5 font-archivo text-lg font-medium">
          Copyright © 2023 - All right reserved by ACME Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
