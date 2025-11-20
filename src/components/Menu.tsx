import React from "react";
import croqueImg from "@/assets/croque-monsieur.jpg";
import hotChocolateImg from "@/assets/hot-chocolate.jpg";
import patisserieImg from "@/assets/patisserie.jpg";
import quicheImg from "@/assets/quiche.jpg";

const items = [
  {
    name: "Café Crème & Croissant",
    tag: "Breakfast favourite",
    description:
      "Buttery croissant served warm with a classic French café crème.",
    image: hotChocolateImg, // or a croissant photo if you take one later
  },
  {
    name: "Croque Monsieur",
    tag: "Most popular",
    description:
      "Toasted French sandwich with ham, Emmental and béchamel, served with salad.",
    image: croqueImg,
  },
  {
    name: "Quiche du Jour",
    tag: "From the kitchen",
    description:
      "House-baked quiche using seasonal ingredients, served with mixed leaves.",
    image: quicheImg,
  },
  {
    name: "Pâtisserie Selection",
    tag: "Sweet treat",
    description:
      "A changing selection of French pastries, cakes and tarts from the counter.",
    image: patisserieImg,
  },
];


export const Menu: React.FC = () => {
  return (
    <section className="bg-muted/40 py-16 sm:py-20" id="menu">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            From the kitchen
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            A taste of Cafe St&nbsp;Pierre
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Our menu changes with the seasons, but here&apos;s a glimpse of the
            French favourites you&apos;ll find on the counter and blackboard.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm md:flex-row"
            >
              <div className="md:w-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover md:h-full"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-primary sm:text-lg">
                      {item.name}
                    </h3>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  * Menu items may vary slightly from day to day.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
