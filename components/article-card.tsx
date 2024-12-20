'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

type ArticleCardProps = {
  title: string;
  slug: string;
  endDate: Date | null;
};

const ArticleCard = ({ title, slug, endDate }: ArticleCardProps) => {
  const [isBonusUsed, setIsBonusUsed] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const bonusUsed = localStorage.getItem(`bonus-used-${slug}`);
    if (bonusUsed === 'true') {
      setIsBonusUsed(true);
    }
  }, [slug]);

  useEffect(() => {
    const loadImage = async () => {
      const importedImage = (
        await import(`@/app/pakkumine/${slug}/header.webp`)
      ).default;
      setImage(importedImage);
    };
    loadImage();
  }, [slug]);

  return (
    <Link href={`/pakkumine/${slug}`}>
      <div className="flex flex-col h-full shadow-sm rounded-[10px] overflow-hidden hover:shadow-lg group hover:bg-accent transition-all">
        <div className="relative w-full aspect-[16/9]">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:grayscale transition-all"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 p-4 flex-grow">
          <h2 className="text-lg font-semibold">{title}</h2>
          {isBonusUsed && (
            <span className="text-sm text-green-500 font-bold">
              Boonus kasutatud
            </span>
          )}
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
    </Link>
  );
};

export default ArticleCard;
