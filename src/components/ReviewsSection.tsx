import { Star, User } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah M.",
      location: "United States",
      rating: 5,
      comment: "CRYPTO.COM has been amazing! The customer support is incredibly fast and helpful. Had an issue with my account and they resolved it within minutes through live chat.",
      verified: true
    },
    {
      name: "Michael Chen",
      location: "Singapore", 
      rating: 5,
      comment: "Best crypto platform I've used. The support team is knowledgeable and always available. They helped me with my first crypto purchase and made everything so easy to understand.",
      verified: true
    },
    {
      name: "Emma Rodriguez",
      location: "Canada",
      rating: 5,
      comment: "Outstanding customer service! I had a problem with a transaction and the support agent walked me through the solution step by step. Very professional and patient.",
      verified: true
    },
    {
      name: "David Kim",
      location: "Australia",
      rating: 5,
      comment: "CRYPTO.COM support is top-notch. Quick response times, helpful agents, and they actually solve your problems. Much better than other crypto exchanges I've tried.",
      verified: true
    },
    {
      name: "Lisa Thompson",
      location: "United Kingdom",
      rating: 5,
      comment: "Impressed by how quickly they respond. Had a security concern and they helped me secure my account immediately. Really shows they care about customer safety.",
      verified: true
    },
    {
      name: "Carlos Mendez",
      location: "Mexico",
      rating: 5,
      comment: "Excellent support experience! The agents are friendly, professional, and always find a solution. Makes me confident in using CRYPTO.COM for all my crypto needs.",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          What Our Customers Say
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join millions of satisfied CRYPTO.COM users who trust our support team
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="crypto-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 rounded-full p-2">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                  {review.verified && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
            
            <div className="flex gap-1 mb-4">
              {renderStars(review.rating)}
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              "{review.comment}"
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-6 py-3">
          <div className="flex">
            {renderStars(5)}
          </div>
          <div className="text-sm">
            <span className="font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground ml-2">from 50,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;