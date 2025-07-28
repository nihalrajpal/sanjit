import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/26360127-6fc4-41b1-a918-f8c7f3876cd5.png" 
            alt="Sanjit Facilities Management LLP" 
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-xl font-bold text-primary">Sanjit Facilities Management LLP</h1>
            <p className="text-sm text-muted-foreground">Professional Cleaning & Maintenance</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
          <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          <Button variant="professional" size="sm">Get Quote</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;