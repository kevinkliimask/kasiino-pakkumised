'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
type BonusUsedProps = {
  slug: string;
};

const MarkBonusUsedButton = ({ slug }: BonusUsedProps) => {
  const [isUsed, setIsUsed] = useState(() => {
    const usedBonuses = JSON.parse(localStorage.getItem('used-bonuses') || '[]');
    return usedBonuses.includes(slug);
  });

  const handleToggleBonus = () => {
    const usedBonuses = JSON.parse(localStorage.getItem('used-bonuses') || '[]');
    const newUsedBonuses = isUsed
      ? usedBonuses.filter((bonusSlug: string) => bonusSlug !== slug)
      : [...usedBonuses, slug];

    localStorage.setItem('used-bonuses', JSON.stringify(newUsedBonuses));
    setIsUsed(!isUsed);
  };

  return (
    <button
      className={cn(
        isUsed ? 'bg-green-500 hover:bg-green-500/90' : 'bg-primary hover:bg-primary/90',
        'text-white font-semibold cursor-pointer py-2 px-4 transition-all rounded-[10px] my-4 mx-auto w-full max-w-sm',
      )}
      onClick={handleToggleBonus}
    >
      {isUsed ? 'Boonus kasutatud' : 'Märgi boonus kasutatuks'}
    </button>
  );
};

export default MarkBonusUsedButton;
