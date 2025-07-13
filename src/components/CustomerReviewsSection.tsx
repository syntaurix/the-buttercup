import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export const CustomerReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "An absolutely extraordinary dining experience. Every dish was a masterpiece, and the attention to detail was impeccable. The Buttercup has redefined fine dining for us.",
      date: "November 2024",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text: "The flavors were incredible and the presentation was artistic. Our server was knowledgeable about wine pairings. This is definitely our new favorite restaurant.",
      date: "October 2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      text: "Celebrated our anniversary here and it was perfect. The ambiance is romantic, the food is exceptional, and the service made us feel truly special.",
      date: "October 2024",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      text: "From appetizer to dessert, everything was flawless. The chef's tasting menu is a journey through exceptional flavors. Highly recommend for special occasions.",
      date: "September 2024",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Jennifer Walsh",
      rating: 5,
      text: "The attention to detail is remarkable. Every element of our meal was thoughtfully prepared and beautifully presented. A truly memorable evening.",
      date: "September 2024",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, reviews.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  const getVisibleReviews = () => {
    const visibleCount = 3; // Show 3 reviews on desktop
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentReview + i) % reviews.length;
      visible.push(reviews[index]);
    }
    
    return visible;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-green-600 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="font-playfair text-5xl md:text-6xl text-gray-800 mb-6 font-normal tracking-wide">
            What Our Customers Say About Us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-light tracking-wide">
            Customer Reviews
          </p>
        </div>

        {/* Reviews Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Desktop View - 3 reviews with enhanced animations */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative group border border-green-100 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transform: index === 1 ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Quote Icon with animation */}
                <Quote className="h-12 w-12 text-green-600 mb-6 group-hover:text-green-700 transition-colors duration-300 group-hover:scale-110 transform" />
                
                {/* Review Text */}
                <p className="text-lg text-gray-700 leading-relaxed font-light mb-6 italic">
                  "{review.text}"
                </p>
                
                {/* Rating with animation */}
                <div className="flex items-center mb-6 space-x-1">
                  {renderStars(review.rating)}
                </div>
                
                {/* Customer Info with enhanced styling */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-green-100 group-hover:border-green-300 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Enhanced single review */}
          <div className="md:hidden">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl relative border border-green-100 transform transition-all duration-500">
              <Quote className="h-12 w-12 text-green-600 mb-6" />
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-6 italic">
                "{reviews[currentReview].text}"
              </p>
              <div className="flex items-center mb-6 space-x-1">
                {renderStars(reviews[currentReview].rating)}
              </div>
              <div className="flex items-center">
                <img
                  src={reviews[currentReview].avatar}
                  alt={reviews[currentReview].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-green-100"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {reviews[currentReview].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentReview
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 scale-125 animate-pulse-glow"
                  : "bg-gray-300 hover:bg-green-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};