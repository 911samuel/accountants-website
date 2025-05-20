import components from "@/components";
import { miclientData } from "@/data";

const page = () => {
  return (
    <div>
      <components.Hero slides={miclientData.slides} />
      <section>
        <components.Heading
          title="Quick Deal closure Platform"
          subtitle="Join MiClient today to streamline your business workflow by accessing a unified platform where you can oversee your sales pipeline, generate proposals, collaborate on deal reviews, and finalize contracts with ease."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {miclientData.features.map((item, id) => (
            <components.MiclientExpectaion
              key={id}
              description={item.description}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </section>
      <section>
        <components.Heading
          title="What to Expect"
          subtitle="Reliable, professional, and tailored accounting services designed to help your business stay compliant, efficient, and financially healthy."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {miclientData.offers.map((item, id) => (
            <components.MiclientOffersCard
              key={id}
              description={item.description}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </section>
      <section>
        <components.Heading
          title="Choose Your Plan"
          subtitle="Choose from our range of service packages designed to meet your business needs and budget."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miclientData.plans.map((packageItem, index) => (
            <components.PackageCard
              key={index}
              title={packageItem.title}
              services={packageItem.services}
              highlighted={packageItem.highlighted}
              price={packageItem.price}
            />
          ))}
        </div>
      </section>
      <components.FaqSection faqs={miclientData.faqs} />
    </div>
  );
};

export default page;
