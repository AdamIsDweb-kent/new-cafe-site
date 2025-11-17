import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      text: "Lovely coffee shop, perfect spot to stop off before you get your train or when you get into Canterbury. The coffee was amazing and I was so impressed with their sandwich options!!! They gave my little sister a free babyccino which was so nice. Very clean and lovely staff.",
      author: "Julia Weiss"
    },
    {
      text: "Beautiful cafe, lovely vibe, barista welcomes you with lovely energy and she recommended me a pistachio latte! It was so good - must try!",
      author: "Naveen HB"
    },
    {
      text: "Lovely cafe that’s only round the corner from Canterbury West Train Station. Perfect to grab a drink or a bite from just before catching the train. I initially ordered an iced vanilla matcha but the barista recommended the iced blueberry matcha as she said it tastes like a blueberry muffin- and she was right! It was a delicious drink and I’m glad I opted for it instead of my usual order. It was so good that I forgot to take a picture of it! I didn’t get any food but there’s a nice selection of reasonably priced pastries and toasties to order as well.",
      author: "N M"
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
