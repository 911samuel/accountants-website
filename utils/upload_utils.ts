import { requestAxios } from "@/api";
import { Editor } from "@tiptap/core";

export const uploadFile = async (file: File) => {
  if (file) {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await requestAxios.post(
        "/blogs/create-blog-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    } catch (error: unknown) {
      return error;
    }
  }
};

export const imageHandler = (editor: Editor) => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute(
    "accept",
    "image/jpeg, image/png, image/webp, image/gif, image/svg+xml"
  );
  input.click();

  input.onchange = async (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target && target.files && target.files[0]) {
      const file: File = target.files[0];

      const response = (await uploadFile(file)) as {
        status: number;
        statusText: string;
        data: { image_url?: string };
      };

      if (response?.status === 201) {
        const data = await response.data;

        if (data.image_url) {
          const url = data.image_url;

          if (url) {
            editor
              .chain()
              .focus()
              .setImage({ src: `https://api.accountants.co.rw${url}` })
              .run();
          }
        }
      }
    }
  };
};