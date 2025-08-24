import { Button } from "@/components/ui/button"

export function PremiumHomeCleaning() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Professional Facility Management Services in Ahmedabad
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We are a leading facility management company in Ahmedabad, specializing in comprehensive cleaning and
                maintenance solutions for businesses and institutions across various sectors. With over 10 years of
                experience, we have built a reputation for reliability, professionalism, and exceptional service
                quality.
              </p>

              <p>
                Our team of trained professionals uses modern equipment and eco-friendly solutions to deliver
                outstanding results. We provide comprehensive facility management services tailored to meet the unique
                needs of various industries and sectors across Ahmedabad and Faridabad.
              </p>

              <p className="italic font-medium text-blue-900">
                "To provide world-class facility management services that enhance the operational efficiency and hygiene
                standards of our clients' premises." - Our Mission
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact"><Button className="bg-primary hover:bg-primary-50 text-white px-8 py-3 rounded-lg font-medium">
                Get Free Quote
              </Button></a>
              <a href="tel:+917984842152">
                <Button
                  variant="outline"
                  className="border-primary text-primary bg-transparent 
               hover:bg-primary hover:text-white hover:shadow-lg 
               transition-all duration-300 px-8 py-3 rounded-lg font-medium"
                >
                  Call: +91 79848 42152
                </Button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-cyan-100 to-blue-200 aspect-[4/3] flex items-center justify-center">
              <img src="/uploads/professional-team.png" style={{
                height: "100%",
                width: "100%", // Optional: ensures it fills container
                objectFit: "cover", // use camelCase in JSX
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
