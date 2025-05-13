
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const WaitlistForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [language, setLanguage] = useState("english");
  const [zodiacSign, setZodiacSign] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-krishna-orange to-yellow-500">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex justify-center mb-6">
          <div className="bg-krishna-orange text-white rounded-full w-16 h-16 flex items-center justify-center">
            <span className="text-2xl">🧘</span>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-krishna-brown text-center mb-3">
          Join the Gita Call Waitlist
        </h2>
        
        <p className="text-center text-krishna-text mb-8">
          Be the first to experience spiritual empowerment on autopilot. Enter your mobile
          number below, and we'll send you an early-access invitation.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-krishna-text mb-2">
              Your Name
            </label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-krishna-text mb-2">
              Mobile Number
            </label>
            <div className="flex">
              <Select defaultValue="+91">
                <SelectTrigger className="w-[120px] rounded-r-none">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91 (India)</SelectItem>
                  <SelectItem value="+1">+1 (USA)</SelectItem>
                  <SelectItem value="+44">+44 (UK)</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="phone"
                className="rounded-l-none"
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-krishna-text mb-2">
              Preferred Language
            </label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
                <SelectItem value="telugu">Telugu</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="zodiac" className="block text-sm font-medium text-krishna-text mb-2">
              Your Zodiac Sign (Optional)
            </label>
            <Select value={zodiacSign} onValueChange={setZodiacSign}>
              <SelectTrigger>
                <SelectValue placeholder="Select your zodiac sign" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aries">Aries</SelectItem>
                <SelectItem value="taurus">Taurus</SelectItem>
                <SelectItem value="gemini">Gemini</SelectItem>
                <SelectItem value="cancer">Cancer</SelectItem>
                <SelectItem value="leo">Leo</SelectItem>
                <SelectItem value="virgo">Virgo</SelectItem>
                <SelectItem value="libra">Libra</SelectItem>
                <SelectItem value="scorpio">Scorpio</SelectItem>
                <SelectItem value="sagittarius">Sagittarius</SelectItem>
                <SelectItem value="capricorn">Capricorn</SelectItem>
                <SelectItem value="aquarius">Aquarius</SelectItem>
                <SelectItem value="pisces">Pisces</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-krishna-orange to-yellow-500 hover:from-krishna-orange/90 hover:to-yellow-500/90 text-white text-lg py-6 h-auto rounded-full"
          >
            {isSubmitting ? "Joining..." : "Join the Waitlist"}
          </Button>
        </form>
        
        <p className="text-center text-xs text-krishna-text mt-6">
          By joining, you agree to receive updates about Gitacall. We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  );
};

export default WaitlistForm;
