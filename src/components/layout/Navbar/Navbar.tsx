'use client';

import { useSaveHeight } from '../SaveHeight';
import Favorites from './Favorites/Favorites';
import Image from 'next/image';
import Search from './Search';
import MobileSearch from './MobileSearch';
import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  useSaveHeight()

  return (
    <div className="tw-mb-16">
      <div className="md:tw-h-auto tw-fixed tw-top-0 tw-z-20 tw-w-full tw-bg-white tw-py-2 tw-px-3">
        <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between md:tw-h-10 tw-container tw-mx-auto">
          <Link href="/">
            <Image
              alt="logo"
              width="163"
              height="33"
              className="tw-h-12 tw-absolute tw-top-1 tw-object-contain"
              src="/logo/logo desktop.svg"
            />
          </Link>
          <div className="tw-w-full tw-text-center md:tw-mt-0 md:tw-flex md:tw-w-auto tw-hidden">
            <Search />
          </div>
          <div className="tw-flex tw-gap-6">
            <div>
              <Favorites />
            </div>
            <div className="md:tw-hidden">
              <button 
                aria-label="Toggle mobiele menu"
                onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} 
                className="tw-h-10 tw-w-10 tw-justify-items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
              </button>
              {mobileMenuIsOpen ? <MobileSearch close={() => setMobileMenuIsOpen(false)} /> : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
