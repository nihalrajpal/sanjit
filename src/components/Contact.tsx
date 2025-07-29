import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your facility management? Contact us today for a free consultation and personalized quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">A-301 Unicus Shyamal, Opp. Iconic Shyamal, Shyamal Cross Road, Ahmedabad</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 76004 59483 | +91 96626 26767</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">sanjitfacilitiesmanagementllp@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Hours</h4>
                    <p className="text-muted-foreground">24/7 Emergency Support Available</p>
                    <p className="text-muted-foreground text-sm">Office: Mon-Sat 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Company Name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Email Address" type="email" />
                    <Input placeholder="Phone Number" type="tel" />
                  </div>
                  <Input placeholder="Service Required" />
                  <Textarea 
                    placeholder="Tell us about your facility management needs..."
                    className="min-h-[120px]"
                  />
                  <Button variant="professional" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">Emergency Services Available</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We understand that facility emergencies can happen at any time. That's why we offer 24/7 emergency response services to ensure your business operations are never disrupted.
            </p>
            <Button variant="outline" size="lg">
              Call Emergency Line
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;