"use client";

import React, { useEffect, useState } from "react";
import parse, {
  HTMLReactParserOptions,
  Element,
  DOMNode,
  domToReact,
} from "html-react-parser";
import { requestAxios } from "@/api";
import Image from "next/image";
import { useParams } from "next/navigation";

interface BlogContent {
  header_image_url: string;
  author: string;
  description: string;
  title: string;
}

function BlogPost() {
  const params = useParams();
  const blogid = params.blogid as string;
  const [blogContent, setBlogContent] = useState<BlogContent>({
    header_image_url: "",
    title: "",
    author: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        const response = await requestAxios.get(`/blogs/get/${blogid}`);
        const data = response.data.data;
        setBlogContent({
          header_image_url: data.header_image_url,
          author: data.author,
          title: data.title,
          description: data.description,
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load blog post");
      } finally {
        setIsLoading(false);
      }
    };

    if (blogid) {
      fetchBlog();
    }
  }, [blogid]);

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.attribs) {
        const { name, children } = domNode;

        if (name === "img") {
          return (
            <Image
              src={domNode.attribs.src || ""}
              alt={domNode.attribs.alt || "Image"}
              width={800}
              height={600}
              unoptimized={true}
              className="max-w-full h-auto"
            />
          );
        }
        if (name === "em") {
          return (
            <em className="italic">
              {domToReact(children as DOMNode[], options)}
            </em>
          );
        }
        if (name === "strong") {
          return (
            <strong className="font-bold">
              {domToReact(children as DOMNode[], options)}
            </strong>
          );
        }
        if (name === "h1") {
          return (
            <h1 className="text-4xl font-bold my-4">
              {domToReact(children as DOMNode[], options)}
            </h1>
          );
        }
        if (name === "h2") {
          return (
            <h2 className="text-3xl font-semibold my-3">
              {domToReact(children as DOMNode[], options)}
            </h2>
          );
        }
        if (name === "h3") {
          return (
            <h3 className="text-2xl font-medium my-2">
              {domToReact(children as DOMNode[], options)}
            </h3>
          );
        }
      }
    },
  };

  const headerImageUrl = blogContent.header_image_url
    ? `https://api.accountants.co.rw${blogContent.header_image_url}`
    : "/placeholder-image.jpg"; // Add a placeholder image path

  if (isLoading) {
    return <div className="text-center py-10">Loading blog post...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mt-10">{blogContent.title}</h1>
      <div className="w-full h-[400px] overflow-hidden relative my-10 rounded-lg shadow-lg">
        <Image
          src={headerImageUrl}
          alt={blogContent.title || "Blog header image"}
          fill
          className="object-cover"
          priority
        />
      </div>
      <h4 className="text-gray-600 mb-6">Author: {blogContent.author}</h4>
      <div className="prose max-w-none">
        {blogContent.description
          ? parse(blogContent.description, options)
          : "No content available"}
      </div>
    </div>
  );
}

export default BlogPost;