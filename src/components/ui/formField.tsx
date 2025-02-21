type Props = {
  id: string;
  label: string;
  type: string;
};

export default function FormField({ id, label, type }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
      />
    </div>
  );
}
