"use client";

import {
  Cell,
  CellProps,
  Column,
  ColumnProps,
  Group,
  ResizableTableContainer,
  Row,
  RowProps,
  SortDescriptor,
  Table,
  TableBody,
  TableHeader
} from "react-aria-components";
import { Employee, EmployeesState } from "../../redux/features/employees.slice";
import { useMemo, useState } from "react";
import { ArrowUpIcon } from "@sanity/icons";
import employees from "../../datas/MOCK_DATA.json";

export default function EmployeesTable({
  employeesState,
  tableLength
}: {
  employeesState: EmployeesState;
  tableLength: number;
}) {
  // Add employees from the state to mocked data
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "firstName",
    direction: "ascending"
  });
  const sortedItems = useMemo(() => {
    const employeesList: Employee[] = [
      ...employeesState.employees,
      ...employees
    ];
    return employeesList.sort((a, b) => {
      const first = a[sortDescriptor.column as keyof Employee];
      const second = b[sortDescriptor.column as keyof Employee];
      let comparison = first.localeCompare(second);
      if (sortDescriptor.direction === "descending") {
        comparison *= -1;
      }
      return comparison;
    });
  }, [sortDescriptor, employeesState.employees]);

  const columnsTitles = [
    {
      id: "firstName",
      title: "First Name"
    },
    {
      id: "lastName",
      title: "Last Name"
    },
    {
      id: "dateOfBirth",
      title: "Date of Birth"
    },
    {
      id: "startDate",
      title: "Start Date"
    },
    {
      id: "street",
      title: "Street"
    },
    {
      id: "city",
      title: "City"
    },
    {
      id: "state",
      title: "State"
    },
    {
      id: "zipCode",
      title: "Zip Code"
    },
    {
      id: "department",
      title: "Department"
    }
  ];

  return (
    <ResizableTableContainer className="w-full overflow-auto scroll-pt-8 relative rounded-lg bg-white text-neutral-600 dark:bg-black dark:text-neutral-50 max-h-full">
      <Table
        aria-label="Employees table"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        className="border-separate border-spacing-0"
      >
        <TableHeader>
          {columnsTitles.map((column, index) => (
            <EmployeeColumn
              key={index}
              isRowHeader={index === 0}
              allowsSorting
              id={column.id}
            >
              {column.title}
            </EmployeeColumn>
          ))}
        </TableHeader>
        <TableBody>
          {sortedItems.slice(0, tableLength).map((employee) => {
            return (
              <EmployeeRow key={employee.id}>
                <EmployeeCell>{employee.firstName}</EmployeeCell>
                <EmployeeCell>{employee.lastName}</EmployeeCell>
                <EmployeeCell>{employee.dateOfBirth}</EmployeeCell>
                <EmployeeCell>{employee.startDate}</EmployeeCell>
                <EmployeeCell>{employee.street}</EmployeeCell>
                <EmployeeCell>{employee.city}</EmployeeCell>
                <EmployeeCell>{employee.state}</EmployeeCell>
                <EmployeeCell>{employee.zipCode}</EmployeeCell>
                <EmployeeCell>{employee.department}</EmployeeCell>
              </EmployeeRow>
            );
          })}
        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}

function EmployeeColumn(props: ColumnProps & { children: string }) {
  return (
    <Column
      {...props}
      className="sticky top-0 p-0 border-0 border-b border-solid border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 font-bold text-left cursor-default first-rounded-tl-lg last-rounded-tr-lg whitespace-nowrap outline-hidden"
    >
      {({ allowsSorting, sortDirection }) => (
        <div className="flex items-center pl-4 py-1">
          <Group
            role="presentation"
            tabIndex={-1}
            className="flex flex-1 items-center overflow-hidden outline-hidden rounded-sm focus-visible:ring-2 ring-lime-600 dark:ring-lime-400"
          >
            <span className="flex-1 truncate">{props.children}</span>
            {allowsSorting && (
              <span
                className={`ml-1 size-4 flex items-center justify-center transition ${
                  sortDirection === "descending" ? "rotate-180" : ""
                }`}
              >
                {sortDirection && <ArrowUpIcon className="size-4" />}
              </span>
            )}
          </Group>
        </div>
      )}
    </Column>
  );
}

function EmployeeRow<T extends object>(props: RowProps<T>) {
  return (
    <Row
      {...props}
      className="even:bg-neutral-100 dark:even:bg-neutral-900 selected:bg-neutral-600 selected:text-white cursor-default group outline-hidden focus-visible:outline-2 focus-visible:outline-neutral-600 focus-visible:-outline-offset-4 selected:focus-visible:outline-white"
    />
  );
}

function EmployeeCell(props: CellProps) {
  return (
    <Cell
      {...props}
      className={`px-4 py-2 truncate ${props.className} focus-visible:outline-2 focus-visible:outline-neutral-600 focus-visible:-outline-offset-4 `}
    />
  );
}
