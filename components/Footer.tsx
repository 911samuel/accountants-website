import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Send } from "lucide-react";
import asset from "@/public";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Image src={asset.ACR_white} alt="ACR Logo" width={230} height={95} />
          <p className="mt-4 text-sm">
            Leave accounting to us, so you can focus on growing your business.
          </p>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3>Useful links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="#">ACR-Accounting Academy</Link>
            </li>
            <li>
              <Link href="#">Outlook Mail</Link>
            </li>
            <li>
              <Link href="#">Zoho Inventory</Link>
            </li>
            <li>
              <Link href="#">Zoho Books</Link>
            </li>
          </ul>
        </div>

        {/* Office Address */}
        <div>
          <h3>Our office address</h3>
          <p className="mt-4">Gasabo, Kimironko, 2 KG 167 St</p>
          <p>Near Simba Supermarket</p>
          <p>Mobile: +250787028385</p>
          <p>Email: info@accountants.co.rw</p>
          <div className="mt-4">
            <Image
              src={asset.Map}
              alt="Office Location"
              width={150}
              height={100}
            />
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3>Stay up to date</h3>
          <div className="mt-4">
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 px-3 py-2 text-black rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 px-3 py-2 text-black rounded-md focus:outline-none"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-black rounded-md focus:outline-none"
              />
              <Send className="absolute right-2 top-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm">
        <p>© 2025 ACR-ONLINE ACCOUNTING SERVICES LTD. All rights reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="#">Home</Link>
          <Link href="#">News</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
