import { Link } from 'next-view-transitions';
import Image from 'next/image';

import ArticleCardBonusUsed from '@/components/article-card-bonus-used';

type ArticleCardProps = {
  title: string;
  slug: string;
  endDate: Date | null;
};

const ArticleCard = async ({ title, slug, endDate }: ArticleCardProps) => {
  const image = (await import(`@/app/pakkumine/${slug}/header.webp`)).default;

  return (
    <Link href={`/pakkumine/${slug}`}>
      <div className="flex flex-col h-full shadow-sm rounded-[10px] overflow-hidden hover:shadow-lg group hover:bg-accent transition-all">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:grayscale transition-all"
          />
        </div>
        <div className="flex flex-col gap-2 p-4 flex-grow justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div>
            <ArticleCardBonusUsed slug={slug} />
            {endDate ? (
              <p className="text-sm text-muted-foreground">
                Kehtib kuni{' '}
                {endDate.toLocaleDateString('et-EE', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">Kehtivus pole teada</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
