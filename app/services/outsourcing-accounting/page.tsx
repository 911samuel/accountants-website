import ServicePage from "@/components/ServiceDetails";
import { outsourcingAccountingData } from "@/data";

const page = () => {
  return (
    <ServicePage
      heroSlides={outsourcingAccountingData.heroSlides}
      expectationData={outsourcingAccountingData.expectationData}
      servicePackages={outsourcingAccountingData.servicePackages}
      title="Outsourcing Accounting Services"
      subtitle="Cost-effective and expert accounting solutions for your business."
      solutionsData={outsourcingAccountingData.solutions}
      solutionsSubtitle="Innovative and reliable IT services tailored to meet your business needs."
      solutionsTitle="Our IT Solutions"
    />
  );
};

export default page;
