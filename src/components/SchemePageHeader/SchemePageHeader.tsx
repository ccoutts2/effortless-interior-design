const SchemePageHeader = ({ roomType }: { roomType: string }) => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 border border-solid border-black px-4 py-8 text-center">
      <h1 className="text-base font-normal capitalize">{roomType} schemes</h1>
      <p className="text-sm font-light italic">
        Elevate your <span className="capitalize">{roomType}</span> with Off the
        peg design schemes tailored to you
      </p>
    </section>
  );
};

export default SchemePageHeader;
