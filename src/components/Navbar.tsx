
import React from "react";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center">
        <div className="bg-krishna-orange text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
          <span className="text-xl font-bold">G</span>
        </div>
        <span className="text-krishna-brown text-xl font-bold">Gitacall</span>
      </div>
      <Button className="bg-krishna-orange hover:bg-krishna-orange/90 text-white">
        Join Waitlist
      </Button>
    </nav>
  );
};

export default Navbar;
