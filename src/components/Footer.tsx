
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-krishna-brown text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-krishna-orange text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
              <span className="text-xl font-bold">G</span>
            </div>
            <span className="text-xl font-bold">Gitacall</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-krishna-orange transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-krishna-orange transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-krishna-orange transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Gitacall. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
