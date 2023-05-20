import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black text-base-300">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-2 py-24">
        <div>
          <Link to="/">
            <div className="flex items-center">
              <img className="w-16" src={logo} alt="logo" />
              <p className="font-bangers uppercase text-3xl">Toy Paradise</p>
            </div>
          </Link>
          <p className="font-archivo mt-3">
            We believe in the power of play and the wonders it brings to
            childrens lives. As a leading online destination for all things
            toys, we strive to bring joy and inspiration to kids of all ages.
          </p>
        </div>

        <div className="flex flex-col font-archivo">
          <span className="footer-title">Action Figure Toys</span>
          <a className="link link-hover">Marvel Toys</a>
          <a className="link link-hover">Avengers Toys</a>
          <a className="link link-hover">Star Wars Toys</a>
          <a className="link link-hover">Transformers Toys</a>
        </div>
        <div className="flex flex-col font-archivo">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="flex flex-col font-archivo">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div className="flex flex-col font-archivo">
          <span className="footer-title">Social</span>
          <div className="flex items-center gap-2">
            <BsFacebook className="cursor-pointer"></BsFacebook>
            <BsLinkedin className="cursor-pointer"></BsLinkedin>
            <BsTwitter className="cursor-pointer"></BsTwitter>
            <BsWhatsapp className="cursor-pointer"></BsWhatsapp>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <p className="text-center py-5 font-archivo md:text-lg mx-2">
          Copyright © 2023 - All right reserved by Toy Paradise
        </p>
      </div>
    </footer>
  );
};

export default Footer;
