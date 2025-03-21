import { AddUserIcon, UsersIcon } from "@sanity/icons";
import Hero from "../../components/layout/hero";
import { useDispatch } from "react-redux";
import EmptyList from "../../components/employees/empty";
import EmployeesTable from "../../components/employees/table";
import employees from "../../datas/MOCK_DATA.json";
import { Key } from "react-aria-components";
import useTablePagination from "../../hooks/useTablePagination";
import {
  setPageSize,
  setSearchTerm
} from "../../redux/features/pagination.slice";
import SearchBox from "../../components/ui/searchBox";
import LengthSelect from "../../components/ui/lengthSelect";

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
        <section className="flex-1 max-h-full min-h-0 flex flex-col items-start w-full max-w-7xl mx-auto py-5 gap-2 md:gap-5">
          <div className="flex flex-row-reverse md:flex-row w-full flex-wrap justify-between md:items-end gap-2 md:gap-5">
            <LengthSelect
              options={lengthOptions}
              totalItems={totalItems}
              selectedKey={pageSize.toString()}
              onSelectionChange={handlePageSizeChange}
            />
            <SearchBox handleSearchChange={handleSearchChange} />
          </div>
          <EmployeesTable />
        </section>
      )}
    </>
  );
}
