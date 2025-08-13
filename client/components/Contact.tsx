import { Mail, Phone, MapPin, Send, Clock, Users } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact" style={{ marginTop: "-5px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's <span style={{ color: "rgba(233, 155, 40, 1)" }}>Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span style={{ color: "rgb(220, 38, 38)" }}>Ready to transform your business</span>? Our team is here to help you get started
            with India's smartest CFO solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have questions, need a demo, or want to discuss how Asimply 
                can transform your business, we're here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D4BBA4]/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#D4BBA4]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-gray-600">contact@asimply.in</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D4BBA4]/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#D4BBA4]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-gray-600">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D4BBA4]/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#D4BBA4]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Visit Us</div>
                  <div className="text-gray-600">Bangalore, India</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D4BBA4]/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[#D4BBA4]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Business Hours</div>
                  <div className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM IST</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-50 rounded-2xl p-6 mt-8">
              <div className="flex items-center space-x-4 mb-4">
                <Users className="h-6 w-6 text-[#D4BBA4]" />
                <div className="font-semibold text-gray-900">Response Time</div>
              </div>
              <div className="text-gray-600">
                We typically respond within <span className="font-semibold text-[#D4BBA4]">2 hours</span> during business hours.
                For urgent matters, call us directly.
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4BBA4] focus:border-transparent transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4BBA4] focus:border-transparent transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4BBA4] focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4BBA4] focus:border-transparent transition-all duration-300"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help?
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4BBA4] focus:border-transparent transition-all duration-300">
                  <option>I want to schedule a demo</option>
                  <option>I have questions about pricing</option>
                  <option>I need technical support</option>
                  <option>I want to become a partner</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4BBA4] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4BBA4] hover:bg-[#C5A389] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
