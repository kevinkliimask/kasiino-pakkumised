'use client';

import { useEffect, useState } from 'react';

type ArticleCardBonusUsedProps = {
  slug: string;
};

const ArticleCardBonusUsed = ({ slug }: ArticleCardBonusUsedProps) => {
  const [isBonusUsed, setIsBonusUsed] = useState(false);

  useEffect(() => {
    const bonusUsed = localStorage.getItem('used-bonuses');
    if (!bonusUsed) {
      return;
    }
    if (bonusUsed.includes(slug)) {
      setIsBonusUsed(true);
    }
  }, [slug]);

  return (
    <>
      {isBonusUsed && (
        <span className="text-sm text-green-500 font-bold">
          Boonus kasutatud
        </span>
      )}
    </>
  );
};

export default ArticleCardBonusUsed;
