import ServicePage from "@/components/ServiceDetails";
import { businessConsultingData } from "@/data";

const page = () => {
  return (
    <ServicePage
      heroSlides={businessConsultingData.heroSlides}
      expectationData={businessConsultingData.expectationData}
      servicePackages={businessConsultingData.servicePackages}
      title="Business Consulting & Advisory"
      subtitle="Strategic guidance to help your business grow."
      solutionsData={businessConsultingData.solutions}
      solutionsSubtitle="Strategic solutions to drive growth, optimize operations, and enhance financial performance."
      solutionsTitle="Business Consulting & Advisory Services"
    />
  );
};

export default page;
