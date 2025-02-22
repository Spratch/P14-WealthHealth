import { AddUserIcon, UsersIcon } from "@sanity/icons";
import { Link } from "react-router";
import NavCta from "../ui/navCta";

export default function Header() {
  return (
    <header className="flex items-center py-4 border-b border-neutral-200 dark:border-neutral-700 sticky top-0 bg-neutral-50 dark:bg-neutral-950 z-10 px-4 md:px-8">
      <nav className="flex justify-between items-center gap-4 w-full max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl text-lime-600 hover:text-lime-800 dark:text-lime-400 dark:hover:text-lime-300 transition-colors"
        >
          HRnet
        </Link>

        <NavCta
          to="/employees"
          text="View current employees"
          Icon={UsersIcon}
        />
        <NavCta
          to="/"
          text="New employee"
          primary
          Icon={AddUserIcon}
        />
      </nav>
    </header>
  );
}
