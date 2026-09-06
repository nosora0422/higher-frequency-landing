const stats = [
  { value: "17%", label: "Lost to fraud" },
  { value: "42%", label: "Blocked by ad blockers" },
  { value: "~2min", label: "To your first link" },
  { value: "$0", label: "To join" },
];

export default function StatStrip() {
  return (
    <section className="flex border-y border-border-grey">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-1 flex-col items-center gap-1 px-[16px] py-[22px] ${
            i < stats.length - 1 ? "border-r border-border-grey" : ""
          }`}
        >
          <p className="font-display font-bold text-[48px] text-deep-blue">{stat.value}</p>
          <p className="text-center text-[13px] font-semibold tracking-[0.5px] text-text-grey-light">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
