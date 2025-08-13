import { useState, useEffect } from "react";
import { SignedOut, SignUpButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, DollarSign, PieChart, BarChart3, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

// Check if Clerk is properly configured
const hasValidClerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY && 
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY !== "pk_test_your_clerk_key_here" && 
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY.startsWith("pk_");

const dashboardMetrics = [
  { label: "Human Jobs", value: "Replaced", icon: Users, growth: "100%", color: "text-red-500" },
  { label: "AI Decisions", value: "24/7", icon: DollarSign, growth: "Non-stop", color: "text-[#D4BBA4]" },
  { label: "Cost Savings", value: "89%", icon: BarChart3, growth: "vs Humans", color: "text-green-500" },
  { label: "Error Rate", value: "0.001%", icon: PieChart, growth: "Perfect", color: "text-blue-500" }
];

export default function Hero() {
  const [currentMetric, setCurrentMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % dashboardMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-16 min-h-screen bg-gray-50" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Text */}
        <div className="text-center mb-16">
          {/* Alert Badge */}
          <div className="inline-flex items-center bg-red-50 border border-red-200 rounded-full px-6 py-2 mb-6">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
            <span className="text-sm font-medium text-red-700">Human CFOs Becoming Obsolete</span>
            <ArrowRight className="ml-2 h-4 w-4 text-red-500" />
          </div>
          
          {/* Main Headline - Shorter and More Innovative */}
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
            Your <span className="font-bold" style={{ color: "rgba(233, 155, 40, 0.59)" }}>AI CFO</span> Works<br />
            While Your Team <span className="line-through text-gray-400" style={{ marginRight: "2px" }}>Sleeps</span> <span className="font-bold" style={{ color: "rgba(233, 155, 40, 1)", padding: "12px 0 0 4px" }}>Gets Replaced</span>
          </h1>

          {/* Subheadline with Fear Factor */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Why pay salaries when AI handles everything?
            <span className="font-semibold text-[#D4BBA4]">
              <span style={{ color: "rgba(48, 28, 39, 0.79)" }}>
                Zero sick days, zero errors, zero emotions.
              </span>
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {hasValidClerkKey ? (
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="text-white px-8 py-4 rounded-lg font-medium shadow-lg"
                    style={{ backgroundColor: "rgba(233, 155, 40, 1)" }}
                  >
                    Replace My Team Now
                  </Button>
                </SignUpButton>
              </SignedOut>
            ) : (
              <Button
                size="lg"
                className="text-white px-8 py-4 rounded-lg font-medium shadow-lg"
                style={{ backgroundColor: "rgba(233, 155, 40, 1)" }}
                onClick={() => alert("Authentication not configured. Add your Clerk publishable key to .env.local to enable sign up.")}
              >
                Replace My Team Now
              </Button>
            )}

            <Link to="https://www.linkedin.com/company/asimply/about/?viewAsMember=true" target="_blank">
             <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-medium"
            >
              Talk With Founders
            </Button>
            </Link>
            
          </div>

          <p className="text-gray-500 text-sm">
            Start firing expensive humans today. <span className="font-semibold">No severance required.</span>
          </p>
        </div>

        {/* AI Replacement Stats */}
        <div className="relative max-w-6xl mx-auto">
          {/* Human vs AI Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {dashboardMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-sm border transition-all duration-500 ${
                    index === currentMetric ? 'border-red-300 shadow-lg scale-105' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`h-5 w-5 ${index === currentMetric ? metric.color : 'text-gray-400'}`} />
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      metric.label === "Human Jobs" ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                    }`}>
                      {metric.growth}
                    </span>
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Dashboard Interface */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-sm text-gray-600">AI CFO Online • Replacing Humans</div>
                </div>
                <div className="text-sm text-gray-500">asimply.ai/takeover</div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side - AI Performance */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Human vs AI Comparison */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Human Elimination Progress</h3>
                      <div className="text-sm text-green-600 font-medium">89% Replaced</div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { role: "CFO", human: "₹25L/yr", ai: "₹2L/yr", savings: "92%" },
                        { role: "Accountant", human: "₹8L/yr", ai: "₹0.5L/yr", savings: "94%" },
                        { role: "Analyst", human: "₹12L/yr", ai: "₹1L/yr", savings: "92%" }
                      ].map((comparison, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                              <Users className="h-4 w-4 text-red-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{comparison.role}</div>
                              <div className="text-sm text-gray-500">Human: {comparison.human} → AI: {comparison.ai}</div>
                            </div>
                          </div>
                          <div className="text-green-600 font-bold">{comparison.savings} saved</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real-time AI Decisions */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Making Human Decisions</h3>
                    <div className="space-y-3">
                      {[
                        { decision: "Approved ₹5L investment", time: "2 seconds", human: "2 weeks" },
                        { decision: "Optimized tax strategy", time: "1 minute", human: "3 days" },
                        { decision: "Detected fraud pattern", time: "Real-time", human: "Never" }
                      ].map((decision, i) => (
                        <div key={i} className="flex items-center justify-between py-2">
                          <div>
                            <div className="font-medium text-gray-900">{decision.decision}</div>
                            <div className="text-sm text-gray-500">AI: {decision.time} vs Human: {decision.human}</div>
                          </div>
                          <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            ✓ AI Won
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Replacement Calendar */}
                <div className="space-y-6">
                  {/* Termination Schedule */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Termination Schedule</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">CFO</span>
                        <span className="text-red-600 font-medium">Replaced ✓</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Accountants (3)</span>
                        <span className="text-red-600 font-medium">This Week</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Analysts (2)</span>
                        <span className="text-yellow-600 font-medium">Next Week</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Interns (5)</span>
                        <span className="text-gray-400">Already Gone</span>
                      </div>
                    </div>
                  </div>

                  {/* Savings Calculator */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Money Saved</h3>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">₹45L</div>
                        <div className="text-sm text-gray-500">Saved This Year</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#D4BBA4]">₹2.1Cr</div>
                        <div className="text-sm text-gray-500">Lifetime Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Warning Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-[#D4BBA4] to-[#C5A389] rounded-full opacity-20 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
