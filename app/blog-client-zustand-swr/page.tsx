import { Metadata } from "next";
import PostsZustand from "@/components/postsZustand/PostsZustand";
import PostSearchZustand from "@/components/postSearchZustand/PostSearchZustand";
// import PostsSWR from "@/components/postsSWR/PostsSWR";
// import PostSearchSWR from "@/components/postSearchSWR/PostSearchSWR";

export const metadata:Metadata = {
  title: "Blog",
}
const BlogClientZustandSWR = () => {

  return (
    <>
      <h1>Blog Page Zustand SWR</h1>
      <PostSearchZustand/>
      <PostsZustand/>
      {/*<PostSearchSWR/>*/}
      {/*<PostsSWR/>*/}
    </>
  );
}

export default BlogClientZustandSWR;