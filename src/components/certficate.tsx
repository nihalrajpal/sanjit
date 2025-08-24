// components/Certificate.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Certificate() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Certificate of Appreciation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/uploads/certificate.jpg" // ✅ goes in public/images/
              alt="Certificate of Appreciation - Shyamal Iconic Commercial"
              className="mx-auto rounded-lg border shadow-md max-w-full h-auto"
            />
            <p className="mt-6 text-gray-700">
              This certificate recognizes{" "}
              <strong>Shyamal Iconic Commercial</strong>, maintained by{" "}
              <strong>Sanjit Professional Facility Management Services</strong>,
              for their contribution in{" "}
              <span className="font-semibold">
                Swachh Survekshan 2024 – Ahmedabad, India’s Cleanest City.
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
