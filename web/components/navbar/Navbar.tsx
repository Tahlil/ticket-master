import Link from 'next/link';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/schedule' },
  { label: "Your Tickets", path:"/ticket"},
  { label: 'Register Your Event Now!', path: '/event' }
];

export default function Navbar() {
  return (
    <div className="navbar bg-red-200 text-black flex-col md:flex-row space-y-2 md:space-y-0">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          {/* Your logo or site name */}
        </Link>
        <ul className="menu menu-horizontal px-1 space-x-2">
          {pages.map(({ label, path }) => (
            <li key={path}>
              <Link href={path}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Additional components/buttons */}
    </div>
  );
}
