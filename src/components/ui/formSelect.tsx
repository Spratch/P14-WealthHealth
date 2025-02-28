import { ChevronDownIcon } from "@sanity/icons";
import {
  Button,
  ComboBox,
  ComboBoxProps,
  FieldError,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  ValidationResult
} from "react-aria-components";

interface FormSelectProps<T extends object> extends ComboBoxProps<T> {
  label: string;
  options: { id: string; name: string }[];
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function FormSelect<T extends object>({
  label,
  options,
  errorMessage = "Please select an option",
  ...props
}: FormSelectProps<T>) {
  return (
    <ComboBox
      className="flex flex-col gap-1"
      {...props}
    >
      <Label>{label}</Label>
      <div className="relative">
        <Input className="bg-white dark:bg-neutral-800 border border-neutral-200 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-500 p-2 rounded-md focus appearance-none w-full" />
        <Button className="absolute right-0 top-0 m-1.25 pressed:-rotate-180 transition-transform">
          <ChevronDownIcon className={`size-8`} />
        </Button>
      </div>
      <FieldError>{errorMessage}</FieldError>
      <Popover
        className="overflow-auto rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 "
        maxHeight={320}
        style={{ width: "var(--trigger-width)" }}
      >
        <ListBox className="py-2 text-neutral-900 dark:text-neutral-100 outline-0">
          {options.map((option) => {
            return (
              <ListBoxItem
                key={option.id}
                id={option.id}
                className="pl-3 pr-5 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 selected:bg-lime-200 dark:selected:bg-lime-700"
              >
                {option.name}
              </ListBoxItem>
            );
          })}
        </ListBox>
      </Popover>
    </ComboBox>
  );
}
