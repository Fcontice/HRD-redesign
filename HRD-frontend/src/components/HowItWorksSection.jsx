function HowItWorksSection() {
  const steps = [
    { icon: '📝', text: 'Sign up and pay the $100 entry fee.' },
    { icon: '⚾', text: 'Select your teams and follow their HR counts.' },
    { icon: '📊', text: 'Track daily updates to see how you rank.' },
    { icon: '🏆', text: 'Top teams at season’s end & monthly periods win payouts!' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-4 text-center">
          {steps.map((step, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-6 flex flex-col items-center">
              <div className="text-4xl mb-2">{step.icon}</div>
              <p className="text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;