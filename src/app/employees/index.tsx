import { AddUserIcon, UsersIcon } from "@sanity/icons";
import Hero from "../../components/layout/hero";
import { useDispatch } from "react-redux";
import EmptyList from "../../components/employees/empty";
import EmployeesTable from "../../components/employees/table";
import employees from "../../datas/MOCK_DATA.json";
import FormSelect from "../../components/ui/formSelect";
import { Key } from "react-aria-components";
import useTablePagination from "../../hooks/useTablePagination";
import { setPageSize } from "../../redux/features/pagination.slice";

export default function Employees() {
  const dispatch = useDispatch();
  const { totalItems, pageSize } = useTablePagination();
  const lengthOptions = ["10", "25", "50", "100"];

  const handlePageSizeChange = (value: Key | null) => {
    if (value !== null) {
      dispatch(setPageSize(parseInt(value.toString(), 10)));
    }
  };

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
            label={`${pageSize} / ${totalItems} employees`}
            options={lengthOptions}
            defaultInputValue={pageSize.toString()}
            onSelectionChange={handlePageSizeChange}
          />
          <EmployeesTable />
        </section>
      )}
    </>
  );
}
