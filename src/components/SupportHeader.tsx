import { Shield } from "lucide-react";

const SupportHeader = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">
            crypto.com
          </h1>
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Customer Support Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant help with your crypto.com account. Our support team is available 24/7 to assist you.
          </p>
        </div>
      </div>
    </header>
  );
};

export default SupportHeader;