import { UsersIcon } from "@sanity/icons";
import Hero from "../../components/layout/hero";

export default function Employees() {
  return (
    <>
      <Hero
        title="Current employees"
        description="View all employees currently in the system."
        Icon={UsersIcon}
      />
    </>
  );
}
