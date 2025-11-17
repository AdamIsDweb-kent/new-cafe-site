import { Coffee } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Coffee className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Le Cafe</h3>
          <p className="text-cream/80 mb-6">
            Your neighborhood haven for specialty coffee & treats
          </p>
          <p className="text-cream/60 text-sm">
            © 2024 Le Cafe Canterbury. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
