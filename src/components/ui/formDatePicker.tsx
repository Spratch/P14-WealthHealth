import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@sanity/icons";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DatePicker,
  DatePickerProps,
  DateSegment,
  DateValue,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Popover,
  ValidationResult
} from "react-aria-components";

interface FormDatePickerProps<T extends DateValue> extends DatePickerProps<T> {
  label?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export default function FormDatePicker<T extends DateValue>({
  label,
  errorMessage,
  ...props
}: FormDatePickerProps<T>) {
  return (
    <DatePicker
      className={"flex flex-col gap-1 w-full"}
      {...props}
    >
      <Label>{label}</Label>
      <Group
        className={
          "bg-white dark:bg-neutral-800 border border-neutral-200 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-500 rounded-md flex focus-visible"
        }
      >
        <DateInput className={"flex-grow flex p-2"}>
          {(segment) => (
            <DateSegment
              segment={segment}
              className={
                "px-0.5 tabular-nums outline-none rounded focus:bg-lime-300 dark:focus:bg-lime-700 caret-transparent"
              }
            />
          )}
        </DateInput>
        <Button
          className={
            "border-l rounded-r-md border-neutral-200 dark:border-neutral-700 px-2 pressed:bg-lime-100 dark:pressed:bg-lime-950 focus"
          }
        >
          <CalendarIcon className="size-7" />
        </Button>
      </Group>
      <FieldError>{errorMessage}</FieldError>
      <Popover className="overflow-auto rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
        <Dialog className="p-6 text-neutral-900 dark:text-neutral-100 outline-0">
          <Calendar firstDayOfWeek="mon">
            <header className="flex items-center gap-1 pb-4 px-1 w-full">
              <Heading className="flex-1 font-semibold text-lg ml-2" />
              <Button
                slot="previous"
                className="border border-neutral-200 dark:border-neutral-700 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer focus"
              >
                <ChevronLeftIcon className="size-7" />
              </Button>
              <Button
                slot="next"
                className="border border-neutral-200 dark:border-neutral-700 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer focus"
              >
                <ChevronRightIcon className="size-7" />
              </Button>
            </header>
            <CalendarGrid className="border-spacing-1 border-separate">
              <CalendarGridHeader>
                {(day) => (
                  <CalendarHeaderCell className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold pb-1">
                    {day}
                  </CalendarHeaderCell>
                )}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className="size-8.5 outline-none cursor-pointer rounded-full flex items-center justify-center outside-month:text-neutral-300 dark:outside-month:text-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 pressed:bg-neutral-200 dark:pressed:bg-neutral-600 selected:bg-lime-600 dark:selected:bg-lime-400 selected:text-white dark:selected:text-black focus-visible-ring"
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </DatePicker>
  );
}
