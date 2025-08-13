import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const banners = [
  {
    id: 1,
    title: "AI-Powered Financial Intelligence",
    subtitle: "Revolutionize your business with intelligent automation",
    description: "Transform complex financial processes into streamlined, automated workflows that deliver precision and speed.",
    background: "bg-gradient-to-r from-[#D4BBA4]/80 to-[#E8DDD4]/80"
  },
  {
    id: 2,
    title: "Eliminate Human Error Forever",
    subtitle: "Zero mistakes, maximum efficiency",
    description: "Our advanced algorithms ensure flawless execution of financial operations, removing costly human errors from your workflow.",
    background: "bg-gradient-to-r from-[#C5A389]/80 to-[#D4BBA4]/80"
  },
  {
    id: 3,
    title: "Scale Without Limits",
    subtitle: "Grow your business at the speed of automation",
    description: "Process thousands of transactions, manage complex portfolios, and handle enterprise-level operations with ease.",
    background: "bg-gradient-to-r from-[#E8DDD4]/80 to-[#F5F1ED]/80"
  }
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background */}
            <div className={`w-full h-full ${banner.background} flex items-center justify-center`}>
              {/* Content */}
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {banner.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-light mb-6 opacity-90">
                  {banner.subtitle}
                </h3>
                <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
                  {banner.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
