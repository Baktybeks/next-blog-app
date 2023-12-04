import Link from 'next/link';


export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Props = {
  posts: IPost[]
}

const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post:IPost) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
