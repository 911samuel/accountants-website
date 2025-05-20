"use client";

import Image from "next/image";
import parse, {
  HTMLReactParserOptions,
  Element,
  DOMNode,
  domToReact,
} from "html-react-parser";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  blog_header_img: string;
  title: string;
  description: string;
  author: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  blog_header_img,
  title,
  description,
  author,
  onEdit,
  onDelete,
}) => {
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.attribs) {
        const { name, children } = domNode;

        if (name === "ul") {
          <ul className="list-disc ml-5">
            {domToReact(children as DOMNode[], options)}
          </ul>;
        }
        if (name === "ol") {
          <ol className="list-decimal ml-5">
            {domToReact(children as DOMNode[], options)}
          </ol>;
        }
        if (name === "img") {
          return (
            <Image
              src={domNode.attribs.src || ""}
              alt={domNode.attribs.alt || "Image"}
              width={
                domNode.attribs.width ? parseInt(domNode.attribs.width) : 800
              } // Default width
              height={
                domNode.attribs.height ? parseInt(domNode.attribs.height) : 600
              } // Default height
              unoptimized={true} // Disable Next.js optimization
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
        if (["h1", "h2", "h3", "h4"].includes(name)) {
          const headingClasses: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
          } = {
            h1: "text-4xl font-bold",
            h2: "text-3xl font-semibold",
            h3: "text-2xl font-medium",
            h4: "text-xl font-medium",
          };
          return (
            <div
              className={headingClasses[name as keyof typeof headingClasses]}
            >
              {domToReact(children as DOMNode[], options)}
            </div>
          );
        }
      }
    },
  };
  return (
    <div className="border rounded shadow-md overflow-hidden h-[500px]">
      {/* Header Image */}
      {blog_header_img && (
        <div className="h-[40%] md:h-[50%] relative">
          <Image
            fill
            src={`https://api.accountants.co.rw${blog_header_img}`}
            alt="Blog Header"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-lg mb-2">Author: {author}</p>
          <div className="text-sm text-gray-600">
            {parse(description.substring(0, 150), options)}...
            <span className="text-sky-500">
              <Link href={`/admin/blog/${id}`}>readmore</Link>
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => onEdit(id)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
