"use client"

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Comments from '@/components/Comments';
import Archive from '@/components/Archive';

export default function HiddenGemArticle({ params }: { params: { slug: string } }) {
  const { slug } = useParams();
  const filePath = path.join(process.cwd(), 'content/hidden-gem', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900 text-white min-h-screen px-6 pt-20"
    >
      <article className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400">{data.title}</h1>
          <p className="text-zinc-400">{data.date}</p>
        </div>

        <Image
          src={data.coverImage}
          alt="Cover"
          width={1000}
          height={500}
          className="rounded-xl object-cover w-full"
        />

        <div className="prose prose-invert max-w-none text-lg" dangerouslySetInnerHTML={{ __html: content }} />

        <div className="flex items-center gap-4 mt-12">
          <Image src={data.authorImage} alt={data.author} width={60} height={60} className="rounded-full" />
          <p className="text-lg">{data.author}</p>
        </div>

        <Comments />
        <Archive />
      </article>
    </motion.main>
  );
}
