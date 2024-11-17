export const Toast = () => {
  return (
    <div
      className="absolute bottom-0 right-0 flex w-[fit-content] max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-lg bg-[#744442] p-4 text-[#f3eee8] shadow rtl:divide-x-reverse"
      role="alert"
    >
      <div className="text-sm font-normal">Email was successly sent!</div>
    </div>
  );
};
