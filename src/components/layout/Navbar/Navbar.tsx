'use client'; 

import Image from 'next/image';
import Search from './Search';
import Favorites from './Favorites';

export default function Navbar() {
  return (
    <div className="tw-mb-14">
      <div className="lg:tw-h-auto tw-fixed tw-top-0 tw-z-20 tw-w-full tw-bg-white tw-py-2 tw-px-3">
        <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between md:tw-h-10 tw-container tw-mx-auto">
          <a href="/">
            <Image
              alt="logo"
              width="163"
              height="33"
              className="tw-h-12 tw-absolute tw-top-1 tw-object-contain"
              src="/logo/logo desktop.svg"
            />
          </a>
          <div className="tw-w-full tw-text-center lg:tw-mt-0 lg:tw-flex lg:tw-w-auto tw-hidden">
            <Search />
          </div>
          <div>
            <Favorites />
          </div>
        </div>
      </div>
    </div>
  );
}
