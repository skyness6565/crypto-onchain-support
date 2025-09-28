import { Clock, Shield, Users, Zap } from "lucide-react";

const SupportInfo = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Your privacy and security are our top priorities"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Knowledgeable support agents with crypto expertise"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Fast resolution times for all your inquiries"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="text-center p-6">
              <div className="mb-4">
                <Icon className="w-12 h-12 text-primary mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SupportInfo;