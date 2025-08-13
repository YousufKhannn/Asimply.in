import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {description}
            </p>
            <div className="bg-[#D4BBA4]/10 rounded-2xl p-6 mb-8">
              <p className="text-[#D4BBA4] font-semibold mb-4">
                This page is coming soon!
              </p>
              <p className="text-gray-600">
                We're working hard to bring you this feature. In the meantime, 
                explore our main platform or contact us for more information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-[#D4BBA4] hover:bg-[#C5A389] text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Button variant="outline" className="border-[#D4BBA4] text-[#D4BBA4] hover:bg-[#D4BBA4] hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
