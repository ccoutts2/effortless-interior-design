interface PageHeaderProps {
  header: string;
}

export const PageHeader = ({ header }: PageHeaderProps) => {
  return (
    <section className="relative p-4 pt-6 md:p-12 lg:px-32">
      <div className="absolute inset-0 flex items-center px-4 md:px-12 lg:px-32">
        <div className="w-full border-b border-[#5d3a40]"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-[#f3eee8] px-4 text-2xl capitalize md:text-4xl">
          {header}
        </span>
      </div>
    </section>
  );
};
