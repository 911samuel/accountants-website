import ServicePage from "@/components/ServiceDetails";
import { taxPreparationData } from "@/data";

const page = () => {
  return (
    <ServicePage
      heroSlides={taxPreparationData.heroSlides}
      expectationData={taxPreparationData.expectationData}
      servicePackages={taxPreparationData.servicePackages}
      title="Tax Preparations & Planning"
      subtitle="Ensure compliance and minimize tax liabilities with expert planning."
      solutionsData={taxPreparationData.solutions}
      solutionsSubtitle="Ensure compliance, optimize tax savings, and plan for the future with tailored tax strategies and comprehensive preparation services."
      solutionsTitle="Tax Preparation & Planning Solutions"
    />
  );
};

export default page;
