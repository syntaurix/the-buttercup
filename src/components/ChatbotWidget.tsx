
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Clock, MapPin, Utensils, Calendar } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Welcome to The Buttercup! I'm here to help you with menu recommendations, reservations, and any questions about our restaurant. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      quickReplies: ['View Menu', 'Make Reservation', 'Dietary Options', 'Contact Info']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();
      let botResponse = '';
      let quickReplies: string[] = [];

      // Menu and dietary responses
      if (lowerMessage.includes('menu') || lowerMessage.includes('food') || lowerMessage.includes('dish')) {
        botResponse = "Our menu features seasonal farm-to-table cuisine with signature dishes like our Pan-Seared Diver Scallops, Herb-Crusted Rack of Lamb, and Wild Mushroom Risotto. Each dish is crafted using the finest local ingredients. Would you like specific recommendations based on your preferences?";
        quickReplies = ['Appetizers', 'Main Courses', 'Desserts', 'Wine Pairings'];
      }
      else if (lowerMessage.includes('vegan') || lowerMessage.includes('vegetarian')) {
        botResponse = "We offer excellent plant-based options including our Seasonal Vegetable Tasting, Wild Mushroom Risotto (can be made vegan), and rotating seasonal vegetable preparations. Our chef is happy to accommodate vegan preferences with advance notice.";
        quickReplies = ['Vegan Menu', 'Allergen Info', 'Make Reservation'];
      }
      else if (lowerMessage.includes('gluten') || lowerMessage.includes('allergen') || lowerMessage.includes('allergy')) {
        botResponse = "We take dietary restrictions seriously. Many of our dishes can be modified for gluten-free diets, and we maintain detailed allergen information for all menu items. Please inform us of any allergies when making your reservation so our chef can prepare accordingly.";
        quickReplies = ['Gluten-Free Options', 'Allergen Menu', 'Speak to Chef'];
      }
      // Wine and pairings
      else if (lowerMessage.includes('wine') || lowerMessage.includes('pairing') || lowerMessage.includes('drink')) {
        botResponse = "Our sommelier has curated an excellent wine list featuring both local and international selections. For our Lamb, I recommend a bold Cabernet Sauvignon, while our Scallops pair beautifully with a crisp Sauvignon Blanc. Would you like specific pairing suggestions?";
        quickReplies = ['Wine List', 'Cocktails', 'Non-Alcoholic'];
      }
      // Reservations
      else if (lowerMessage.includes('reservation') || lowerMessage.includes('book') || lowerMessage.includes('table')) {
        botResponse = "I'd be happy to help with your reservation! We're open Tuesday-Thursday 5:30-10:00pm and Friday-Saturday 5:30-11:00pm. For reservations, please call (555) 123-4567 or I can connect you with our reservation system.";
        quickReplies = ['Call Restaurant', 'Available Times', 'Group Dining'];
      }
      // Hours and location
      else if (lowerMessage.includes('hours') || lowerMessage.includes('open') || lowerMessage.includes('time')) {
        botResponse = "We're open Tuesday-Thursday from 5:30-10:00pm and Friday-Saturday from 5:30-11:00pm. We're closed Sundays and Mondays to ensure our ingredients are always at peak freshness.";
        quickReplies = ['Make Reservation', 'Location', 'Contact Info'];
      }
      else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('parking')) {
        botResponse = "We're located at 123 Culinary Avenue in the Downtown District. Valet parking is available, and there's also street parking nearby. We're easily accessible by public transportation.";
        quickReplies = ['Directions', 'Parking Info', 'Make Reservation'];
      }
      // Chef and preparation
      else if (lowerMessage.includes('chef') || lowerMessage.includes('preparation') || lowerMessage.includes('ingredient')) {
        botResponse = "Our chef sources ingredients from local farms and artisanal producers, with menus changing seasonally. We use traditional French techniques combined with modern innovation. Each dish is prepared to order using sustainable, farm-to-table practices.";
        quickReplies = ['Seasonal Menu', 'Sourcing Info', 'Chef Specials'];
      }
      // Special events and groups
      else if (lowerMessage.includes('private') || lowerMessage.includes('event') || lowerMessage.includes('group')) {
        botResponse = "We offer private dining rooms perfect for special occasions, corporate events, and celebrations. Our events team can customize menus and provide dedicated service for groups of 8-40 guests.";
        quickReplies = ['Private Dining', 'Event Packages', 'Contact Events'];
      }
      // Nutrition and calories
      else if (lowerMessage.includes('calorie') || lowerMessage.includes('nutrition') || lowerMessage.includes('healthy')) {
        botResponse = "We provide nutritional information for all our dishes upon request. Many of our preparations focus on fresh, wholesome ingredients with lighter preparation methods available. Our Seasonal Vegetable dishes are particularly health-conscious.";
        quickReplies = ['Nutritional Info', 'Light Options', 'Dietary Menu'];
      }
      // Dress code and policies
      else if (lowerMessage.includes('dress') || lowerMessage.includes('attire') || lowerMessage.includes('policy')) {
        botResponse = "We maintain an upscale casual dress code - smart casual attire is perfect. While jackets aren't required, we encourage guests to dress for the sophisticated dining experience we provide.";
        quickReplies = ['Dress Guidelines', 'Restaurant Policies', 'Ambiance Info'];
      }
      // Gift cards and loyalty
      else if (lowerMessage.includes('gift') || lowerMessage.includes('loyalty') || lowerMessage.includes('reward')) {
        botResponse = "We offer gift cards in any denomination, perfect for food lovers! We also have a loyalty program for regular guests with exclusive perks and early access to special events.";
        quickReplies = ['Purchase Gift Card', 'Loyalty Program', 'Special Offers'];
      }
      // Default response
      else {
        botResponse = "I'm here to help with any questions about The Buttercup! I can assist with menu recommendations, reservations, dietary accommodations, or information about our restaurant. What would you like to know?";
        quickReplies = ['View Menu', 'Make Reservation', 'Dietary Options', 'Restaurant Info'];
      }

      setIsTyping(false);
      const newMessage: Message = {
        id: Date.now().toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
        quickReplies
      };
      
      setMessages(prev => [...prev, newMessage]);
    }, 1500);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    handleBotResponse(text);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-brand-primary hover:bg-brand-secondary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            <div className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              !
            </div>
          </button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="bg-white rounded-lg shadow-2xl w-80 sm:w-96 h-96 flex flex-col border border-neutral-200 animate-fade-in">
            {/* Header */}
            <div className="bg-brand-primary text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <Utensils className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg">The Buttercup</h3>
                  <p className="text-xs text-white/80">Restaurant Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-sm ${
                    message.isBot 
                      ? 'bg-white text-neutral-800 border border-neutral-200' 
                      : 'bg-brand-primary text-white'
                  }`}>
                    <p className="text-sm font-inter leading-relaxed">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Quick Replies */}
              {messages.length > 0 && messages[messages.length - 1].quickReplies && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {messages[messages.length - 1].quickReplies!.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-brand-light text-brand-dark px-3 py-1 rounded-full text-xs hover:bg-brand-primary hover:text-white transition-all duration-200 border border-brand-primary/20"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-neutral-800 px-4 py-2 rounded-lg shadow-sm border border-neutral-200 max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-200 bg-white rounded-b-lg">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                  placeholder="Ask about our menu, reservations..."
                  className="flex-1 border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
                <button
                  onClick={() => handleSendMessage(inputText)}
                  disabled={!inputText.trim()}
                  className="bg-brand-primary text-white p-2 rounded-lg hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
