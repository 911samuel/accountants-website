import { aboutIntro } from "@/data";
import components from "@/components";

const Value = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1 text-left flex flex-col justify-center items-center">
        <components.Heading
          subtitle="Delivering professional accounting, bookkeeping, tax, and auditing services with integrity and excellence."
          title="About Us"
          className="md:text-left md:mx-0 lg:mx-0 mx-0"
        />
      </div>
      <components.ValueCard {...aboutIntro[1]} />
      <components.ValueCard {...aboutIntro[2]} />
      <div className="row-span-2">
        <components.ValueCard {...aboutIntro[0]} />
      </div>
      <components.ValueCard {...aboutIntro[3]} />
      <components.ValueCard {...aboutIntro[4]} />
      <components.ValueCard {...aboutIntro[5]} />

      {/* Card 7 */}
      <components.ValueCard {...aboutIntro[6]} />
    </section>
  );
};

export default Value;
