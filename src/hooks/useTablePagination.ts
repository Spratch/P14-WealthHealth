import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useMemo } from "react";
import { Employee } from "../redux/features/employees.slice";
import employees from "../datas/MOCK_DATA.json";
import {
  setCurrentPage,
  setPageSize,
  setSortOrder
} from "../redux/features/pagination.slice";
import { SortDescriptor } from "react-aria-components";

export default function useTablePagination() {
  const dispatch = useDispatch();
  const employeesState = useSelector((state: RootState) => state.employees);
  const pagination = useSelector((state: RootState) => state.pagination);

  const { currentPage, pageSize, sortColumn, sortDirection, searchTerm } =
    pagination;

  // Combine mocked data with employees from the state
  const processedData = useMemo(() => {
    const employeesList: Employee[] = [
      ...employeesState.employees,
      ...employees
    ];

    // Filter data
    let filteredList = employeesList;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredList = employeesList.filter((employee) => {
        return Object.values(employee).some((value) => {
          if (typeof value === "string") {
            return value.toLowerCase().includes(term);
          }
          return false;
        });
      });
    }

    // Sort data
    const sortedList = [...filteredList].sort((a, b) => {
      const first = a[sortColumn as keyof Employee];
      const second = b[sortColumn as keyof Employee];

      if (typeof first === "string" && typeof second === "string") {
        const result = first.localeCompare(second);
        return sortDirection === "ascending" ? result : -result;
      }
      return 0;
    });

    return sortedList;
  }, [employeesState.employees, sortColumn, sortDirection, searchTerm]);

  // Get paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return processedData.slice(startIndex, startIndex + pageSize);
  }, [currentPage, pageSize, processedData]);

  // Get total pages
  const totalPages = Math.ceil(processedData.length / pageSize);

  // Pagination actions
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  const changePageSize = (size: number) => {
    dispatch(setPageSize(size));
  };

  const handleSortChange = (descriptor: SortDescriptor) => {
    if (descriptor.column) {
      dispatch(
        setSortOrder({
          column: descriptor.column,
          direction: descriptor.direction
        })
      );
    }
  };

  return {
    // Data
    currentPageData: paginatedData,
    allData: processedData,

    // Pagination
    currentPage,
    pageSize,
    totalPages,
    totalItems: processedData.length,

    // Actions
    goToPage,
    nextPage: () => goToPage(currentPage + 1),
    prevPage: () => goToPage(currentPage - 1),
    changePageSize,

    // Sorting
    sortDescriptor: {
      column: sortColumn,
      direction: sortDirection
    },
    handleSortChange
  };
}
