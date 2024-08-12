import Link from 'next/link';

const MenuMain = () => {
  return (
    <nav>
      <ul className="flex gap-4 justify-center items-center text-white">
        <li>
          <Link href="/#concept" className="transition-colors hover:text-slate-300">
            Concept
          </Link>
        </li>
        <li>
          <Link href="/#concept" className="transition-colors hover:text-slate-300">
            Musique
          </Link>
        </li>
        <li>
          <Link href="/#concept" className="transition-colors hover:text-slate-300">
            Evenements
          </Link>
        </li>
        <li>
          <Link href="/#concept" className="transition-colors hover:text-slate-300">
            Groupe
          </Link>
        </li>
        <li>
          <Link href="/#concept" className="transition-colors hover:text-slate-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMain;
