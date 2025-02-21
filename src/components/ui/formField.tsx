type Props = {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormField({ id, label, type, value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="bg-white border border-neutral-200 focus:border-neutral-300 p-2 rounded-md focus"
      />
    </div>
  );
}
