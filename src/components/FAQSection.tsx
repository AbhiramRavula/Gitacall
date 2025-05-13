
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How does Gitacall work?",
      answer: "Gitacall delivers a personalized verse from the Bhagavad Gita to your phone each morning through a simple phone call. You answer, listen to the wisdom for the day, and start your day with spiritual guidance. We use AI to select verses that match your zodiac sign and preferences."
    },
    {
      question: "How many calls will I receive per month?",
      answer: "Our standard plan includes one call per day (30-31 calls per month). You can customize your schedule to receive calls on specific days of the week if you prefer less frequency."
    },
    {
      question: "What languages are available?",
      answer: "Currently, we offer Gitacall in English, Hindi, and Telugu. We're working on adding more Indian languages based on user demand."
    },
    {
      question: "How is content personalized for my zodiac sign?",
      answer: "Our system analyzes the core teachings of the Bhagavad Gita and maps them to different personality traits and challenges associated with each zodiac sign. This allows us to deliver verses that are more likely to resonate with your daily life experiences."
    },
    {
      question: "When will Gitacall launch?",
      answer: "We're currently in the private beta testing phase. Join our waitlist to be among the first to experience Gitacall when we launch publicly in the coming months."
    }
  ];

  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 bg-[#FFF8F0]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-krishna-brown mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-krishna-text">
            Everything you need to know about Gitacall and how it works.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-krishna-brown font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-krishna-text">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
