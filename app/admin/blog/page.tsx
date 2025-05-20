"use client";
import { requestAxios } from "@/api";
import BlogCard from "@/components/BlogCard";
import BlogModal from "@/components/BlogModal";
import Paginate from "@/components/Paginate";
import { uploadFile } from "@/utils/upload_utils";
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";

export interface blogList {
  id: string;
  title: string;
  header_image_url: string;
  description: string;
  author: string;
}
export interface blogObject {
  total_counts: number;
  total_pages: number;
  total_page_items: number;
  current_page: number;
  previous_page: number;
  next_page: number;
  rows: blogList[];
}

const Blog = () => {
  const [blogs, setBlogs] = useState<blogObject>({
    total_counts: 0,
    total_pages: 0,
    total_page_items: 0,
    current_page: 0,
    previous_page: 0,
    next_page: 0,
    rows: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [creatingNewBlog, setCreatingNewBlog] = useState(false);
  const [headerImage, setHeaderImage] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [ccc, setBlogContent] = useState("<p> </p>");
  const [error, setError] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [blogId, setBlogId] = useState("");
  let blogContent = "";

  /* Scroll user back to where he was before editing*/
  useEffect(() => {
    if (!isEditing && scrollPosition !== 0) {
      window.scrollTo(0, scrollPosition);
    }
    if (isEditing != creatingNewBlog) {
      const handleBeforeUnload = (event: BeforeUnloadEvent) => {
        event.preventDefault();
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [isEditing, creatingNewBlog, scrollPosition]);

  useEffect(() => {
    (async function () {
      try {
        const response = await requestAxios.get("/blogs");
        if (response.status === 200) {
          setBlogs(response.data.data);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Failed to fetch blogs");
        }
      }
    })();
  }, [isFetching]);

  /* THIS FUNCTION SETUP THINGS FOR EDITING BLOG */
  const onEdit = (id: string) => {
    setMessage("");
    setError("");
    const blog = blogs.rows.find((blog) => blog.id === id);
    if (!blog) {
      setError("No blog selected!");
      return;
    }
    setScrollPosition(window.scrollY);
    if (blog) {
      setBlogId(blog.id);
      setTitle(blog.title);
      setHeaderImage(blog.header_image_url);
      setBlogContent(blog.description);
      setIsEditing(true);
    }
  };

  /* THIS FUNCTION HANDLE BLOG DELETION */
  const onDelete = (id: string) => {
    const yes = confirm(`Do you really want to delete this Blog: ${id}`);
    if (yes) {
      console.log("Yes! Let me delete");
      (async function () {
        const response = await requestAxios.delete(`/blogs/erase/${id}`);
        if (response.status === 204) {
          setMessage("Blog Deleted!");
          setBlogs({
            ...blogs,
            rows: blogs.rows.filter((blog) => blog.id !== id),
          });
        }
      })();
    }
  };

  /* THIS FUNCTION TAKES CARE OF CONTENT */
  const handleDescriptionChange = (content: string) => {
    blogContent = content;
    setBlogContent(blogContent);
  };

  /* UPLOAD IMAGE TO SERVER*/
  const handleHeaderImageUpload = async (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (target && target.files && target.files[0]) {
      const file: File = target.files[0];
      console.log("Uploading this iamge: ", file);

      const response = await uploadFile(file) as { status: number; statusText: string; data: { image_url?: string } };
      console.log("This response status: ", response.statusText);
      if (response?.status === 201) {
        const data = await response.data;

        if (data.image_url) {
          const url = data.image_url;

          if (url) {
            setHeaderImage(url);
          }
        }
      } 
    }
  };

  /*FUNCTION FOR CREATING OR UPDATING BLOG */
  const handleCreateOrEditBlog = async (e: FormEvent) => {
    e.preventDefault();
    const URL = isEditing
      ? `https://api.accountants.co.rw/blogs/modify/${blogId}`
      : "https://api.accountants.co.rw/blogs/create-blog";

    try {
      console.log(isEditing ? "Editing..." : "Creating...", URL);

      const image_urls: string[] = [];
      const doc = new DOMParser().parseFromString(ccc, "text/html");
      doc.querySelectorAll("img").forEach((img) => {
        const imgPath = img.src.split("rw")[1];
        if (imgPath) image_urls.push(imgPath);
      });

      const payload = {
        title,
        description: ccc,
        header_image_url: headerImage,
        image_urls,
      };
      const response = isEditing
        ? await requestAxios.put(URL, payload)
        : await requestAxios.post(URL, payload);

      if ([200, 201].includes(response.status)) {
        setMessage(response.data.message);
        setError("");
        setIsFetching((prev) => !prev);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Something went wrong");
      } else {
        setError("An unexpected error occurred");
      }
      console.error("Failed to save blog:", error);
    }
  };


  return (
    <div>
      {(isEditing || creatingNewBlog) && (
        <BlogModal
          title={title}
          headerImage={headerImage}
          description={ccc}
          message={message}
          error={error}
          setTitle={setTitle}
          setIsEditing={setIsEditing}
          setCreatingNewBlog={setCreatingNewBlog}
          handleCreateOrBlogBlog={handleCreateOrEditBlog}
          handleHeaderImageUpload={handleHeaderImageUpload}
          handleDescriptionChange={handleDescriptionChange}
        />
      )}
      {!isEditing && !creatingNewBlog && (
        <div>
          <h1>Blogs</h1>
          {error && <small className="text-red-500 my-4 mx-5">{error}</small>}
          <div className="flex justify-end">
            <button
              className="my-5"
              onClick={() => {
                setTitle("");
                setHeaderImage("");
                setBlogContent("");
                setMessage("");
                setError("");
                setCreatingNewBlog(true);
              }}
            >
              Create Blog
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 transition-all duration-1000 ease-in-out">
            {blogs &&
              blogs.rows.map((blog, idx) => {
                return (
                  <BlogCard
                    key={idx}
                    id={blog.id}
                    blog_header_img={blog.header_image_url}
                    title={blog.title}
                    description={blog.description}
                    author={blog.author}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                );
              })}
          </div>
          <Paginate
            total_page_items={blogs.total_page_items}
            total_pages={blogs.total_pages}
            current_page={blogs.current_page}
            previous_page={blogs.previous_page}
            next_page={blogs.next_page}
            requestURL={"/blogs"}
            setBlogs={setBlogs}
            setError={setError}
          />
        </div>
      )}
    </div>
  );
};

export default Blog;
