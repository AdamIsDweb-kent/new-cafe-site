import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      text: "Great little gem. Really cozy inside. I've lived in Paris and the quality of the pastries are as good as in France. Flaky and soft croissants, excellent quiches and great coffee. A must stop for a great breakfast or  brunch if you are hanging around Canterbury.",
      author: "Juan Solano"
    },
    {
      text: "Dog friendly! Made us and our dog very welcome. Cute patio. Excellent staff. Delicious pastries and baguettes. French touches everywhere, down to the soap :) Thank you!",
      author: "Sophie"
    },
    {
      text: "A lovely little oasis in St Peter's Street. It is very pleasant to sit in the garden away from the hustle & bustle of the city. There is a varied menu including filled baguettes, croissants and delicious pastries. The croque monsieur & the petit dejeuner are  favourites with us. The staff are always friendly and efficient.",
      author: "Adrienne Smith"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-matcha text-matcha" />
            ))}
          </div>
          <p className="text-lg text-muted-foreground">
            Loved by locals and visitors alike
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-0"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-matcha text-matcha" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
                <p className="text-muted-foreground font-medium">
                  — {review.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
