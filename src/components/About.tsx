import React from "react";

export const About: React.FC = () => {
  return (
    <section className="bg-background py-16 sm:py-20" id="about">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.4fr,1fr] md:items-start">
        {/* LEFT: story */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Notre histoire
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            Welcome to Cafe St&nbsp;Pierre
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A cosy, French-inspired café nestled on St Peter&apos;s Street, known for
            its warm atmosphere, artisan pastries and laid-back charm. Our team
            takes pride in crafting croissants, quiches and baguettes using
            traditional methods that bring a touch of France to Canterbury.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Whether you join us for breakfast, a relaxed weekend brunch or a
            quick coffee break, you&apos;ll find a comfortable space inside and out –
            including a welcoming, dog-friendly patio – and a friendly team ready
            with a smile.
          </p>
        </div>

        {/* RIGHT: stacked highlight cards */}
        <div className="space-y-4">
          {[
            {
              title: "Authentic flavour",
              text: "Classic French pastries and savoury dishes prepared with time-honoured techniques.",
            },
            {
              title: "Warm & welcoming",
              text: "A relaxed space for breakfast, lunch or coffee – with room for friends, family and dogs.",
            },
            {
              title: "Crafted with care",
              text: "High-quality ingredients and a small, dedicated team focused on memorable food and coffee.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="flex gap-3 rounded-2xl bg-card p-4 shadow-sm"
            >
              <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-full bg-matcha-light flex items-center justify-center text-sm font-semibold text-matcha">
                •
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

