import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CFO, TechFlow Industries",
    company: "TechFlow Industries",
    content: "Asimply didn't just automate our processes — it revolutionized our entire business model. We've seen a 300% increase in efficiency and eliminated costly errors completely.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Marcus Rodriguez", 
    role: "CEO, DataStream Corp",
    company: "DataStream Corp",
    content: "I was skeptical about automation until I saw Asimply in action. Now our team focuses on strategy while Asimply handles everything else. It's like having a superhuman workforce.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Jennifer Chen",
    role: "Operations Director, FinanceFlow",
    company: "FinanceFlow",
    content: "The ROI was immediate. Within the first month, Asimply had already saved us more than its annual cost. Now we're scaling faster than ever thought possible.",
    rating: 5,
    avatar: "JC"
  }
];

const stats = [
  {
    number: "500+",
    label: "Businesses Transformed",
    description: "Companies across industries trust Asimply"
  },
  {
    number: "99.9%",
    label: "Uptime Guaranteed",
    description: "Enterprise-grade reliability you can count on"
  },
  {
    number: "$50M+",
    label: "Saved in Costs",
    description: "Total savings generated for our clients"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Expert assistance whenever you need it"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-[#D4BBA4]">Leaders</span> Choose Asimply
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what industry leaders are saying about 
            their transformation with Asimply.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-[#D4BBA4] opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D4BBA4] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-[#D4BBA4] font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators / Stats */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the growing community of forward-thinking businesses that have chosen 
              automation over inefficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#D4BBA4] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#D4BBA4]/10 to-[#C5A389]/10 rounded-3xl p-8 max-w-3xl mx-auto border border-[#D4BBA4]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Success Stories Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              We're onboarding new clients every day. Soon, you'll see testimonials from 
              Fortune 500 companies who've transformed their operations with Asimply.
            </p>
            <div className="text-[#D4BBA4] font-semibold">
              Be among the first to share your success story.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
