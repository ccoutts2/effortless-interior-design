const SchemePageHeader = (props: { room: string }) => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 border border-solid border-black px-4 py-8 text-center">
      <h1 className="text-base font-normal capitalize">{props.room} schemes</h1>
      <p className="text-sm font-light italic">
        <span className="capitalize">elevate</span> your
        <span> {props.room}</span> with
        <span className="capitalize"> off the peg design schemes</span> tailored
        to you
      </p>
    </section>
  );
};

export default SchemePageHeader;
