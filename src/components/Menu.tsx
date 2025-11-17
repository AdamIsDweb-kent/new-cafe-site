import { Card, CardContent } from "@/components/ui/card";
import hotChocolate from "@/assets/hot-chocolate.png";
import lunchOption from "@/assets/lunch-option.jpg";
import pastries from "@/assets/pastries.jpg";

export const Menu = () => {
  const featuredDrinks = [
  {
    name: "Hot Chocolate",
    description: "Rich, smooth, and topped with a swirl of cream — our comforting hot chocolate is perfect for chilly mornings or a sweet afternoon treat.",
    image: hotChocolate,
    tag: "Customer Favorite"
  },
  {
    name: "Lunch Options",
    description: "Freshly prepared lunch options made with quality ingredients — perfect for a quick bite or a relaxed midday break.",
    image: lunchOption,
    tag: "Most Popular"
  },
  {
    name: "Fresh Pastries",
    description: "A selection of buttery croissants, sweet pastries, and handmade treats baked fresh each morning.",
    image: pastries,
    tag: "Baked Fresh"
  }
 ];


  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Specialties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites that keep our customers coming back
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredDrinks.map((drink, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={drink.image} 
                  alt={drink.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-matcha text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {drink.tag}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{drink.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{drink.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Plus reasonably priced toasties, more specialty drinks, and fresh coffee daily!
          </p>
        </div>
      </div>
    </section>
  );
};
