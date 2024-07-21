import React from 'react';
import BlogPostCard from './components/BlogPostCard';

import MyForm from './components/formData';



const blogPosts = [
  {
    title: 'My Awesome Blog Post 1',
    imageSrc: '/public/Designer(18).jpeg',
    excerpt: 'This is a short excerpt...',
    slug: 'next-post-1',
  },
  {
    title: 'Another Great Blog Post',
    imageSrc: '/public/vercel.svg',
    excerpt: 'Learn about Tailwind CSS...',
    slug: 'tailwind-post',
  },
  {
    title: 'Another Great Blog Post',
    imageSrc: '/public/vercel.svg',
    excerpt: 'Learn about Tailwind CSS...',
    slug: 'tailwind-post',
  },{
    title: 'Another Great Blog Post',
    imageSrc: '/public/vercel.svg',
    excerpt: 'Learn about Tailwind CSS...',
    slug: 'tailwind-post',
  },{
    title: 'Another Great Blog Post',
    imageSrc: '/public/vercel.svg',
    excerpt: 'Learn about Tailwind CSS...',
    slug: 'tailwind-post',
  },{
    title: 'Another Great Blog Post',
    imageSrc: '/public/vercel.svg',
    excerpt: 'Learn about Tailwind CSS...',
    slug: 'tailwind-post',
  },{
    title: 'Another Great Blog Post',
    imageSrc: '/public/vercel.svg',
    excerpt: 'Learn about Tailwind CSS...',
    slug: 'tailwind-post',
  },{
    title: 'Another Great Blog Post',
    imageSrc: '/public/vercel.svg',
    excerpt: 'Learn about Tailwind CSS...',
    slug: 'tailwind-post',
  },{
    title: 'Another Great Blog Post',
    imageSrc: '/public/vercel.svg',
    excerpt: 'Learn about Tailwind CSS...',
    slug: 'tailwind-post',
  },
  // Add more blog posts here...
];

export default function Home() {
  return (

<>
    <MyForm />
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              imageSrc={post.imageSrc}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </main>
    </>
  );
  
}