import Heading from "./shared/Headings";
import { AllNews } from "@/data";
import NewsCard from "./NewsCard"; 

const Latest = () => {
  const firstThreeNews = AllNews.slice(0, 3);

  return (
    <section className="my-5 bg-white p-10">
      <Heading
        title="Latest News"
        subtitle="Stay updated with the latest insights, updates, and expert advice from ACR Online Accounting Services."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-40">
        {firstThreeNews.map((element, idx) => (
          <NewsCard
            key={idx}
            imageUrl={element.imgUrl}
            title={element.title}
            description={element.description}
            id={element.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Latest;