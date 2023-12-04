'use client';
import Link from 'next/link';
import { shallow } from 'zustand/shallow';
import { useEffect } from 'react';
import { usePosts } from '@/store';
import { IPost } from '@/components/posts/Posts';


const PostsZustand = () => {

  const [
    posts,
    loading,
    getAllPosts,
  ] = usePosts(state => [
    state.posts,
    state.loading,
    state.getAllPosts,
  ], shallow);

  useEffect(() => {
    getAllPosts();
  }, [ getAllPosts ]);

  return loading ? (<h3>Loading ...</h3>) : (
    <ul>
      {posts.map((post: IPost) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsZustand;
