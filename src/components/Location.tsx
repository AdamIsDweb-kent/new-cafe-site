import React from "react";

export const Location: React.FC = () => {
  return (
    <section className="bg-muted/30 py-16 sm:py-20" id="visit">
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Find us
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            Visit Cafe St&nbsp;Pierre
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Perfect spot to take a break from shopping, meet a friend or start
            your day with a proper French breakfast.
          </p>
        </header>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-start">
          {/* street image / map */}
          <div className="overflow-hidden rounded-3xl bg-card shadow-md">
            <img
              src="/assets/cafe-street.jpg"
              alt="Street view of Cafe St Pierre on St Peter's Street"
              className="h-full w-full object-cover"
            />
          </div>

          {/* info cards */}
          <div className="space-y-4">
            <article className="rounded-2xl bg-card p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-primary sm:text-base">
                Location
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                41 St Peter&apos;s St, Canterbury CT1 2BG
              </p>
              <h4 className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Getting here
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Right in the heart of Canterbury high street, a short walk from
                both West &amp; East stations.
              </p>
            </article>

            <article className="rounded-2xl bg-card p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-primary sm:text-base">
                Opening hours
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Monday – Saturday: 8:00 AM – 6:00 PM
                <br />
                Sunday: 9:00 AM – 5:30 PM
              </p>

              <h4 className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Contact
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Phone: 01227 456 791
                <br />
                Email: hello@CafeStPierre-canterbury.co.uk
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
