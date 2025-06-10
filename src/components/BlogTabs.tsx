'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Gesunde Ernährung im Alltag",
    category: "Ernährung",
    excerpt: "Tipps und Tricks für eine ausgewogene Ernährung im stressigen Alltag...",
    date: "15. März 2024",
    image: "/images/blog/ernaehrung.jpg"
  },
  {
    id: 2,
    title: "Bewegung für Körper und Geist",
    category: "Fitness",
    excerpt: "Wie regelmäßige Bewegung Ihre Gesundheit positiv beeinflusst...",
    date: "10. März 2024",
    image: "/images/blog/fitness.jpg"
  },
  {
    id: 3,
    title: "Stressmanagement im Beruf",
    category: "Gesundheit",
    excerpt: "Effektive Methoden zur Stressbewältigung im Arbeitsalltag...",
    date: "5. März 2024",
    image: "/images/blog/stress.jpg"
  }
];

const categories = ["Alle", "Ernährung", "Fitness", "Gesundheit"];

export default function BlogTabs() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredPosts = activeCategory === "Alle" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8">Blog</h2>
      
      {/* Tabs */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors
              ${activeCategory === category 
                ? 'bg-white text-blue-900' 
                : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.id}
            className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-colors"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-200">{post.category}</span>
                <span className="text-sm text-blue-200">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {post.title}
              </h3>
              <p className="text-blue-100 mb-4">
                {post.excerpt}
              </p>
              <button className="text-white hover:text-blue-200 transition-colors">
                Weiterlesen →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 