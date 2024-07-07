import React from "react";
import { FacebookIcon, WhatsappIcon, TwitterIcon } from "react-share";
const Footer = () => {
  return (
    <footer className="flex mt-8 items-center py-8 h-[300px] mt-auto bg-gray-400">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-8 items-center">
        <div className="mb-4 lg:mb-0">
          <p className="text-base mb-2">Contact us:</p>
          <p className="text-base mb-1">Mobile: +1 123-456-7890</p>
          <p className="text-base">Email: contact@footballboots.com</p>
        </div>

        <div className="mb-4 lg:mb-0">
          <p className="text-base mb-2">License information:</p>
          <p className="text-base">
            © 2024 Football Boots. All rights reserved.
          </p>
        </div>
        <di className="mb-4 ">
          <div className="flex gap-4">
            <FacebookIcon size={32} />
            <WhatsappIcon size={32} />
            <TwitterIcon size={32} />
          </div>
          <p className="text-sm">Follow us on social media</p>
        </di>
      </div>
    </footer>
  );
};

export default Footer;
