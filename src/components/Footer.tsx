import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">☕</span>
              <span className="text-lg font-semibold tracking-wide">
                Cafe St&nbsp;Pierre
              </span>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Your highstreet haven for French pastries, coffee and relaxed
              brunch in the heart of Canterbury.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Opening hours
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Mon – Sat: 8:00 AM – 6:00 PM
              <br />
              Sunday: 9:00 AM – 5:30 PM
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Visit &amp; contact
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              41 St Peter&apos;s St
              <br />
              Canterbury CT1 2BG
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Phone: 01227 456 791
              <br />
              Email: hello@CafeStPierre-canterbury.co.uk
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/15 pt-4 text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Cafe St&nbsp;Pierre Canterbury. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};
