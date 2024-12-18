import { Link } from 'next-view-transitions';
import Image from 'next/image';

import slotMachine from '@/assets/slot-machine.gif';

const Header = async () => {
  return (
    <header className="flex flex-col justify-center items-center gap-4 p-8">
      <Image src={slotMachine} alt="slot machine" width={80} height={64} />
      <nav className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-8">
          <Link href="/">esileht</Link>
          <Link href="/edetabel">edetabel</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
