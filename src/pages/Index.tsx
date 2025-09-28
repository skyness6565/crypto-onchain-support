import SupportHeader from "@/components/SupportHeader";
import SupportActions from "@/components/SupportActions";
import DashboardShowcase from "@/components/DashboardShowcase";
import SupportGallery from "@/components/SupportGallery";
import ReviewsSection from "@/components/ReviewsSection";
import SupportInfo from "@/components/SupportInfo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SupportHeader />
      <main className="flex flex-col items-center gap-8 pb-12">
        <SupportActions />
        <DashboardShowcase />
        <SupportGallery />
        <ReviewsSection />
        <SupportInfo />
      </main>
    </div>
  );
};

export default Index;
