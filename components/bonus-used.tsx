'use client';

import React, { useState, useEffect } from 'react';

type BonusUsedProps = {
  slug: string;
};

const BonusUsed = ({ slug }: BonusUsedProps) => {
  const [isUsed, setIsUsed] = useState(false);

  useEffect(() => {
    const bonusUsed = localStorage.getItem(`bonus-used-${slug}`);
    if (bonusUsed === 'true') {
      setIsUsed(true);
    }
  }, [slug]);

  const handleToggleBonus = () => {
    const newIsUsed = !isUsed;
    setIsUsed(newIsUsed);
    localStorage.setItem(`bonus-used-${slug}`, newIsUsed.toString());
  };

  return (
    <button
      className={`${
        isUsed ? 'bg-green-500' : 'bg-primary'
      } text-white font-semibold py-2 px-4 rounded-lg`}
      onClick={handleToggleBonus}
    >
      {isUsed ? 'Boonus kasutatud' : 'Märgi boonus kasutatuks'}
    </button>
  );
};

export default BonusUsed;
