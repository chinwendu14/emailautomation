export default function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Emails automated",
    },
    {
      value: "64%",
      label: "Average open rate",
    },
    {
      value: "24/7",
      label: "Automated follow-ups",
    },
  ];

  return (
    <section className="border-y bg-muted/20">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold">{stat.value}</p>

            <p className="mt-1 text-sm text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
