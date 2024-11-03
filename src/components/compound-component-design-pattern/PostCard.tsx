import { createContext, PropsWithChildren, useContext } from "react";

type PostCardContext = {
  post: Post;
};

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

function usePostCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCardProvider");
  }
  return context;
}

type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

type PostCardProps = PropsWithChildren & {
  post: Post;
};

export default function PostCard({ children, post }: PostCardProps) {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="flex w-[300px] flex-col gap-2 rounded-md bg-gray-300 p-2">
        {children}
      </div>
    </PostCardContext.Provider>
  );
}

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext();
  return <div className="text-lg font-semibold">{post.title}</div>;
};

PostCard.Content = function PostCardContent() {
  const { post } = usePostCardContext();
  return <p>{post.content}</p>;
};

PostCard.User = function PostCardUser() {
  const { post } = usePostCardContext();
  return <p className="text-sm text-neutral-400">By {post.user.name}</p>;
};

PostCard.Button = function PostCardButton() {
  return (
    <div className="flex flex-row gap-2">
      <button className="button-purple-to-blue">Read More</button>
      <button className="button-purple-to-blue">Comments</button>
    </div>
  );
};
