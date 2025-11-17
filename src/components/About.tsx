import { Heart, Users, Award } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to Cafe St Pierre
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A cosy, French-inspired café nestled in the heart of Canterbury, 
            known for its warm atmosphere, artisan pastries, and laid-back charm. 
            Our team takes pride in crafting authentic croissants, quiches, and 
            fresh baguettes using traditional methods that bring a touch of Paris 
            to the city.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Whether you're joining us for breakfast, a relaxed weekend brunch, or 
            a quick coffee break, you'll find a comfortable space both inside and 
            out — including a welcoming, dog-friendly patio. Great food, great 
            coffee, and a friendly environment for locals and visitors alike.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-matcha-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-matcha" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Authentic Flavour
            </h3>
            <p className="text-muted-foreground">
              Classic French pastries and savoury dishes prepared with traditional techniques.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-matcha-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-matcha" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Warm & Welcoming
            </h3>
            <p className="text-muted-foreground">
              A comfortable space for breakfast, brunch, or a peaceful coffee break — dogs included.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-matcha-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-matcha" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Crafted With Care
            </h3>
            <p className="text-muted-foreground">
              High-quality ingredients and a dedicated team focused on delivering memorable food and coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
