import { AddUserIcon, UsersIcon } from "@sanity/icons";
import Hero from "../../components/layout/hero";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import EmptyList from "../../components/employees/empty";
import EmployeesTable from "../../components/employees/table";
import employees from "../../datas/MOCK_DATA.json";
import FormSelect from "../../components/ui/formSelect";
import { useState } from "react";
import { Key } from "react-aria-components";

export default function Employees() {
  const employeesState = useSelector((state: RootState) => state.employees);
  const lengthOptions = ["10", "25", "50", "100"];
  const [tableLength, setTableLength] = useState<Key>(lengthOptions[0]);

  return (
    <>
      <Hero
        title="Current employees"
        description="View all employees currently in the system."
        Icon={UsersIcon}
      />

      {!employees.length ? (
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
        <section className="flex-1 max-h-full min-h-0 flex flex-col items-start w-full max-w-7xl mx-auto py-5 gap-5">
          <FormSelect
            label="Entries per page"
            options={lengthOptions}
            defaultInputValue={tableLength as string}
            onSelectionChange={(key) => key !== null && setTableLength(key)}
          />
          <EmployeesTable
            employeesState={employeesState}
            tableLength={parseInt(tableLength as string, 10)}
          />
        </section>
      )}
    </>
  );
}
