import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export const CustomerReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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
        className={`h-4 w-4 ${
          i < rating ? "text-buttercup-medium fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-luxury-8 px-luxury-2 bg-buttercup-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-luxury-6">
          <h2 className="font-playfair text-4xl md:text-5xl text-buttercup-dark mb-luxury-2 font-normal tracking-wide">
            What Our Customers Say About Us
          </h2>
          <p className="font-cormorant text-xl text-charcoal-500 font-light">
            Customer Reviews
          </p>
        </div>

        {/* Reviews Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Desktop View - 3 reviews */}
          <div className="hidden md:grid md:grid-cols-3 gap-luxury-4">
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="bg-white rounded-lg p-luxury-3 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-buttercup-accent mb-4" />
                
                {/* Review Text */}
                <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed font-light mb-luxury-2">
                  "{review.text}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-luxury-2">
                  {renderStars(review.rating)}
                </div>
                
                {/* Customer Info */}
                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-source text-sm font-medium text-buttercup-dark">
                      {review.name}
                    </h4>
                    <p className="font-source text-xs text-charcoal-500">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 review */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg p-luxury-3 shadow-lg relative">
              <Quote className="h-8 w-8 text-buttercup-accent mb-4" />
              <p className="font-cormorant text-lg text-charcoal-500 leading-relaxed font-light mb-luxury-2">
                "{reviews[currentReview].text}"
              </p>
              <div className="flex items-center mb-luxury-2">
                {renderStars(reviews[currentReview].rating)}
              </div>
              <div className="flex items-center">
                <img
                  src={reviews[currentReview].avatar}
                  alt={reviews[currentReview].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-source text-sm font-medium text-buttercup-dark">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="font-source text-xs text-charcoal-500">
                    {reviews[currentReview].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-buttercup-primary hover:bg-buttercup-secondary text-cream-50 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-buttercup-primary hover:bg-buttercup-secondary text-cream-50 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-luxury-4 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview
                  ? "bg-buttercup-secondary scale-125"
                  : "bg-buttercup-medium/50 hover:bg-buttercup-medium/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};