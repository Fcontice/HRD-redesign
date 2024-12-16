function HeroSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 md:flex md:items-center md:justify-between">
        {/* Left column: heading and paragraph */}
        <div className="md:w-1/2 md:pr-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-left">
            Derby Sports
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-left">
            The number one place for the best online sports gaming pool challenges ever.
          </p>
          
          <div className="mt-8 text-gray-600 text-left">
            <p>Daily player home run updates | $100 entry fee</p>
            <p>Top 15 teams overall win a payout | Top 5 teams each month win a payout</p>
          </div>
          <br />
          <div className="space-x-4 text-left">
            <a 
              href="/signup" 
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Right column: Empty now, but can hold an illustration or secondary info */}
        <div className="md:w-1/2 md:pl-6 mt-10 md:mt-0 flex justify-center md:justify-end">
          {/* Placeholder for future image/graphic */}
          <div className="w-48 h-48 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
  
  export default HeroSection;
  