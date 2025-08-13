import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

// Check if Clerk is properly configured
const hasValidClerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY && 
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY !== "pk_test_your_clerk_key_here" && 
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY.startsWith("pk_");

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: "AI Finance", description: "Automates financial planning & analysis", href: "#ai-finance" },
    { name: "AI Legal", description: "Simplifies legal documents & compliance", href: "#ai-legal" },
    { name: "AI Tax", description: "Handles tax filing & GST compliance", href: "#ai-tax" },
    { name: "AI Team", description: "Workforce management & productivity", href: "#ai-team" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Fcbeb3833635a46d59dd6b9e783d4efbf%2Fbe2c9034ff9242ffa0ad46bb52ee1a5c?format=webp&width=800" 
              alt="Asimply" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={{ color: "rgba(48, 28, 39, 1)" }}>
            <a href="#home" className="text-gray-700 hover:text-[#D4BBA4] transition-colors font-medium">
              Home
            </a>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="flex items-center text-gray-700 hover:text-[#D4BBA4] transition-colors font-medium"
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isProductsOpen && (
                <div
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-lg border border-gray-200 p-4"
                >
                  <div className="space-y-3">
                    {products.map((product, index) => (
                      <a
                        key={index}
                        href={product.href}
                        className="block p-3 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-semibold text-gray-900">Asimply {product.name}</div>
                        <div className="text-sm text-gray-600">{product.description}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* <a href=".About" className="text-gray-700 hover:text-[#D4BBA4] transition-colors font-medium">
              About 
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#D4BBA4] transition-colors font-medium">
              How it works
            </a> */}
            <a href="#contact" className="text-gray-700 hover:text-[#D4BBA4] transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Auth Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {hasValidClerkKey ? (
              <>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button 
                      variant="outline" 
                      className="hidden sm:flex border-[] text-[#000] hover:bg-[#E99B28] hover:text-white"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                      },
                    }}
                  />
                </SignedIn>
              </>
            ) : (
              <Button 
                variant="outline" 
                className="hidden sm:flex border-[] text-[#000] hover:bg-[#E99B28] hover:text-white"
                onClick={() => alert("Authentication not configured. Add your Clerk publishable key to .env.local")}
              >
                Sign In
              </Button>
            )}
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-[#D4BBA4] transition-colors font-medium">
                Home
              </a>
              <div>
                <div className="text-gray-700 font-medium mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  {products.map((product, index) => (
                    <a
                      key={index}
                      href={product.href}
                      className="block text-sm text-gray-600 hover:text-[#D4BBA4]"
                    >
                      Asimply {product.name}
                    </a>
                  ))}
                </div>
              </div>
              {/* <a href="#about" className="text-gray-700 hover:text-[#D4BBA4] transition-colors font-medium">
                About
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-[#D4BBA4] transition-colors font-medium">
                How it works
              </a> */}
              <a href="#contact" className="text-gray-700 hover:text-[#D4BBA4] transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
