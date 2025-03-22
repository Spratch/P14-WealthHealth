import { Outlet } from "react-router";
import Header from "./header";
import { useEffect } from "react";
import { fetchEmployees } from "../../redux/features/employees.slice";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Layout() {
  const dispatch = useDispatch<AppDispatch>();
  const employeesStatus = useSelector(
    (state: RootState) => state.employees.status
  );

  useEffect(() => {
    if (employeesStatus === "idle") {
      dispatch(fetchEmployees());
    }
  }, [employeesStatus, dispatch]);
  return (
    <div className="flex flex-col justify-start w-full min-h-screen">
      <Header />
      <main className="flex-grow bg-neutral-50 dark:bg-neutral-950 text-black dark:text-white flex flex-col items-center justify-start px-4 md:px-8 w-full has-[table]:h-[calc(100vh-4.6875rem)]">
        <Outlet />
      </main>
    </div>
  );
}
