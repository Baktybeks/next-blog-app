'use client';

import { FormEventHandler, useState } from 'react';
import { getPostsBySearch } from '@/services/getPosts';


type Props = {
  onSearch: (value:string[])=>void
}

const PostSearch = ({ onSearch }:Props) => {
  const [ search, setSearch ] = useState('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit} className='formSearch'>
      <input
        type='search'
        placeholder='search'
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default PostSearch;
