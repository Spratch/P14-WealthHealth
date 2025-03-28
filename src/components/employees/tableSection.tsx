import { Key } from "react-aria-components";
import useTablePagination from "../../hooks/useTablePagination";
import LengthSelect from "../ui/lengthSelect";
import SearchBox from "../ui/searchBox";
import WHTable from "./table";
import { useDispatch } from "react-redux";
import {
  setPageSize,
  setSearchTerm
} from "../../redux/features/pagination.slice";

type Props = {
  items: Record<string, string>[];
  lengthOptions: string[];
  columnsTitles: { id: string; title: string }[];
};

export default function TableSection({
  items,
  lengthOptions,
  columnsTitles
}: Props) {
  const { totalItems, pageSize } = useTablePagination(items);

  const dispatch = useDispatch();

  const handlePageSizeChange = (value: Key | null) => {
    if (value !== null) {
      dispatch(setPageSize(parseInt(value.toString(), 10)));
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
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
        items={items}
      />
    </section>
  );
}
