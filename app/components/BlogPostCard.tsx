import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostCardProps {
  title: string;
  imageSrc: string;
  excerpt: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, imageSrc, excerpt, slug }) => {
  return (
    <div className="w-full max-w-sm bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl text-white font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-200 mb-4 flex-grow line-clamp-3">{excerpt}</p>
        <div className="mt-auto">
          <Link href={`/blog/${slug}`} className="inline-block w-full text-center bg-white text-orange-600 font-semibold py-2 px-4 rounded-full hover:bg-orange-100 transition-colors duration-200">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;