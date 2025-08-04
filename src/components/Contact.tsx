'use client'

import { useForm } from "@formspree/react";
import { useRef, useState } from "react";
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
  const [state, handleSubmit] = useForm("xyzpkekk"); // 🔁 Replace with your actual ID
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await handleSubmit(e);

    if (formRef.current && !state.submitting) {
      formRef.current.reset();
      setShowSuccess(true);
    }
  };

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
          {/* Left Side: Contact Info */}
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
                    <p className="text-muted-foreground">+91 7984842152 | +91 96626 26767</p>
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
                    <p className="text-muted-foreground text-sm">Office: Mon–Sat, 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Quote Request Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Request a Quote</CardTitle>
              </CardHeader>

              <CardContent>
                {showSuccess && (
                  <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg mb-6 text-sm font-medium">
                    ✅ Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form className="space-y-4" onSubmit={onSubmit} ref={formRef}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Your Name"
                      required
                    />
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <Input
                    id="service"
                    name="service"
                    placeholder="Service Required"
                    required
                  />

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your facility management needs..."
                    className="min-h-[120px]"
                    required
                  />

                  <Button
                    type="submit"
                    variant="professional"
                    size="lg"
                    className="w-full"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
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
            <a href="tel:+919662626767">
              <Button variant="outline" size="lg">
                Call Emergency Line
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
