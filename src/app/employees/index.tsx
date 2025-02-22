import { AddUserIcon, UsersIcon } from "@sanity/icons";
import Hero from "../../components/layout/hero";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import EmptyList from "../../components/employees/empty";

export default function Employees() {
  const employees = useSelector((state: RootState) => state.employees);
  return (
    <>
      <Hero
        title="Current employees"
        description="View all employees currently in the system."
        Icon={UsersIcon}
      />

      {!employees.employees.length ? (
        <EmptyList
          title="No employees found."
          description="There are currently no employees in the system."
          cta={{
            text: "Create a new employee",
            to: "/",
            Icon: AddUserIcon
          }}
        />
      ) : (
        <section className="flex flex-col items-center w-full max-w-7xl mx-auto py-5 md:py-12 relative ">
          <div className="grid grid-cols-9 w-full p-4 sticky top-5 md:top-12 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-t-lg">
            <p>First name</p>
            <p>Last name</p>
            <p>Date of birth</p>
            <p>Start date</p>
            <p>Street</p>
            <p>City</p>
            <p>State</p>
            <p>Zip code</p>
            <p>Department</p>
          </div>
          {employees.employees.map((employee) => (
            <div
              key={employee.id}
              className="grid grid-cols-9 border-b border-neutral-200 dark:border-neutral-700 w-full p-4 odd:bg-neutral-100 dark:odd:bg-neutral-900"
            >
              <p className="">{employee.firstName}</p>
              <p className="">{employee.lastName}</p>
              <p className="">{employee.dateOfBirth}</p>
              <p className="">{employee.startDate}</p>
              <p className="">{employee.address.street}</p>
              <p className="">{employee.address.city}</p>
              <p className="">{employee.address.state}</p>
              <p className="">{employee.address.zipCode}</p>
              <p className="">{employee.department}</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
