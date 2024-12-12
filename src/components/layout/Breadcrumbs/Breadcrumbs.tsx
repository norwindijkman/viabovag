export default function Breadcrumbs() {
  return (
    <div className="">
      <div
        className="tw-w-full tw-left-0 tw-top-[var(--sticky-header-height)] tw-z-10 {className}"
      >
        <div className="tw-container tw-mx-auto">
          <nav aria-label="Breadcrumbs">
            <div className="tw-flex">
              <ol
                className="tw-hidden md:tw-inline-flex tw-py-1.5 tw-items-center tw-space-x-1 tw-text-xs md:tw-space-x-3 md:tw-text-sm"
              >
                <li className="tw-inline-flex tw-items-center">
                  <a
                    href="#"
                    rel="prefetch"
                    className="tw-inline-flex tw-items-center tw-font-medium tw-text-gray-900 hover:tw-text-[#496361] dark:tw-text-stone-300 dark:hover:tw-text-white"
                  >
                    Merk
                  </a>
                </li>
                <li>
                  <div className="tw-flex tw-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                    <a
                      href="#"
                      className="tw-ml-1 tw-font-medium tw-text-gray-900 hover:tw-text-[#496361] dark:tw-text-stone-300 dark:hover:tw-text-white md:tw-ml-2"
                    >
                      Mercedes-Benz
                    </a>
                  </div>
                </li>
                <li>
                  <div className="tw-flex tw-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                    <a
                      href="#"
                      className="tw-ml-1 tw-font-medium tw-text-gray-900 hover:tw-text-[#496361] dark:tw-text-stone-300 dark:hover:tw-text-white md:tw-ml-2"
                    >
                      Benzine
                    </a>
                  </div>
                </li>
                <li>
                  <div className="tw-flex tw-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                    <a
                      href="#"
                      className="tw-ml-1 tw-font-medium tw-text-gray-900 hover:tw-text-[#496361] dark:tw-text-stone-300 dark:hover:tw-text-white md:tw-ml-2"
                    >
                      Sedan
                    </a>
                  </div>
                </li>
              </ol>
              <div className="md:tw-hidden tw-ml-4">
                <a
                  className="tw-flex tw-font-medium tw-text-gray-900 hover:tw-text-[#496361] dark:tw-text-stone-300 dark:hover:tw-text-white md:tw-ml-2"
                  href="#"
                >
                  <svg
                    className="tw-mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                  </svg>
                  Mercedes-Benz
                </a>
              </div>
              <div className="tw-hidden md:tw-block tw-ml-auto tw-py-1.5">
                <a
                  className="tw-flex tw-font-medium tw-text-gray-900 hover:tw-text-[#496361] dark:tw-text-stone-300 dark:hover:tw-text-white md:tw-ml-2"
                  href="#"
                >
                  <svg
                    className="tw-mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                  </svg>
                  Back
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
