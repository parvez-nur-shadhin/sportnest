import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { MdSportsCricket } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black/25 p-4 md:p-10">
      <div className="container mx-auto text-gray-300">
        <div className=" flex justify-between items-center text-center gap-4 flex-col md:flex-row">
          <h1 className="font-(family-name:--font-smooch-sans) text-5xl font-bold flex items-center gap-2 text-white">
            <MdSportsCricket className="text-[#aaf40c]" /> SportNest
          </h1>
          <ul>
            <h1 className="text-xl font-bold">Contact Information</h1>
            <li>
              <p>Email: contact@sportnest.com</p>
            </li>
            <li>
              <p>Phone: +880 17XX-XXXXXX</p>
            </li>
            <li>
              <p>Address: Kaliganj, Dhaka, Bangladesh</p>
            </li>
          </ul>
          <ul>
            <h1 className="text-xl font-bold">Social Links</h1>
            <ul className="flex items-center gap-3">
              <li>
                <a>
                  <CiFacebook size={30} />
                </a>
              </li>
              <li>
                <a>
                  <CiInstagram size={30} />
                </a>
              </li>
              <li>
                <a>
                  <CiTwitter size={30} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <p className="text-center text-md text-gray-300 mt-5">© 2026 SportNest. All rights reserved. Designed & Developed by Parvez Nur Shadhin</p>
    </div>
  );
};

export default Footer;
