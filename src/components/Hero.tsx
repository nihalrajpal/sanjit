import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Facility Management Services in
            <span className="block text-yellow-400">Ahmedabad</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Leading facility management company specializing in comprehensive cleaning and maintenance solutions for businesses and institutions across various sectors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              className="text-primary border-primary hover:bg-primary hover:text-white"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Free Quote
            </Button>
            <Button variant="secondary" size="lg"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}>
              View Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-yellow-400" />
              <span className="text-lg">24/7 Availability</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-yellow-400" />
              <span className="text-lg">99% Satisfaction Rate</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-yellow-400" />
              <span className="text-lg">Fully Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;