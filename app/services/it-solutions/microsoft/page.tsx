
import components from "@/components";

const page = () => {
  return (
    <div>
      <section>
        <components.Heading
          title="QuickBooks Consultant "
          subtitle="Helping businesses streamline accounting and financial management with expert QuickBooks solutions. Get tailored support, training, and integration services to optimize your business finances."
        />
      </section>
      <components.QuickBooksFeature />
      <components.Pricing />
    </div>
  );
};

export default page;
