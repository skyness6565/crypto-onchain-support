import SupportHeader from "@/components/SupportHeader";
import SupportActions from "@/components/SupportActions";
import SupportGallery from "@/components/SupportGallery";
import SupportInfo from "@/components/SupportInfo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SupportHeader />
      <main className="flex flex-col items-center gap-8 pb-12">
        <SupportActions />
        <SupportGallery />
        <SupportInfo />
      </main>
    </div>
  );
};

export default Index;
