import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fcbeb3833635a46d59dd6b9e783d4efbf%2Fbe2c9034ff9242ffa0ad46bb52ee1a5c?format=webp&width=800" 
                alt="Asimply" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-black text-lg mb-6 max-w-md">
              India's First Smartest CFO - Transforming finance with AI-powered automation 
              for 10,000+ businesses across the country.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#D4BBA4]" />
                <span className="text-black">contact@asimply.in</span>
              </div>
              <div className="text-black">
                <span className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-black hover:text-[#D4BBA4] transition-colors">
                  Home
                </a>
              </li>
              {/* <li>
                <a href="#about" className="text-gray-300 hover:text-[#D4BBA4] transition-colors">
                  About
                </a>
              </li> */}
              {/* <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-[#D4BBA4] transition-colors">
                  How it works
                </a>
              </li> */}
              <li>
                <a href="#contact" className="text-black hover:text-[#D4BBA4] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-black hover:text-[#D4BBA4] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#D4BBA4] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#D4BBA4] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-[#D4BBA4] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-black mb-2">
                Stay Updated
              </h3>
              <p className="text-black">
                Get the latest updates about AI finance automation and industry insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4BBA4] transition-all duration-300"
              />
              <button className="bg-[#E99B28] hover:bg-[#C5A389] text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-black text-sm mb-4 md:mb-0">
            © 2024 Asimply. All rights reserved. Made with ❤️ in India.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-black hover:text-[#D4BBA4] transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-black hover:text-[#D4BBA4] transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-black hover:text-[#D4BBA4] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
