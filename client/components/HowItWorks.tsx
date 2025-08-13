import { UserPlus, Settings, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign Up & Connect",
    description: "Create your account in under 2 minutes. Connect your existing banking and accounting systems securely.",
    features: ["Instant setup", "Bank integration", "Secure connections", "No technical knowledge required"]
  },
  {
    icon: Settings,
    number: "02", 
    title: "AI Configuration",
    description: "Our AI analyzes your business patterns and automatically configures optimal workflows for your specific needs.",
    features: ["Automated analysis", "Custom workflows", "Smart categorization", "Intelligent insights"]
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Scale",
    description: "Watch as your new AI CFO takes control, handling transactions, generating reports, and optimizing your finances 24/7.",
    features: ["24/7 monitoring", "Automated reporting", "Real-time insights", "Continuous optimization"]
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-[#D4BBA4]">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From setup to full automation in just three simple steps. 
            Get your AI CFO working for you in less than an hour.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-px h-96 bg-gradient-to-b from-[#D4BBA4] via-[#C5A389] to-[#D4BBA4]"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Step Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
                      <div className={`flex items-center gap-4 mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                        <div className="text-sm font-bold text-[#D4BBA4] tracking-wider">
                          STEP {step.number}
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-3">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className={`flex items-center gap-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                            <CheckCircle className="h-5 w-5 text-[#D4BBA4] flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step Icon */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#D4BBA4] to-[#C5A389] rounded-full flex items-center justify-center shadow-2xl">
                      <IconComponent className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#D4BBA4]">
                      <span className="text-sm font-bold text-[#D4BBA4]">{step.number}</span>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already automated their finance operations. 
              Setup takes less than an hour, results are immediate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#D4BBA4] hover:bg-[#C5A389] text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-[#D4BBA4] text-[#D4BBA4] hover:bg-[#D4BBA4] hover:text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
