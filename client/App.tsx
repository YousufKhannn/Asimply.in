import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if we have a valid Clerk key (not the placeholder)
const hasValidClerkKey = publishableKey && publishableKey !== "pk_test_your_clerk_key_here" && publishableKey.startsWith("pk_");

if (!hasValidClerkKey) {
  console.warn("Missing or invalid Clerk publishable key. Authentication features will not work. Add your key to .env.local");
}

const AppContent = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Product Pages */}
          <Route path="/products/finance" element={<PlaceholderPage title="AsimplyFinance" description="Complete financial automation platform coming soon." />} />
          <Route path="/products/analytics" element={<PlaceholderPage title="AsimplyAnalytics" description="AI-powered business intelligence coming soon." />} />
          <Route path="/products/workflow" element={<PlaceholderPage title="AsimplyWorkflow" description="End-to-end process automation coming soon." />} />
          <Route path="/products/team" element={<PlaceholderPage title="AsimplyTeam" description="Intelligent resource management coming soon." />} />

          {/* Solution Pages */}
          <Route path="/solutions/finance" element={<PlaceholderPage title="Financial Automation" description="Streamline your financial operations with AI." />} />
          <Route path="/solutions/processes" element={<PlaceholderPage title="Process Optimization" description="Optimize workflows for maximum efficiency." />} />
          <Route path="/solutions/ai" element={<PlaceholderPage title="AI Integration" description="Integrate artificial intelligence into your business." />} />
          <Route path="/solutions/custom" element={<PlaceholderPage title="Custom Solutions" description="Tailored automation solutions for your needs." />} />

          {/* Company Pages */}
          <Route path="/about" element={<PlaceholderPage title="About Asimply" description="Learn more about our mission and vision." />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" description="Join our team of automation experts." />} />
          <Route path="/press" element={<PlaceholderPage title="Press" description="Latest news and press releases." />} />
          <Route path="/partners" element={<PlaceholderPage title="Partners" description="Our strategic partnership program." />} />

          {/* Support Pages */}
          <Route path="/docs" element={<PlaceholderPage title="Documentation" description="Comprehensive guides and documentation." />} />
          <Route path="/api" element={<PlaceholderPage title="API Reference" description="Developer resources and API documentation." />} />
          <Route path="/help" element={<PlaceholderPage title="Help Center" description="Get support and find answers." />} />
          <Route path="/support" element={<PlaceholderPage title="Contact Support" description="Reach out to our support team." />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => {
  if (hasValidClerkKey) {
    return (
      <ClerkProvider publishableKey={publishableKey} afterSignOutUrl="/">
        <AppContent />
      </ClerkProvider>
    );
  }

  return <AppContent />;
};

createRoot(document.getElementById("root")!).render(<App />);
