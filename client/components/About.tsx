import { TrendingUp, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Smart Analytics",
    description: "AI-powered insights that predict cash flow, identify trends, and optimize your financial decisions automatically."
  },
  {
    icon: Shield, 
    title: "Bank-Grade Security",
    description: "Enterprise-level security with 256-bit encryption, ensuring your financial data is protected at all times."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of transactions in seconds. Our AI works 24/7 without breaks, holidays, or sick days."
  },
  {
    icon: Users,
    title: "Human + AI Team",
    description: "The perfect blend of AI efficiency and human oversight. Get the best of both worlds for your business."
  }
];

const stats = [
  { number: "10,000+", label: "Businesses Trust Us" },
  { number: "₹500Cr+", label: "Transactions Processed" },
  { number: "99.9%", label: "Accuracy Rate" },
  { number: "24/7", label: "AI Support" }
];

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#D4BBA4]">Asimply</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another fintech company. We're revolutionizing how businesses 
            handle finance with cutting-edge AI technology and human expertise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D4BBA4] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-[#D4BBA4] transition-all duration-500 hover:shadow-lg bg-gray-50 hover:bg-white"
              >
                <div className="w-16 h-16 bg-[#D4BBA4]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4BBA4]/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-[#D4BBA4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#D4BBA4] to-[#C5A389] rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Meet Your New CFO?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses who've already transformed their finance operations. 
              Your competition won't wait – why should you?
            </p>
            <button className="bg-white text-[#D4BBA4] px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
