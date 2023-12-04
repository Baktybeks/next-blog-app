'use client';

import { FormEventHandler, useState } from 'react';
import { usePosts } from '@/store';


const PostSearchZustand = () => {
  const [ search, setSearch ] = useState('');
  const getPostsBySearch = usePosts(state => state.getPostsBySearch);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async(event) => {
    event.preventDefault();
    await getPostsBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="formSearch">
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearchZustand;
