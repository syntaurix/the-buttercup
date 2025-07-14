
export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="text-brand-accent font-medium text-lg tracking-wider">
              Our story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Here's a glimpse of how Our Journey unfolded
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Founded with a passion for culinary excellence, The Buttercup has been serving 
              exceptional dining experiences for over a decade. Our commitment to fresh, 
              locally-sourced ingredients and innovative cooking techniques has made us a 
              beloved destination for food enthusiasts.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Every dish tells a story of tradition, creativity, and the relentless pursuit 
              of perfection. From our humble beginnings to becoming a cornerstone of fine 
              dining, we continue to evolve while staying true to our roots.
            </p>
            <button className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Restaurant interior"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">BC</span>
                </div>
                <div>
                  <div className="font-bold text-neutral-900">The Buttercup</div>
                  <div className="text-neutral-600 text-sm">Fine Dining</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
