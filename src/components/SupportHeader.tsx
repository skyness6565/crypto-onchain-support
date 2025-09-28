import { Shield } from "lucide-react";

const SupportHeader = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">
            CRYPTO.COM
          </h1>
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Customer Support Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Get instant help with your CRYPTO.COM account. Our support team is available 24/7 to assist you.
          </p>
          
          {/* Three-column feature section */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="crypto-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Secure & Safe</h3>
              <p className="text-muted-foreground">Advanced security measures protect your crypto assets 24/7</p>
            </div>
            
            <div className="crypto-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">Trade and transfer crypto instantly with our optimized platform</p>
            </div>
            
            <div className="crypto-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Global Access</h3>
              <p className="text-muted-foreground">Access your account anywhere with multi-chain wallet support</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SupportHeader;