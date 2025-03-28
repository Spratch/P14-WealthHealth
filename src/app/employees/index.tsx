import {
  AddUserIcon,
  EnvelopeIcon,
  ErrorOutlineIcon,
  SpinnerIcon,
  UsersIcon
} from "@sanity/icons";
import Hero from "../../components/layout/hero";
import { useDispatch, useSelector } from "react-redux";
import EmptyList from "../../components/employees/empty";
import WHTable from "../../components/employees/table";
import { Key } from "react-aria-components";
import useTablePagination from "../../hooks/useTablePagination";
import {
  setPageSize,
  setSearchTerm
} from "../../redux/features/pagination.slice";
import SearchBox from "../../components/ui/searchBox";
import LengthSelect from "../../components/ui/lengthSelect";
import { RootState } from "../../redux/store";

export default function Employees() {
  const dispatch = useDispatch();
  const employeesState = useSelector((state: RootState) => state.employees);
  const { totalItems, pageSize } = useTablePagination(employeesState.employees);
  const lengthOptions = ["10", "25", "50", "100"];
  const columnsTitles = [
    { id: "firstName", title: "First Name" },
    { id: "lastName", title: "Last Name" },
    { id: "dateOfBirth", title: "Date of Birth" },
    { id: "startDate", title: "Start Date" },
    { id: "street", title: "Street" },
    { id: "city", title: "City" },
    { id: "state", title: "State" },
    { id: "zipCode", title: "Zip Code" },
    { id: "department", title: "Department" }
  ];

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

      {employeesState.status === "failed" ? (
        <EmptyList
          Icon={ErrorOutlineIcon}
          title="An error occurred."
          description={
            <>
              <span>
                There was an error while trying to fetch the employees.
              </span>
              <br />
              <span className="inline-block mt-1.5 text-red-600 dark:text-red-400 text-sm font-mono bg-red-50 dark:bg-red-950 py-2 px-3 rounded-md border border-red-200 dark:border-red-700">
                {employeesState.message}
              </span>
            </>
          }
          cta={{
            text: "Contact support",
            to: "mailto:support-hrnet@wealthhealth.net",
            Icon: EnvelopeIcon
          }}
        />
      ) : employeesState.status === "loading" ? (
        <EmptyList
          Icon={SpinnerIcon}
          title="Loading employees..."
          description="Please wait while we fetch the employees."
          isLoading
        />
      ) : !employeesState.employees.length ? (
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
          <WHTable
            columnsTitles={columnsTitles}
            label="Employees list"
            items={employeesState.employees}
          />
        </section>
      )}
    </>
  );
}
