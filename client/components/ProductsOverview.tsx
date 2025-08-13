import { ArrowRight, DollarSign, BarChart3, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: DollarSign,
    title: "AsimplyFinance",
    description: "Complete financial automation platform that handles accounting, invoicing, payment processing, and financial reporting with zero human intervention.",
    features: ["Automated bookkeeping", "Real-time reporting", "Payment automation", "Tax compliance"],
    status: "Available Now",
    link: "/products/finance"
  },
  {
    icon: BarChart3,
    title: "AsimplyAnalytics",
    description: "AI-powered business intelligence that transforms raw data into actionable insights, predictive models, and automated decision-making.",
    features: ["Predictive analytics", "Market insights", "Risk assessment", "Performance optimization"],
    status: "Available Now",
    link: "/products/analytics"
  },
  {
    icon: Settings,
    title: "AsimplyWorkflow",
    description: "End-to-end process automation that eliminates manual tasks, optimizes workflows, and scales operations without adding complexity.",
    features: ["Process automation", "Workflow optimization", "Integration hub", "Custom workflows"],
    status: "Available Now",
    link: "/products/workflow"
  },
  {
    icon: Users,
    title: "AsimplyTeam",
    description: "Intelligent resource management that automates scheduling, task allocation, performance tracking, and team optimization.",
    features: ["Smart scheduling", "Resource allocation", "Performance tracking", "Team insights"],
    status: "Coming Soon",
    link: "/products/team"
  }
];

export default function ProductsOverview() {
  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#D4BBA4]">Arsenal</span> of Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete suite of AI-powered tools designed to eliminate inefficiency 
            and drive unprecedented business growth across every operational area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4BBA4] to-[#C5A389] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {product.title}
                      </h3>
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        product.status === "Available Now" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Key Features
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

                <Button 
                  className="w-full bg-[#D4BBA4] hover:bg-[#C5A389] text-white group-hover:shadow-lg transition-all duration-300"
                  disabled={product.status === "Coming Soon"}
                >
                  {product.status === "Coming Soon" ? "Notify Me" : "Learn More"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find What You Need?
            </h3>
            <p className="text-gray-600 mb-6">
              We build custom automation solutions tailored to your specific industry and business requirements.
            </p>
            <Button 
              size="lg"
              className="bg-[#D4BBA4] hover:bg-[#C5A389] text-white px-8 py-4"
            >
              Request Custom Solution
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
