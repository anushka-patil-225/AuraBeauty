import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center flex-wrap">
          {/* Social Icons */}
          <div className="flex gap-2">
            <div className="header_top__icon_wrapper text-gray-600">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper text-gray-600">
              <FaTwitter />
            </div>
            <div className="header_top__icon_wrapper text-gray-600">
              <FaInstagram />
            </div>
            <div className="header_top__icon_wrapper text-gray-600">
              <FaLinkedin />
            </div>
          </div>

          {/* Text and Select Elements */}
          <div className="flex items-center gap-6">
            {/* Free Shipping Text */}
            <div className="text-gray-800 text-sm sm:text-base">
              <b>FREE SHIPPING</b> FOR ORDERS OVER RS. 2000
            </div>

            {/* Select for Language */}
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
            </select>

            {/* Select for Currency */}
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700"
              defaultValue="USD"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
