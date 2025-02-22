import { ChevronDownIcon } from "@sanity/icons";

type Props = {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function FormSelect({
  id,
  label,
  options,
  value,
  onChange
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className="bg-white dark:bg-neutral-800 border border-neutral-200 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-500 p-2 rounded-md focus appearance-none w-full"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-0 top-0 m-1.25 size-8" />
      </div>
    </div>
  );
}
