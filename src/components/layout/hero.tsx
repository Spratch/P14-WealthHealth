type Props = {
  title: string;
  description?: string;
  Icon?: React.ElementType;
};

export default function Hero({ title, description, Icon }: Props) {
  return (
    <section className="py-6 flex flex-col items-start gap-2 w-full max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl flex items-center gap-4">
        {Icon && (
          <span className="p-2 border border-lime-600 rounded-full text-lime-600">
            <Icon className="size-6 md:size-8" />
          </span>
        )}
        {title}
      </h1>
      {description && (
        <p
          className={`md:text-lg leading-tight text-neutral-500 ${
            Icon && "ml-15 md:ml-18"
          }`}
        >
          {description}
        </p>
      )}
    </section>
  );
}
