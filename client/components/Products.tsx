import { Brain, FileText, Calculator, Users, ArrowRight, Zap } from "lucide-react";

const products = [
  {
    id: "ai-finance",
    icon: Brain,
    name: "AI Finance",
    title: "Asimply AI Finance",
    description: "Automates financial planning, analysis, and decision-making with real-time AI insights.",
    features: ["Real-time financial analysis", "Predictive cash flow", "Automated reporting", "Risk assessment"],
    replaces: "CFO + Financial Analysts",
    savings: "₹25L+ per year",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "ai-legal", 
    icon: FileText,
    name: "AI Legal",
    title: "Asimply AI Legal",
    description: "Simplifies complex legal documents, compliance tracking, and contract management with AI.",
    features: ["Contract analysis", "Compliance monitoring", "Legal document generation", "Risk detection"],
    replaces: "Legal Team + Compliance Officers",
    savings: "₹18L+ per year",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "ai-tax",
    icon: Calculator,
    name: "AI Tax", 
    title: "Asimply AI Tax",
    description: "Handles tax filing, GST, and compliance reporting with intelligent automation.",
    features: ["Automated tax filing", "GST compliance", "Tax optimization", "Audit preparation"],
    replaces: "Tax Consultants + Accountants",
    savings: "₹12L+ per year",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: "ai-team",
    icon: Users,
    name: "AI Team",
    title: "Asimply AI Team", 
    description: "AI-powered workforce management, productivity tracking, and collaboration tools.",
    features: ["Performance analytics", "Resource optimization", "Productivity tracking", "Team insights"],
    replaces: "HR Managers + Operations",
    savings: "₹15L+ per year",
    color: "from-orange-500 to-red-600"
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Meet Your <span className="font-bold" style={{ color: "rgba(233, 155, 40, 1)" }}>Replacement</span> Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four AI employees that never sleep, never quit, and never ask for raises. 
            <span className="font-semibold text-red-600"> Your human team won't see it coming.</span>
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#D4BBA4]"
              >
                {/* Product Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} style={index === 0 ? { backgroundColor: "rgba(0, 0, 0, 1)" } : {}}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {product.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-gray-600">Actively Replacing Humans</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#D4BBA4] rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Human Replacement Info */}
                <div className="bg-white rounded-xl p-4 mb-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Replaces:</span>
                    <span className="text-sm text-red-600 font-semibold">{product.replaces}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Saves:</span>
                    <span className="text-sm text-green-600 font-bold">{product.savings}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-[#D4BBA4] hover:bg-[#C5A389] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Fire Humans, Hire AI</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center" style={{ marginBottom: "-1px" }}>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12 max-w-4xl mx-auto border border-red-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Human Workforce Replacement
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get all four AI employees for the cost of one human intern. 
              <span className="font-semibold text-red-600"> Start laying off your expensive human team today.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Replace All Humans Now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                Calculate Savings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
