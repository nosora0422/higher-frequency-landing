const stats = [
  { value: "17%", label: "Lost to fraud" },
  { value: "42%", label: "Blocked by ad blockers" },
  { value: "~2min", label: "To your first link" },
  { value: "$0", label: "To join" },
];

export default function StatStrip() {
  return (
    <section className="grid grid-cols-2 border-y border-border-grey lg:flex">
      {stats.map((stat, i) => {
        const isLastCol = i % 2 === 1;
        const isLastRow = i >= stats.length - 2;
        return (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-1 px-4 py-5 lg:flex-1 lg:border-b-0 lg:px-[16px] lg:py-[22px] ${
              !isLastCol ? "border-r border-border-grey" : ""
            } ${!isLastRow ? "border-b border-border-grey" : ""} ${
              i < stats.length - 1 ? "lg:border-r lg:border-border-grey" : "lg:border-r-0"
            }`}
          >
            <p className="font-display font-bold text-[32px] text-deep-blue lg:text-[48px]">
              {stat.value}
            </p>
            <p className="text-center text-[12px] font-semibold tracking-[0.5px] text-text-grey-light lg:text-[13px]">
              {stat.label}
            </p>
          </div>
        );
      })}
    </section>
  );
}
