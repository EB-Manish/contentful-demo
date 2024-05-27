"use client";

import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../queries/posts';

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {data.postCollection.items.map((post) => {
          if (!post.title || !post.slug || !post.author || !post.author.name || !post.author.photo || !post.author.photo.url) {
            return null;
          }

          return (
            <li key={post.slug}>
              <h2>{post.title}</h2>
              <p>Author: {post.author.name}</p>
              <img src={post.author.photo.url} alt={post.author.photo.title || 'Photo'} width={post.author.photo.width || 150} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
