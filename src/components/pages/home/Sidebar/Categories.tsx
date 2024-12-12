import Link from 'next/link'

export default function Categories() {

  return (
      <nav>
        <ul className="tw-space-y-4">
          <li>
            <Link href="#" className="tw-font-bold tw-text-lg tw-text-gray-800 hover:tw-text-primary">Merk</Link>
            <ul className="tw-pl-4 tw-space-y-2">
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Mercedes-Benz</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li>
                    <Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Benzine</Link>
                    <ul className="tw-pl-4 tw-space-y-1">
                      <li><Link href="#" className="tw-text-gray-500 hover:tw-text-primary">Sedan</Link></li>
                      <li><Link href="#" className="tw-text-gray-500 hover:tw-text-primary">SUV</Link></li>
                      <li><Link href="#" className="tw-text-gray-500 hover:tw-text-primary">Coupé</Link></li>
                    </ul>
                  </li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Diesel</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Elektrisch</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Hybride</Link></li>
                </ul>
              </li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">BMW</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Audi</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Volkswagen</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Toyota</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Ford</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#" className="tw-font-bold tw-text-lg tw-text-gray-800 hover:tw-text-primary">Carrosserietype</Link>
            <ul className="tw-pl-4 tw-space-y-2">
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Sedan</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Compact</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Middelgrote Sedan</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Luxe Sedan</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">SUV</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Compact SUV</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Luxe SUV</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Middelgrote SUV</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Coupé</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Sport Coupé</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Luxe Coupé</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Convertible</Link>
                <ul className="tw-pl-4 tw-space-y-1">
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Targa</Link></li>
                  <li><Link href="#" className="tw-text-gray-600 hover:tw-text-primary">Cabriolet</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#" className="tw-font-bold tw-text-lg tw-text-gray-800 hover:tw-text-primary">Prijs</Link>
            <ul className="tw-pl-4 tw-space-y-2">
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Onder €20.000</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">€20.000 - €40.000</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">€40.000 - €60.000</Link></li>
              <li><Link href="#" className="tw-font-semibold tw-text-gray-700 hover:tw-text-primary">Boven €60.000</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
  );
}
