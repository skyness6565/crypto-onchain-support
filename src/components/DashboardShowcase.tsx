import cryptoDashboardImg from "@/assets/crypto-dashboard.jpg";

const DashboardShowcase = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="crypto-card rounded-3xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-6">
              Trusted by 140+ Million Users Worldwide
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience the power of CRYPTO.COM with our intuitive platform. Track your portfolio, 
              trade seamlessly, and get instant support whenever you need help.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-primary/10 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">140M+</div>
                <div className="text-sm text-muted-foreground">Users Worldwide</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">4.9★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-crypto-blue/20 rounded-3xl blur-2xl transform rotate-3"></div>
              <img 
                src={cryptoDashboardImg} 
                alt="CRYPTO.COM mobile dashboard showing portfolio balance and cryptocurrency favorites"
                className="relative rounded-3xl shadow-2xl max-w-sm w-full hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;