import { resourceData } from '@/data';
import MaterialCard from './MaterialCard';
import Heading from './shared/Headings';

const FreeMateials = () => {
    return (
      <section className='bg-white py-20'>
        <Heading
          title="Free Invoice Templates"
          subtitle="Download and customize professional invoice forms in various formats for your business needs."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-10 pt-8">
          {resourceData.map((resource) => (
            <div key={resource.id}>
              <MaterialCard
                id={resource.id}
                IconUrl={resource.iconUrl}
                product={resource.product}
                description={resource.description}
              />
            </div>
          ))}
        </div>
      </section>
    );
}

export default FreeMateials