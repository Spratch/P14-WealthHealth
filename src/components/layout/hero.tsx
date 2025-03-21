type Props = {
  title: string;
  description?: string;
  Icon?: React.ElementType;
};

export default function Hero({ title, description, Icon }: Props) {
  return (
    <section className="py-3 md:py-6 flex items-start md:items-center gap-4 md:gap-6 w-full max-w-7xl mx-auto">
      {/* Icon */}
      {Icon && (
        <div className="max-md:hidden max-md:mt-1 p-1.5 md:p-2 border border-lime-600 dark:border-lime-400 rounded-full text-lime-600 dark:text-lime-400">
          <Icon className="size-6 md:size-8" />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h1 className="text-2xl md:text-4xl text-lime-600 dark:text-lime-400">
          {title}
        </h1>
        {description && (
          <p
            className={`md:text-lg leading-tight text-neutral-500 dark:text-neutral-400 text-balance`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
