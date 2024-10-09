import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import React from 'react';

const Footer = () => {
  return (
    <footer className="flex m-auto justify-center items-center py-4 px-6 bg-white">
      <div className="flex flex-col items-center">
        <p className="text-gray-600 text-1xl mb-2 font-bold">¡Seguinos en nuestras redes!</p>
        <div className="flex space-x-4 items-center justify-center text-center">
          <a href="https://www.instagram.com" className="bg-black p-1 rounded-xl text-white hover:opacity-75">
          <FaInstagram  size={20}/>
          </a>
          <a href="https://www.facebook.com" className="bg-blue-600 p-1 rounded-xl text-white hover:opacity-75">
          <FaFacebook  size={20}/>
          </a>
          <a href="https://www.twitter.com" className="bg-blue-400 text-white p-1 rounded-xl hover:opacity-75">
          <FaTwitter size={20} />
          </a>
          <a href="https://www.youtube.com" className="bg-red-600 text-white p-1 rounded-xl  hover:opacity-75">
          <FaYoutube  size={20}/>
          </a>
          <a href="https://www.whatsapp.com" className="bg-green-500 text-white p-1 rounded-xl  hover:opacity-75">
            <FaWhatsapp  size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
