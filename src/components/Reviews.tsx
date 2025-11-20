import React from "react";

const reviews = [
  {
    name: "Juan Solano",
    text: `Great little gem. Really cosy inside. I've lived in Paris and the pastries here are as good as in France. Flaky croissants, excellent quiches and great coffee – a must stop if you're in Canterbury.`,
  },
  {
    name: "Sophie",
    text: `Dog friendly! Made us and our dog very welcome. Cute patio, excellent staff and delicious pastries and baguettes. French touches everywhere.`,
  },
  {
    name: "Adrienne Smith",
    text: `A lovely little oasis in St Peter's Street. The croque monsieur and petit déjeuner are favourites for us. Friendly staff and relaxed vibe.`,
  },
];

export const Reviews: React.FC = () => {
  return (
    <section className="bg-background py-16 sm:py-20" id="reviews">
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Kind words
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            What our guests say
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Loved by locals, visitors and French expats alike.
          </p>
        </header>

        {/* featured + two smaller */}
        <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-start">
          {/* Featured review */}
          <article className="rounded-2xl bg-card p-6 shadow-md">
            <div className="flex items-center gap-2 text-emerald-600">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} aria-hidden>
                  ★
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              “{reviews[0].text}”
            </p>
            <p className="mt-4 text-sm font-semibold text-primary">
              — {reviews[0].name}
            </p>
          </article>

          {/* smaller column */}
          <div className="space-y-4">
            {reviews.slice(1).map((r) => (
              <article
                key={r.name}
                className="rounded-2xl bg-card p-4 shadow-sm"
              >
                <div className="flex items-center gap-1 text-xs text-emerald-600">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  “{r.text}”
                </p>
                <p className="mt-3 text-xs font-semibold text-primary">
                  — {r.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
