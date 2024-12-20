'use client';

import React, { useState, useEffect } from 'react';

type BonusUsedProps = {
  slug: string;
};

const BonusUsed = ({ slug }: BonusUsedProps) => {
  const [isUsed, setIsUsed] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State for initial loading only

  useEffect(() => {
    // Simulate a loading delay for the initial render
    const usedBonuses = JSON.parse(
      localStorage.getItem('used-bonuses') || '[]',
    );
    if (usedBonuses.includes(slug)) {
      setIsUsed(true);
    }
    setIsLoading(false);
  }, [slug]);

  const handleToggleBonus = () => {
    const usedBonuses = JSON.parse(
      localStorage.getItem('used-bonuses') || '[]',
    );
    let newUsedBonuses;

    if (isUsed) {
      newUsedBonuses = usedBonuses.filter(
        (bonusSlug: string) => bonusSlug !== slug,
      );
    } else {
      newUsedBonuses = [...usedBonuses, slug];
    }

    setIsUsed(!isUsed);
    localStorage.setItem('used-bonuses', JSON.stringify(newUsedBonuses));
  };

  if (isLoading) {
    return (
      <div className="w-full h-10 bg-gray-300 animate-pulse rounded-md"></div>
    );
  }

  return (
    <button
      className={`${
        isUsed ? 'bg-green-500' : 'bg-primary'
      } text-white font-semibold py-2 px-4 rounded`}
      onClick={handleToggleBonus}
    >
      {isUsed ? 'Boonus kasutatud' : 'Märgi boonus kasutatuks'}
    </button>
  );
};

export default BonusUsed;
