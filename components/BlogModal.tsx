import Image from "next/image";
import { VscChromeClose } from "react-icons/vsc";
import TiptapEditor from "./TipTapEditor";
import { FormEvent } from "react";

interface BlogModalProps {
  title: string;
  headerImage: string | null;
  description?: string;
  message: string;
  error: string;
  setTitle: (value: string) => void;
  setCreatingNewBlog: (value: boolean) => void;
  setIsEditing: (value: boolean) => void;
  handleCreateOrBlogBlog: (e: FormEvent) => void;
  handleHeaderImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (content: string) => void;
}

const BlogModal = ({
  title,
  headerImage,
  description,
  error,
  message,
  setTitle,
  setIsEditing,
  setCreatingNewBlog,
  handleCreateOrBlogBlog,
  handleHeaderImageUpload,
  handleDescriptionChange,
}: BlogModalProps) => {
  return (
    <div className="static top-20 z-30 bg-white rounded-md shadow-md p-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Update Blog </h1>
        <VscChromeClose
          className="h-6 w-6 text-white p-2 bg-red-500 rounded-sm cursor-pointer"
          onClick={() => {
            setIsEditing(false);
            setCreatingNewBlog(false);
          }}
        />
      </div>
      {message && <small className="text-primary">{message}</small>}
      {error && <small className="text-red-500">{error}</small>}
      <hr />
      <div className="my-4">
        <div className="flex justify-end my-3">
          <p>
            <span className="mr-5">Change Banner: </span>
            <span>
              <input
                type="file"
                accept="image/jpeg, image/png, image/webp, image/gif, image/svg+xml"
                onChange={handleHeaderImageUpload}
              />
            </span>
          </p>
        </div>
        {headerImage && (
          <div className="h-[300px] overflow-hidden bg-gray-700 relative">
            <Image
              src={`https://api.accountants.co.rw${headerImage}`}
              fill
              alt="Blog header Image"
              className="object-cover"
            />
          </div>
        )}
        <form onSubmit={handleCreateOrBlogBlog}>
          <div className="md:grid grid-cols-1 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">Title</label>
              <input
                type="text"
                className="outline-none rounded-md p-3 border text-slate-500"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="flex flex-col overflow-auto ">
              <label htmlFor="bio">Description</label>
              <TiptapEditor
                onChange={handleDescriptionChange}
                initialContent={description}
              />
            </div>
          </div>
          <div className="my-3 flex flex-col">
            <button type="submit">{title ? "Update" : "Post"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BlogModal;