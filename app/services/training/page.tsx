import ServicePage from "@/components/ServiceDetails";
import { trainingData } from "@/data";

const page = () => {
  return (
    <ServicePage
      heroSlides={trainingData.heroSlides}
      expectationData={trainingData.expectationData}
      servicePackages={trainingData.servicePackages}
      title="Professional Training Services"
      subtitle="Enhance your skills with expert-led training programs."
      solutionsData={trainingData.solutions}
      solutionsSubtitle="Enhance your skills with expert-led training designed for business and finance professionals."
      solutionsTitle="Professional Training Programs"
    />
  );
};

export default page;
