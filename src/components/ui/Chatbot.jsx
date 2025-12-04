import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, PawPrint } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const faqData = {
    greetings: [
      "Hello! I'm here to help you with any questions about FureverCare. What would you like to know?",
      "Hi there! Welcome to FureverCare. How can I assist you today?",
      "Welcome! I'm your virtual assistant for FureverCare. Feel free to ask me anything!"
    ],
    services: [
      "FureverCare offers comprehensive pet care services including grooming, boarding, daycare, and veterinary consultations. Each service is tailored to your pet's specific needs.",
      "Our services include professional grooming, safe boarding facilities, engaging daycare programs, and access to experienced veterinarians. We prioritize your pet's comfort and well-being."
    ],
    pricing: [
      "Our pricing varies by service and pet size. Grooming starts at $45, boarding at $35/night, and daycare at $25/day. We offer package deals for regular customers. Contact us for a personalized quote!",
      "We have competitive pricing for all our services. Monthly packages are available for frequent visitors. Please call us or visit our pricing page for detailed information."
    ],
    hours: [
      "We're open Monday-Friday 7AM-7PM, Saturday 8AM-6PM, and Sunday 9AM-5PM. Emergency services are available 24/7 for registered clients.",
      "Our regular hours are weekdays 7AM-7PM and weekends 8AM-6PM. We're always here for emergencies!"
    ],
    booking: [
      "You can book appointments through our website, by calling us at (555) 123-4567, or visiting our facility. We recommend booking in advance for peak times.",
      "Booking is easy! Use our online booking system, give us a call, or stop by. New clients get 10% off their first service!"
    ],
    contact: [
      "You can reach us at (555) 123-4567, email us at info@furevercare.com, or visit us at 123 Pet Street, Your City. We're here to help!",
      "Contact us via phone, email, or visit our facility. Our team is ready to assist you with any questions about your pet's care."
    ],
    default: [
      "That's a great question! For more specific information, please call us at (555) 123-4567 or visit our website. Is there anything else I can help you with?",
      "I'd be happy to help you with that! For detailed assistance, please contact our team directly. Can I help with anything else?",
      "Let me connect you with our team for the best answer to that question. Is there something else I can assist you with?"
    ]
  };

  const getResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return faqData.greetings[Math.floor(Math.random() * faqData.greetings.length)];
    } else if (input.includes('service') || input.includes('offer') || input.includes('provide')) {
      return faqData.services[Math.floor(Math.random() * faqData.services.length)];
    } else if (input.includes('price') || input.includes('cost') || input.includes('fee')) {
      return faqData.pricing[Math.floor(Math.random() * faqData.pricing.length)];
    } else if (input.includes('hour') || input.includes('time') || input.includes('open')) {
      return faqData.hours[Math.floor(Math.random() * faqData.hours.length)];
    } else if (input.includes('book') || input.includes('appointment') || input.includes('schedule')) {
      return faqData.booking[Math.floor(Math.random() * faqData.booking.length)];
    } else if (input.includes('contact') || input.includes('call') || input.includes('phone') || input.includes('email')) {
      return faqData.contact[Math.floor(Math.random() * faqData.contact.length)];
    } else {
      return faqData.default[Math.floor(Math.random() * faqData.default.length)];
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { text: getResponse(inputValue), sender: 'bot', timestamp: new Date() };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (!isOpen && messages.length === 0) {
      const welcomeMessage = { 
        text: faqData.greetings[0], 
        sender: 'bot', 
        timestamp: new Date() 
      };
      setMessages([welcomeMessage]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-[#206a9f] hover:bg-[#1a5a8a]' 
            : 'bg-[#ff914d] hover:bg-[#f5803d]'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 h-[500px] bg-white rounded-3xl shadow-elevated border border-gray-100 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#206a9f] to-[#1a5a8a] p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">FureverCare Assistant</h3>
              <p className="text-white/80 text-sm">Always here to help</p>
            </div>
            <button
              onClick={toggleChat}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-[#206a9f] to-[#1a5a8a] text-black'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-black/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#206a9f] focus:ring-2 focus:ring-[#206a9f]/20 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === '' || isTyping}
                className="w-12 h-12 bg-gradient-to-r from-[#ff914d] to-[#f5803d] rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
