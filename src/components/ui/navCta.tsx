import { NavLink } from "react-router";

type Props = {
  to: string;
  text: string;
  primary?: boolean;
  Icon?: React.ElementType;
};

export default function NavCta({ to, text, primary = false, Icon }: Props) {
  return (
    <NavLink
      to={to}
      className={`aria-current:hidden px-4 py-2 border border-lime-600 transition-colors rounded-full flex items-center gap-2 focus:outline-2 focus:outline-offset-2 focus:outline-lime-600
        ${
          primary
            ? "bg-lime-600 hover:bg-lime-700 text-white"
            : "bg-neutral-100 hover:bg-lime-200 text-lime-600"
        }
        `}
    >
      {Icon && <Icon className="size-6" />}
      {text}
    </NavLink>
  );
}
