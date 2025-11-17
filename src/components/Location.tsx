import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Train } from "lucide-react";

export const Location = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Perfect spot to grab a drink before catching your train
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="bg-card shadow-soft border-0">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-matcha-light rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-matcha" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      17 St. Dunstans St, Canterbury CT2 8AF
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-matcha-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Train className="w-6 h-6 text-matcha" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Getting Here</h3>
                    <p className="text-muted-foreground">
                      Just 2 minutes walk from<br />
                      Canterbury West Station
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-matcha-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-matcha" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 7:00 AM - 5:00 PM<br />
                      Sunday: 8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-soft border-0">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-matcha-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-matcha" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +44 1227 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-matcha-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-matcha" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      hello@lecafe-canterbury.co.uk
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-matcha-light rounded-full flex items-center justify-center hover:bg-matcha hover:text-white transition-colors duration-300"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-matcha-light rounded-full flex items-center justify-center hover:bg-matcha hover:text-white transition-colors duration-300"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
