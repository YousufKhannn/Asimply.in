import { Zap, Brain, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Process thousands of transactions in seconds, not hours. Our AI works 24/7 without breaks."
  },
  {
    icon: Brain,
    title: "AI Intelligence", 
    description: "Advanced algorithms that learn and adapt to your business patterns for optimal performance."
  },
  {
    icon: Shield,
    title: "Zero Errors",
    description: "Eliminate human mistakes with 100% accuracy in every financial operation and calculation."
  },
  {
    icon: TrendingUp,
    title: "Infinite Scale",
    description: "From 10 to 10 million transactions - our infrastructure scales instantly with your growth."
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            <span className="text-[#D4BBA4]">Pure</span> Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Four pillars of operational excellence that transform chaos into control
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-[#D4BBA4]/30 transition-all duration-500 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mx-auto w-16 h-16 mb-6 bg-[#D4BBA4]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#D4BBA4]/20 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-[#D4BBA4]" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
