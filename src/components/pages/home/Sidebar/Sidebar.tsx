'use client';

import Categories from "./Categories";
import CurrentSearch from "./CurrentSearch";

export default function Sidebar({ searchValue }: { searchValue: string }) {
  return (
    <aside>
      <div className="tw-mb-4">
        {searchValue
          ? <CurrentSearch searchValue={searchValue} />
          : <div className="tw-h-12"></div>}
      </div>
      <Categories />
    </aside>
  );
}
