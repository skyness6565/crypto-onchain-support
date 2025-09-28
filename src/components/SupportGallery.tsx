import userIssuesImg from "@/assets/user-issues.jpg";
import customerSupportChatImg from "@/assets/customer-support-chat.jpg";
import supportAgentImg from "@/assets/support-agent.jpg";

const SupportGallery = () => {
  const images = [
    {
      src: userIssuesImg,
      alt: "User experiencing CRYPTO.COM account issues",
      title: "Having Issues?",
      description: "Don't worry, we're here to help solve any problems you're experiencing."
    },
    {
      src: customerSupportChatImg,
      alt: "Customer chatting with support representative",
      title: "Live Chat Support",
      description: "Connect directly with our support team for instant assistance."
    },
    {
      src: supportAgentImg,
      alt: "Professional customer support agent at work",
      title: "Expert Support Team",
      description: "Our experienced agents are ready to help you 24/7."
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          We're Here to Help
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our dedicated support team provides comprehensive assistance for all your CRYPTO.COM needs.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="crypto-card rounded-2xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-card-foreground mb-3">
                {image.title}
              </h4>
              <p className="text-muted-foreground">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportGallery;