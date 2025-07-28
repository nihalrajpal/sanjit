import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Hospital, 
  Hotel, 
  Factory, 
  ShoppingCart, 
  GraduationCap, 
  Sparkles, 
  Bug,
  Square,
  Armchair,
  Trees,
  Shield,
  Wrench,
  Coffee,
  Users,
  Banknote,
  ChefHat
} from "lucide-react";

const Services = () => {
  const services = [
    { icon: Building2, title: "Office Cleaning", description: "Professional office cleaning and maintenance services" },
    { icon: Hospital, title: "Hospital Housekeeping", description: "Specialized healthcare facility cleaning with strict hygiene protocols" },
    { icon: Hotel, title: "Hotel Cleaning", description: "Complete hospitality cleaning solutions for hotels and resorts" },
    { icon: Factory, title: "Industrial Cleaning", description: "Heavy-duty industrial cleaning for manufacturing facilities" },
    { icon: ShoppingCart, title: "Mall Cleaning", description: "Comprehensive cleaning services for shopping complexes" },
    { icon: GraduationCap, title: "School Cleaning", description: "Safe and thorough cleaning for educational institutions" },
    { icon: Sparkles, title: "Deep Cleaning", description: "Intensive deep cleaning for complete sanitization" },
    { icon: Bug, title: "Pest Control", description: "Professional pest management and prevention services" },
    { icon: Square, title: "Window Cleaning", description: "Crystal clear window cleaning for all types of buildings" },
    { icon: Armchair, title: "Upholstery Cleaning", description: "Expert cleaning for furniture and upholstered items" },
    { icon: Trees, title: "Landscaping", description: "Complete landscaping and garden maintenance services" },
    { icon: Shield, title: "Security Services", description: "Professional security solutions for your premises" },
    { icon: Wrench, title: "Maintenance", description: "General maintenance and repair services" },
    { icon: Coffee, title: "Pantry Services", description: "Complete pantry management and catering solutions" },
    { icon: Users, title: "Manpower Supply", description: "Skilled workforce solutions for various requirements" },
    { icon: Banknote, title: "Banking Facilities", description: "Specialized cleaning services for financial institutions" },
    { icon: ChefHat, title: "Restaurant Cleaning", description: "Food service establishment cleaning and sanitization" }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a complete range of facility management services tailored to meet the unique needs of different industries and sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-professional transition-smooth cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;