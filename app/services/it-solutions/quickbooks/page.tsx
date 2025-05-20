import components from "@/components";
import { quickBooksSlides, supportData } from "@/data";

const page = () => {
  return (
    <div>
      <components.Hero slides={quickBooksSlides} />
      <section>
        <components.Heading
          title="QuickBooks Consultant "
          subtitle="Helping businesses streamline accounting and financial management with expert QuickBooks solutions. Get tailored support, training, and integration services to optimize your business finances."
        />
        <components.QuickBooksCard quickBooks={supportData} />
      </section>
      <components.QuickBooksFeature />
      <components.Pricing />
    </div>
  );
};

export default page;
