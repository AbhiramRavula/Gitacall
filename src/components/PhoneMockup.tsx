
import React from "react";
import { Check, X, Phone } from "lucide-react";

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-[320px]">
      <div className="rounded-[40px] bg-[#1e293b] p-2 shadow-xl">
        <div className="rounded-[32px] overflow-hidden bg-white aspect-[9/19] relative">
          <div className="p-4 bg-[#FFF8F0] h-full flex flex-col">
            <div className="text-center pt-6 pb-2">
              <div className="text-sm text-gray-500">7:30 AM</div>
              <div className="text-xl font-semibold text-krishna-brown mt-1">
                Incoming Call
              </div>
              <div className="text-krishna-text">
                Gitacall - Daily Wisdom
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 my-4 shadow-sm flex-1 flex items-center">
              <p className="text-center text-krishna-text italic">
                "Whatever happened happened for the good. Whatever is happening is happening for the good. Whatever will happen, will also happen for the good."
              </p>
            </div>
            
            <div className="flex justify-center space-x-6 py-4">
              <div className="bg-red-500 rounded-full p-4 w-14 h-14 flex items-center justify-center text-white">
                <X size={24} />
              </div>
              <div className="bg-green-500 rounded-full p-4 w-14 h-14 flex items-center justify-center text-white">
                <Phone size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default PhoneMockup;
