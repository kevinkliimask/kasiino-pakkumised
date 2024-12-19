import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

import ArticleCard from '@/components/article-card';

export const metadata: Metadata = {
  title: 'Kasiinode boonused',
  description:
    'Tasuta kasiinode boonuspakkumised, millega saab reaalselt võita',
};

type Article = {
  title: string;
  slug: string;
  createdAt: Date;
  endDate: Date;
};

export default async function Home() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), 'app/pakkumine'),
    {
      recursive: true,
    },
  );

  const articles = (
    (await Promise.all(
      filenames
        .filter((filename) => filename.endsWith('page.mdx'))
        .map(async (filename) => {
          const pageModule = await import(`@/app/pakkumine/${filename}`);
          return {
            ...pageModule.metadata,
            path: filename.replace('/page.mdx', ''),
          };
        }),
    )) as Article[]
  ).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {articles.map((article) => (
        <ArticleCard key={article.slug} {...article} />
      ))}
    </section>
  );
}
