import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useMemo } from "react";
import { Employee } from "../redux/features/employees.slice";
import employees from "../datas/MOCK_DATA.json";
import {
  setCurrentPage,
  setPageSize
} from "../redux/features/pagination.slice";

export default function useTablePagination() {
  const dispatch = useDispatch();
  const employeesState = useSelector((state: RootState) => state.employees);
  const pagination = useSelector((state: RootState) => state.pagination);

  const { currentPage, pageSize } = pagination;

  // Combine mocked data with employees from the state
  const processedData = useMemo(() => {
    const employeesList: Employee[] = [
      ...employeesState.employees,
      ...employees
    ];

    return employeesList;
  }, [employeesState.employees]);

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
    changePageSize
  };
}
