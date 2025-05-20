import NewsCard from "@/components/NewsCard";
import Heading from "@/components/shared/Headings";
import { AllNews } from "@/data";
import Head from "next/head";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Modern Blog | Home</title>
        <meta
          name="description"
          content="A modern blog built with Next.js, TypeScript, and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Inspiring Stories
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join our community of readers and writers sharing unique
            perspectives on technology, design, and creativity.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex rounded-md shadow-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-3 rounded-r-md hover:bg-pink-600 transition duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="my-5 bg-white p-10">
        <Heading
          title="Latest News"
          subtitle="Stay updated with the latest insights, updates, and expert advice from ACR Online Accounting Services."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-40">
          {AllNews.map((element) => (
            <NewsCard
              key={element.id}
              imageUrl={element.imgUrl}
              title={element.title}
              description={element.description}
              id={element.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
