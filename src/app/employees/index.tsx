import { AddUserIcon, CloseIcon, SearchIcon, UsersIcon } from "@sanity/icons";
import Hero from "../../components/layout/hero";
import { useDispatch } from "react-redux";
import EmptyList from "../../components/employees/empty";
import EmployeesTable from "../../components/employees/table";
import employees from "../../datas/MOCK_DATA.json";
import FormSelect from "../../components/ui/formSelect";
import { Button, Input, Key, SearchField } from "react-aria-components";
import useTablePagination from "../../hooks/useTablePagination";
import {
  setPageSize,
  setSearchTerm
} from "../../redux/features/pagination.slice";

export default function Employees() {
  const dispatch = useDispatch();
  const { totalItems, pageSize } = useTablePagination();
  const lengthOptions = ["10", "25", "50", "100"];

  const handlePageSizeChange = (value: Key | null) => {
    if (value !== null) {
      dispatch(setPageSize(parseInt(value.toString(), 10)));
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
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
          <div className="flex w-full justify-between items-end gap-5">
            <FormSelect
              label={`${pageSize} / ${totalItems} employees`}
              options={lengthOptions}
              defaultInputValue={pageSize.toString()}
              onSelectionChange={handlePageSizeChange}
            />
            <SearchField
              aria-label="Search employees"
              autoFocus
              onClear={() => dispatch(setSearchTerm(""))}
              className="group flex items-center bg-white dark:bg-neutral-800 border border-neutral-200 has-focus:border-neutral-300 dark:border-neutral-700 dark:has-focus:border-neutral-500 p-2 rounded-md has-focus"
            >
              <SearchIcon
                aria-hidden
                className="size-6 opacity-50"
              />
              <Input
                onChange={handleSearchChange}
                className="ml-2 outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              <Button
                type="reset"
                className="rounded-full p-1 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors group-empty:invisible"
              >
                <CloseIcon
                  aria-hidden
                  className="size-4"
                />
              </Button>
            </SearchField>
          </div>
          <EmployeesTable />
        </section>
      )}
    </>
  );
}
