import Link from 'next/link'

export default function Categories() {

  return (
      <nav>
        <ul className="tw-space-y-4">
          <li>
            <Link href="#" className="tw-font-bold tw-text-lg tw-text-gray-800 hover:tw-text-primary">Merk</Link>
            <ul className="tw-pl-4 tw-space-y-2">
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Sony</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li>
                    <Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Fotocamera&lsquo;s</Link>
                    <ul className="tw-pl-4 tw-space-y-1">
                      <li><Link href="#" className="tw-text-gray-500 hover:tw-text-primary">Systeemcamera&lsquo;s</Link></li>
                    </ul>
                  </li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Objectieven</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Audio & televisie</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Videocamera&lsquo;s</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Statieven</Link></li>
                </ul>
              </li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Canon</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Nikon</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Panasonic</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Fujifilm</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Sigma</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">DJI</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Leica</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#" className="tw-font-bold tw-text-lg tw-text-gray-800 hover:tw-text-primary">Product</Link>
            <ul className="tw-pl-4 tw-space-y-2">
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Fotocamera&lsquo;s</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Spiegelreflexcamera&lsquo;s</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Systeemcamera&lsquo;s</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Compactcamera&lsquo;s</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Instant camera&lsquo;s</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Meetzoekercamera&lsquo;s</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Objectieven</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Groothoek</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Telelens</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Prime lenzen</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Zoomlenzen</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Macro</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Statieven</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Driepootstatieven</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Monopods</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Gimbals</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Videocamera&lsquo;s</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">4K videocamera&lsquo;s</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Professionele videocamera&lsquo;s</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Drones</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Tassen</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Rugtassen</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Schoudertassen</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Rolkooien</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Studio</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Verlichting</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Achtergronden</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Beeldbewerking</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Software</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Grafische tw-tablets</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Audio & televisie</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Microfoons</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Koptelefoons</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Soundbars</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Monitoren</Link></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
  );
}
