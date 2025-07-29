import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/uploads/26360127-6fc4-41b1-a918-f8c7f3876cd5.png" 
                alt="Sanjit Facilities Management LLP" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Sanjit Facilities Management LLP</h3>
                <p className="text-primary-foreground/80 text-sm">Professional Facility Management</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-4">
              Leading facility management company in Ahmedabad, providing comprehensive cleaning and maintenance solutions for businesses across various sectors.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Office Cleaning</li>
              <li>Hospital Housekeeping</li>
              <li>Industrial Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Pest Control</li>
              <li>Security Services</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>A-301 Unicus Shyamal, Opp. Iconic Shyamal, Shyamal Cross Road, Ahmedabad</p>
              <p>Phone: +91 76004 59483 | +91 96626 26767</p>
              <p>Email: sanjitfacilitiesmanagementllp@gmail.com</p>
              <p className="text-yellow-400 font-medium">24/7 Emergency Support</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2025 Sanjit Facilities Management LLP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;