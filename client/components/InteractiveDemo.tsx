import { useState } from "react";
import { FileText, Clock, CreditCard, PieChart, Users, Settings } from "lucide-react";

const demoFeatures = [
  {
    id: "invoicing",
    icon: FileText,
    title: "Smart Invoicing",
    description: "AI-powered invoice generation and tracking",
    content: {
      metrics: [
        { label: "Invoices Generated", value: "2,847", change: "+12%" },
        { label: "Average Payment Time", value: "15 days", change: "-3 days" },
        { label: "Collection Rate", value: "94.2%", change: "+2.1%" }
      ],
      chart: "invoicing"
    }
  },
  {
    id: "tracking",
    icon: Clock,
    title: "Time Tracking",
    description: "Automated time tracking across all projects",
    content: {
      metrics: [
        { label: "Hours Tracked", value: "48,392", change: "+8%" },
        { label: "Billable Hours", value: "41,133", change: "+5%" },
        { label: "Team Efficiency", value: "89.3%", change: "+1.2%" }
      ],
      chart: "tracking"
    }
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payment Processing",
    description: "Seamless payment collection and reconciliation",
    content: {
      metrics: [
        { label: "Payments Processed", value: "₹12.4Cr", change: "+18%" },
        { label: "Success Rate", value: "99.2%", change: "+0.3%" },
        { label: "Average Settlement", value: "2.1 days", change: "-0.5 days" }
      ],
      chart: "payments"
    }
  },
  {
    id: "analytics",
    icon: PieChart,
    title: "Financial Analytics",
    description: "Real-time insights and predictive analytics",
    content: {
      metrics: [
        { label: "Revenue Growth", value: "24.7%", change: "+3.2%" },
        { label: "Profit Margin", value: "18.9%", change: "+1.5%" },
        { label: "Cash Flow", value: "Positive", change: "Stable" }
      ],
      chart: "analytics"
    }
  }
];

export default function InteractiveDemo() {
  const [activeFeature, setActiveFeature] = useState(demoFeatures[0]);

  const renderChart = (type: string) => {
    switch (type) {
      case "invoicing":
        return (
          <div className="h-48 flex items-end space-x-2 p-4">
            {[65, 45, 78, 56, 89, 67, 45, 78, 92, 56, 78, 89].map((height, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-[#D4BBA4] to-[#E5D7C7] rounded-t flex-1 transition-all duration-1000"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        );
      case "tracking":
        return (
          <div className="h-48 flex items-center justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
              <div className="absolute inset-0 rounded-full border-8 border-[#D4BBA4] border-t-transparent animate-spin"></div>
              <div className="absolute inset-4 rounded-full bg-[#D4BBA4]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#D4BBA4]">89%</span>
              </div>
            </div>
          </div>
        );
      case "payments":
        return (
          <div className="h-48 p-4">
            <div className="h-full flex flex-col justify-between">
              {[
                { name: "Bank Transfer", value: 45, color: "bg-[#D4BBA4]" },
                { name: "UPI", value: 30, color: "bg-blue-400" },
                { name: "Cards", value: 25, color: "bg-green-400" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-16 text-sm text-gray-600">{item.name}</div>
                  <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{item.value}%</div>
                </div>
              ))}
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="h-48 flex items-center justify-center relative">
            <div className="grid grid-cols-3 gap-4 w-full p-4">
              {[
                { label: "Revenue", value: "₹24.7L", trend: "up" },
                { label: "Expenses", value: "₹18.2L", trend: "down" },
                { label: "Profit", value: "₹6.5L", trend: "up" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#D4BBA4] mb-2">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                  <div className={`text-xs mt-1 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {item.trend === 'up' ? '↗' : '↘'} Trending {item.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            See <span className="font-bold text-[#D4BBA4]">Asimply</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our AI-powered finance platform through interactive demos. 
            Click on any feature to see real-time data and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature Navigation */}
          <div className="space-y-4">
            {demoFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeFeature.id === feature.id
                      ? 'border-[#D4BBA4] bg-[#D4BBA4]/5 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeFeature.id === feature.id
                        ? 'bg-[#D4BBA4] text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Demo Display */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {activeFeature.title}
                  </h3>
                  <p className="text-gray-600">
                    {activeFeature.description}
                  </p>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {activeFeature.content.metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {metric.label}
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">Live Data Visualization</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#D4BBA4] rounded-full"></div>
                      <span className="text-xs text-gray-500">Real-time</span>
                    </div>
                  </div>
                </div>
                {renderChart(activeFeature.content.chart)}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 max-w-4xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience the Full Platform?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo and see how Asimply can transform 
              your agency's financial operations in just 30 minutes.
            </p>
            <button className="bg-[#D4BBA4] hover:bg-[#C5A389] text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
