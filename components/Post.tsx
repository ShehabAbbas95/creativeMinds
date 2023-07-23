import React from "react";

export interface PostProps {
  id;
  title: string;
  content: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface Props {
  post: PostProps;
}

function Post({ post }: Props) {
  return (
    <div className="mb-4">
      <div className="w-96 bg-zinc-400 shadow lg:w-96">
        <div className="w-full px-4 py-5">
          <h3 className="font-Inter text-lg font-medium leading-6 text-gray-900">
            {post.title}
          </h3>
          <div className="mt-2 h-16 max-w-xs text-sm text-gray-500">
            <p>{post.content}</p>
          </div>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Post;
