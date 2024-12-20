'use client';

type BonusValidProps = {
  date: Date | null;
};

const BonusValid = ({ date }: BonusValidProps) => {
  if (!date) {
    return <p className="text-muted-foreground font-semibold mb-4">Boonuse kehtivus pole teada</p>;
  }

  const currentDate = new Date();
  const isBonusValid = currentDate <= date;

  if (isBonusValid) {
    return (
      <p className="text-green-500 font-semibold mb-4">
        Boonus kehtib kuni{' '}
        {date.toLocaleDateString('et-EE', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </p>
    );
  }

  return <p className="text-red-500 font-semibold mb-4">Boonus on aegunud</p>;
};

export default BonusValid;
