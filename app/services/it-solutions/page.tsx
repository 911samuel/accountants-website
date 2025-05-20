import ServicePage from "@/components/ServiceDetails";
import { itSolutionsData } from "@/data";

const page = () => {
  return (
    <ServicePage
      heroSlides={itSolutionsData.heroSlides}
      expectationData={itSolutionsData.ExpectationData}
      servicePackages={itSolutionsData.servicePackages}
      title="IT Service Packages"
      subtitle="Reliable IT solutions tailored for your business."
      solutionsData={itSolutionsData.solutions}
      solutionsSubtitle="Innovative and reliable IT services tailored to meet your business needs."
      solutionsTitle="Our IT Solutions"
    />
  );
};

export default page;
