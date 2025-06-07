import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import {  PostProps, PostPropsNew } from "@/interfaces";
import { useState } from "react";

const Post: React.FC<PostProps[]> = ({posts}) => {
  const [allPosts, setAllPosts] = useState<PostProps[] | []>(posts)
  return (
    <>
      <Header />
      <div className="grid grid-cols-3  gap-5">
        {
          allPosts.map(({title, content, userId}: PostProps, key:number) => {
            return (
              <PostCard title={title} content={content} userId={userId}   />
            )
          })
        }
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default Post;