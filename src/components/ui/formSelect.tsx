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
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="bg-white border border-neutral-200 focus:border-neutral-300 p-2 rounded-md focus"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
