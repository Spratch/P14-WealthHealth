import { AddUserIcon } from "@sanity/icons";
import Hero from "../../components/layout/hero";
import FormSection from "../../components/home/formSection";

export default function Home() {
  return (
    <>
      <Hero
        title="Create employee"
        description="Add a new employee to the system."
        Icon={AddUserIcon}
      />

      <FormSection />
    </>
  );
}
