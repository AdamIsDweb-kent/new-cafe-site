import { Heart, Users, Award } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to Le Cafe
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're more than just a cafe - we're your local gathering spot where every cup is crafted with care 
            and every visit feels like coming home. Our passionate baristas are always ready with a smile 
            and the perfect recommendation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-matcha-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-matcha" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Made with Love</h3>
            <p className="text-muted-foreground">
              Every drink is handcrafted with premium ingredients and genuine care
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-matcha-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-matcha" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Community First</h3>
            <p className="text-muted-foreground">
              A welcoming space where neighbors become friends over great coffee
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-matcha-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-matcha" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Quality Focused</h3>
            <p className="text-muted-foreground">
              From specialty matcha to fresh pastries, we never compromise on quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
