import CurrentSearch from "../Sidebar/CurrentSearch";

export default function Filters({ searchValue }: { searchValue: string }) {
  return (
    <div>
      <div className="md:tw-hidden">
        {searchValue ? <CurrentSearch searchValue={searchValue} /> : ''}
      </div>
      <div className="tw-flex tw-gap-3 tw-py-1">
        <div className=" tw-items-center tw-flex tw-gap-2">
          <div className="tw-items-center tw-flex tw-gap-2">
            <button 
              aria-label="Navigeer naar vorige pagina"
              className="tw-py-2 tw-px-2 tw-rounded-full hover:tw-bg-black/20 tw-inline-flex hover:tw-no-underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
            </button>
            <button 
              aria-label="Navigeer naar volgende pagina"
              className="tw-py-2 tw-px-2 tw-rounded-full hover:tw-bg-black/20 tw-inline-flex hover:tw-no-underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
            </button>
          </div>
          <div className="tw-hidden sm:tw-block md:tw-hidden lg:tw-block">
            Pagina 1 van 8
          </div>
        </div>
        <div className="tw-ml-auto">
          <div className="tw-flex tw-items-center">
            <span className="tw-mr-2">Sorteer</span>
            <div className="tw-relative tw-w-[var(--width)]">
              <label>
                <div className="tw-sr-only">Sorteer zoekresultaten</div>
                <select className="tw-px-4 tw-py-2 tw-rounded-full tw-w-full tw-appearance-none">
                  <option value="">Relevantie</option>
                  <option value="school">Prijs</option>
                  <option value="school-desc">Prijs aflopend</option>
                  <option value="booking">Populariteit</option>
                  <option value="booking-desc">Populariteit aflopend</option>
                </select>
                <div className="tw-pointer-events-none tw-absolute tw-right-2 tw-top-1/2 -tw-translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                </div>
                <div className="tw-absolute tw-right-[1.875rem] tw-top-[8px] tw-pointer-events-none tw-bg-gray-800 tw-text-white tw-text-sm tw-px-1 tw-py-0.5 tw-hidden">1</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
