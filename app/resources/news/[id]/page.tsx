"use client";

import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import { AllNews } from "@/data";
import Avatar from "@/public/ACRTeam";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Share2,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  Calendar,
  Clock,
} from "lucide-react";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showCommentForm, setShowCommentForm] = useState(false);

  if (!id) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const newsItem = AllNews.find((news) => news.id === parseInt(id as string));

  if (!newsItem) {
    return (
      <div className="flex flex-col items-center justify-center h-96 space-y-4">
        <div className="text-4xl">📰</div>
        <div className="text-2xl font-semibold text-gray-700">
          Article Not Found
        </div>
        <p className="text-gray-500">
          The news article you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
      </div>
    );
  }

  // Filter related articles to exclude current one and limit to 3
  const relatedArticles = AllNews.filter(
    (article) => article.id !== newsItem.id
  ).slice(0, 3);

  // Format the publish date (assuming it's already in a proper format in the data)
  const publishDate = newsItem.author.publishDate;

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-4 text-blue-200 flex items-center space-x-2">
            <span>{newsItem.category || "News"}</span>
            <span>•</span>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{newsItem.readTime || "5 min read"}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {newsItem.title}
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {newsItem.lead}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={newsItem.author.image}
                alt={newsItem.author.name}
                width={56}
                height={56}
                className="rounded-full border-2 border-white"
              />
              <div>
                <p className="font-semibold">{newsItem.author.name}</p>
                <div className="flex items-center text-sm text-blue-200">
                  <span>{newsItem.author.role}</span>
                  <span className="mx-2">•</span>
                  <Calendar size={14} className="mr-1" />
                  <span>{publishDate}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Bookmark
                  size={20}
                  className={isBookmarked ? "fill-white" : ""}
                />
              </button>
              <button className="p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg -mt-6 rounded-t-lg">
        {/* Featured Image if available */}
        {newsItem.mainImage && (
          <figure className="mb-10">
            <Image
              src={newsItem.mainImage}
              alt={newsItem.title}
              width={1000}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
            />
            <figcaption className="text-gray-500 text-sm mt-2 italic text-center">
              {newsItem.imageCaption || ""}
            </figcaption>
          </figure>
        )}

        {/* Article Content */}
        <article className="prose max-w-none">
          {newsItem.content.map((section, index) => (
            <div key={index} className="mb-8">
              {section.type === "paragraph" && (
                <p className="text-gray-700 text-lg leading-relaxed">
                  {section.content}
                </p>
              )}
              {section.type === "heading" && (
                <h2
                  className={`font-bold mt-8 mb-4 ${
                    section.level === 2 ? "text-3xl" : "text-2xl"
                  }`}
                >
                  {section.content}
                </h2>
              )}
              {section.type === "figure" && (
                <figure className="my-8">
                  <Image
                    src={section.image || Avatar}
                    alt={section.caption || ""}
                    width={800}
                    height={500}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                  <figcaption className="text-gray-500 text-sm mt-2 italic text-center">
                    {section.caption}
                  </figcaption>
                </figure>
              )}
              {section.type === "list" && (
                <ul className="list-disc pl-6 space-y-2 my-4">
                  {section.items?.map((item, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: item }}
                      className="text-gray-700"
                    ></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>

        {/* Article Footer */}
        <div className="border-t border-b border-gray-200 py-6 my-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <button
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setLikeCount(likeCount + 1)}
            >
              <ThumbsUp size={20} />
              <span>{likeCount > 0 ? likeCount : ""} Like</span>
            </button>
            <button
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setShowCommentForm(!showCommentForm)}
            >
              <MessageCircle size={20} />
              <span>
                {newsItem.comments.length > 0 ? newsItem.comments.length : ""}{" "}
                Comment{newsItem.comments.length !== 1 ? "s" : ""}
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Share:</span>
            <div className="flex space-x-2">
              {/* Social Share Icons */}
              <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </button>
              <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </button>
              <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        {showCommentForm && (
          <div className="my-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your comment here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Post Comment
              </button>
            </form>
          </div>
        )}

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <MessageCircle size={24} className="mr-2" />
            Comments ({newsItem.comments.length})
          </h2>

          {newsItem.comments.length === 0 ? (
            <div className="bg-gray-50 p-8 text-center rounded-lg">
              <p className="text-gray-500">
                No comments yet. Be the first to share your thoughts!
              </p>
              <button
                onClick={() => setShowCommentForm(true)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Leave a Comment
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {newsItem.comments.map((comment) => (
                <div key={comment.id} className="border-b pb-6 mb-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={comment.author.image}
                      alt={comment.author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="font-semibold">{comment.author.name}</p>
                          <p className="text-sm text-gray-500">
                            {comment.date}
                          </p>
                        </div>
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                          Reply
                        </button>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>

                      {/* Comment Actions */}
                      <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                        <button className="flex items-center space-x-1 hover:text-blue-600">
                          <ThumbsUp size={14} />
                          <span>Like</span>
                        </button>
                        <span>•</span>
                        <span>{comment.likes || 0} likes</span>
                      </div>

                      {/* Replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="mt-6 space-y-6">
                          {comment.replies.map((reply) => (
                            <div
                              key={reply.id}
                              className="pl-6 border-l-2 border-gray-200"
                            >
                              <div className="flex items-start space-x-3">
                                <Image
                                  src={reply.author.image}
                                  alt={reply.author.name}
                                  width={36}
                                  height={36}
                                  className="rounded-full"
                                />
                                <div className="flex-1">
                                  <div className="flex justify-between items-center mb-2">
                                    <div>
                                      <p className="font-semibold">
                                        {reply.author.name}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {reply.date}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-gray-700">
                                    {reply.content}
                                  </p>

                                  {/* Reply Actions */}
                                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                    <button className="flex items-center space-x-1 hover:text-blue-600">
                                      <ThumbsUp size={14} />
                                      <span>Like</span>
                                    </button>
                                    <span>•</span>
                                    <span>{reply.likes || 0} likes</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Author Bio Card */}
      <div className="max-w-4xl mx-auto px-6 py-8 bg-gray-100 border-t border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src={newsItem.author.image}
            alt={newsItem.author.name}
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold mb-2">{newsItem.author.name}</h3>
            <p className="text-gray-600 mb-4">{newsItem.author.role}</p>
            <p className="text-gray-700">
              {newsItem.author.bio ||
                "Writer and contributor with expertise in current affairs and industry trends."}
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((article) => (
            <NewsCard
              key={article.id}
              imageUrl={article.imgUrl}
              title={article.title}
              description={article.description}
              id={article.id}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/news"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
