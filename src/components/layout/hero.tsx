type Props = {
  title: string;
  description?: string;
  Icon?: React.ElementType;
};

export default function Hero({ title, description, Icon }: Props) {
  return (
    <section className="py-6 flex items-center gap-4 md:gap-6 w-full max-w-7xl mx-auto">
      {/* Icon */}
      {Icon && (
        <div className="p-2 border border-lime-600 rounded-full text-lime-600">
          <Icon className="size-6 md:size-8" />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h1 className="text-2xl md:text-4xl">{title}</h1>
        {description && (
          <p className={`md:text-lg leading-tight text-neutral-500`}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
