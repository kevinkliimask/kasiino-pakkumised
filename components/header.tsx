import { Link } from 'next-view-transitions';
import Image from 'next/image';

import slotMachine from '@/assets/slot-machine.gif';
import ThemeSwitcher from '@/components/theme-switcher';

const Header = async () => {
  return (
    <header>
      <div className="flex flex-col justify-center items-center gap-4 p-8">
        <Image unoptimized src={slotMachine} alt="slot machine" width={80} height={64} />
        <nav className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-8">
            <Link href="/">esileht</Link>
            <Link href="/edetabel">edetabel</Link>
          </div>
        </nav>
      </div>
      <div className="absolute top-0 right-0 p-4 opacity-0 hover:opacity-100 transition-all">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
