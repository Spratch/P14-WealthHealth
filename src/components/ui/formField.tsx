type Props = {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
};

export default function FormField({
  id,
  label,
  type,
  value,
  onChange,
  autofocus = false
}: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="bg-white dark:bg-neutral-800 border border-neutral-200 focus:border-neutral-300 dark:border-neutral-700 dark:focus:border-neutral-500 p-2 rounded-md focus"
        autoFocus={autofocus}
      />
    </div>
  );
}
