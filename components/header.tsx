import Image from 'next/image';
import { Link } from 'next-view-transitions';
import ToggleDarkModeButton from './toggle-dark-mode-button';

import slotMachine from '@/assets/slot-machine.gif';

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
      <div className="absolute top-0 right-0 m-4 opacity-0 hover:opacity-100 ">
        <ToggleDarkModeButton />
      </div>
    </header>
  );
};

export default Header;
