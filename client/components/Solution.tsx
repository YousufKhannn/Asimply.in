import { Zap, Brain, TrendingUp, Shield } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Lightning-Fast Automation",
    description: "Replace hours of manual work with seconds of automated precision. Our AI processes transactions, analyzes data, and executes decisions faster than any human team.",
    highlight: "99.9% faster processing"
  },
  {
    icon: Brain,
    title: "AI-Driven Intelligence",
    description: "Advanced machine learning algorithms that learn from your business patterns, predict market trends, and make intelligent decisions in real-time.",
    highlight: "Predictive accuracy: 94%"
  },
  {
    icon: TrendingUp,
    title: "Unlimited Scalability",
    description: "Handle 10 transactions or 10 million with the same efficiency. Our infrastructure scales instantly to match your business growth without adding complexity.",
    highlight: "Scale to infinity"
  },
  {
    icon: Shield,
    title: "Zero-Error Execution",
    description: "Eliminate human mistakes forever. Our systems are designed for flawless execution, ensuring every process runs exactly as intended, every time.",
    highlight: "100% accuracy guaranteed"
  }
];

export default function Solution() {
  return (
    <section className="py-20 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-[#D4BBA4]">Asimply</span> Replaces Chaos With <span className="text-[#D4BBA4]">Control</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just automate your processes — we revolutionize them. 
            Turn your biggest operational weaknesses into your strongest competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#D4BBA4]/30">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#D4BBA4] to-[#C5A389] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {solution.title}
                        </h3>
                        <span className="bg-[#D4BBA4]/10 text-[#D4BBA4] px-3 py-1 rounded-full text-sm font-semibold">
                          {solution.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#D4BBA4] to-[#C5A389] rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Your Industry?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the automation revolution. While your competitors struggle with outdated processes, 
              you'll be setting new industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#D4BBA4] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
                See It In Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
