'use client'
import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/getPosts";
import Posts from "@/components/posts/Posts";
import PostSearch from "@/components/postSearch/PostSearch";

const BlogClient = () => {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(()=>setLoading(false))
  }, []);


  return (
    <>
      <h1>Blog Page Client</h1>
      <PostSearch onSearch={setPosts}/>
      {loading ? (<h3>Loading ...</h3>) : (<Posts posts={posts}/>)}
    </>
  );
}

export default BlogClient;