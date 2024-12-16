function ParticipationSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:flex md:items-center md:justify-between">
        {/* Left: Card with text and CTA */}
        <div className="bg-white shadow-md rounded p-8 md:w-3/5 md:mr-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
            Join a Growing Community
          </h2>
          <p className="text-gray-700 mb-6 text-left">
            Over 500 participants and counting! Get in on the action and see where you stand each day.
          </p>
          <div className="text-left">
            <a href="/signup" className="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParticipationSection;
