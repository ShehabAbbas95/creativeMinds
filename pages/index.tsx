import React from "react";
import Link from "next/link";
import Post, { PostProps } from "../components/Post";
import { useRouter } from "next/router";
// Import any other necessary modules or components here
const IndexPage: React.FC = () => {
  const router = useRouter();
  // Replace this with actual blog post data fetched from the backend API
  const blogPosts: PostProps[] = [
    {
      id: 1,
      title: "Sample Blog Post 1",
      content: "This is the content of Sample Blog Post 1...",
    },
    {
      id: 2,
      title: "Sample Blog Post 2",
      content: "This is the content of Sample Blog Post 2...",
    },
    // Add more blog posts here
  ];
  const addNewPost = () => {
    router.push("/post");
  };

  return (
    <>
      <button
        onClick={addNewPost}
        className="my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        New Post
      </button>
      <div>
        <h1>Blog Posts</h1>
        <div className="flex flex-row gap-2">
          {blogPosts.map((post) => (
            <Post post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
