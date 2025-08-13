import { Clock, TrendingDown, AlertTriangle, Target } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Slow, Outdated Processes",
    description: "Manual workflows that take hours when they should take minutes. Your competitors are moving faster while you're stuck in the past."
  },
  {
    icon: TrendingDown,
    title: "Human Error Costs",
    description: "Costly mistakes from manual data entry, calculation errors, and miscommunication drain your profits and damage your reputation."
  },
  {
    icon: AlertTriangle,
    title: "Missed Opportunities",
    description: "While you're drowning in paperwork, market opportunities slip away. Your business can't scale when every process requires human intervention."
  },
  {
    icon: Target,
    title: "Inefficient Resource Allocation",
    description: "Your best talent is wasted on repetitive tasks instead of driving innovation and growth. Resources are scattered across disconnected systems."
  }
];

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Business Is <span className="text-[#D4BBA4]">Drowning</span> In Inefficiency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While you're trapped in outdated systems and manual processes, your competitors are 
            automating their way to dominance. Every day you wait is money left on the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stop Bleeding Money on Inefficiency
            </h3>
            <p className="text-gray-600 mb-6">
              Every minute you spend on manual processes is a minute your competitors use to gain market share.
            </p>
            <div className="text-3xl font-bold text-[#D4BBA4]">
              The solution exists. It's called Asimply.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
