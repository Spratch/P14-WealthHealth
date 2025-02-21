import { Outlet } from "react-router";
import Header from "./header";

export default function Layout() {
  return (
    <div className="flex flex-col justify-start w-full min-h-screen">
      <Header />
      <main className="flex-grow bg-neutral-50 flex flex-col items-center justify-start px-4 md:px-8 w-full">
        <Outlet />
      </main>
    </div>
  );
}
