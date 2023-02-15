import React from "react";
import logo from "../assets/logodrive.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <div className="bg-primary pt-10 scroll-mt-[10vh]">
        <div className="grid gap-y-12 lg:gap-y-0 grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 w-10/12 mx-auto pb-10">
          <div className="lg:col-span-2 lg:row-span-2">
            <img src={logo} alt="logo" className="w-3/4 h-3/4" />
            <h1 className="text-3xl font-bold text-secondary tracking-wider">
              DRIVE & GO AUTO
            </h1>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-secondary pl-1">
              SOCIAL
            </h2>
            <hr className=" border-secondary border-t w-2/3" />
            <div className="flex flex-col space-y-3 pt-5">
              <a href="https://facebook.com/">
                <div className="text-gray-400 hover:text-secondary flex items-center space-x-2">
                  <FacebookIcon />
                  <p className="font-light">Facebook</p>
                </div>
              </a>
              <a href="https://facebook.com/">
                <div className="text-gray-400 hover:text-secondary flex items-center space-x-2">
                  <InstagramIcon />
                  <p className="font-light">Instagram</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-secondary pl-1">
              CONTACT
            </h2>
            <hr className=" border-secondary border-t w-2/3" />
            <div className="flex flex-col space-y-3 pt-5">
              <div className="text-gray-400 hover:text-secondary flex items-center space-x-2">
                <CallIcon />
                <p className="font-light">+40777 777 777</p>
              </div>
              <div className="text-gray-400 hover:text-secondary flex items-center space-x-2">
                <EmailIcon />
                <p className="font-light">office@example.com</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="font-semibold text-2xl text-secondary pl-1">
              LOCATIE
            </h2>
            <hr className=" border-secondary border-t w-2/3" />
            <div className="pt-5 flex flex-col space-y-2 lg:flex-row lg:space-x-2">
              <div className="w-2/3 lg:w-2/6 h-fit">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45639.44420919009!2d26.011979128110628!3d44.36203510032187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae0057772f8eab%3A0xcf97fc34a94513ad!2zTcSDZ3VyZWxl!5e0!3m2!1sen!2sro!4v1674152675268!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="location"
                />
              </div>
              <div className="text-gray-400 hover:text-secondary flex items-center space-x-2">
                <RoomIcon />
                <div>
                  <p className="font-light">Str. Eroilor, nr. 12</p>
                  <p className="font-light">Magurele, Ilfov</p>
                  <p className="font-light">Romania, 182340</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full border-t border-secondary" />
        <div className="flex justify-between p-2">
          <p className="text-forth text-sm">
            Designed and developed by{" "}
            <a className="text-secondary" href="https://instagram.com/_lucajz">
              _lucajz
            </a>
          </p>
          <p className="text-forth text-sm">
            Copyright &copy; {year}. All rights reserved
          </p>
          <p className="text-forth text-sm">
            SC XXXXXX XXXXXX SRL JXX/XXXX/XXXX CUI ROXXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
