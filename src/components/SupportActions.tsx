import { Button } from "@/components/ui/button";
import { MessageCircle, AlertTriangle } from "lucide-react";

const SupportActions = () => {
  const openJivoChat = () => {
    // @ts-ignore - Jivo chat global function
    if (window.jivo_api) {
      // @ts-ignore
      window.jivo_api.open();
    } else {
      // Fallback - try to trigger chat widget
      const jivoWidget = document.querySelector('[data-jivo]') as HTMLElement;
      if (jivoWidget) {
        jivoWidget.click();
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="crypto-card rounded-2xl p-8 text-center">
          <div className="mb-6">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Start Live Chat
            </h3>
            <p className="text-muted-foreground mb-6">
              Connect instantly with our support team for real-time assistance with your account.
            </p>
          </div>
          <Button 
            onClick={openJivoChat}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-xl crypto-glow"
          >
            Start Live Chat
          </Button>
        </div>

        <div className="crypto-card rounded-2xl p-8 text-center">
          <div className="mb-6">
            <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Report an Issue
            </h3>
            <p className="text-muted-foreground mb-6">
              Having problems with your account? Report your issue and get personalized help.
            </p>
          </div>
          <Button 
            onClick={openJivoChat}
            variant="secondary"
            size="lg"
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-4 px-8 rounded-xl"
          >
            Report an Issue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupportActions;