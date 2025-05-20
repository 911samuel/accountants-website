import ServicePage from "@/components/ServiceDetails";
import { accountingBookkeepingData } from "@/data";

const page = () => {
  return (
    <ServicePage
      heroSlides={accountingBookkeepingData.heroSlides}
      expectationData={accountingBookkeepingData.expectationData}
      servicePackages={accountingBookkeepingData.servicePackages}
      title="Accounting & Bookkeeping"
      subtitle="Accurate financial records and compliance for your business."
      solutionsData={accountingBookkeepingData.solutions}
      solutionsSubtitle="Reliable financial management services to help your business stay organized, compliant, and financially healthy."
      solutionsTitle="Accounting & Bookkeeping Solutions"
    />
  );
};

export default page;
