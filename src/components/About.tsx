import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Clock, 
  TrendingUp, 
  Shield, 
  Heart
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Experienced Professionals",
      description: "Our team consists of trained and certified cleaning professionals with years of industry experience."
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "We maintain the highest quality standards with regular training and quality control processes."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support for emergency cleaning and maintenance needs."
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Over satisfied clients across Ahmedabad trust us for their facility management needs."
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage and bonded staff for your peace of mind and security."
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "99% client satisfaction rate with personalized service and attention to detail."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Leading Facility Management in Ahmedabad
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a leading facility management company in Ahmedabad, specializing in comprehensive cleaning and maintenance solutions for businesses and institutions across various sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-professional transition-smooth">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-primary rounded-2xl">
            <div className="text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-primary-foreground/90 mb-4">
                Contact us today for a free consultation and customized facility management solution.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-primary-foreground/20 px-3 py-1 rounded-full">Free Consultation</span>
                <span className="bg-primary-foreground/20 px-3 py-1 rounded-full">Custom Solutions</span>
                <span className="bg-primary-foreground/20 px-3 py-1 rounded-full">Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;