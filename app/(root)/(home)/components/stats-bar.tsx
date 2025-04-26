interface Stat {
  _id: string;
  label: string;
  value: string;
  description: string;
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  // const stats = [
  //   {
  //     value: "0.1",
  //     label: "PIP SPREADS*",
  //     description: "Ultra-tight spreads for major currency pairs",
  //   },
  //   {
  //     value: "500:1",
  //     label: "LEVERAGE",
  //     description: "Maximize your trading potential with high leverage",
  //   },
  //   {
  //     value: "~30MS",
  //     label: "EXECUTIONS",
  //     description: "Lightning-fast trade execution speed",
  //   },
  //   {
  //     value: "+200",
  //     label: "TRADABLE INSTRUMENTS",
  //     description: "Wide range of markets to trade",
  //   },
  //   {
  //     value: "24/5",
  //     label: "SUPPORT",
  //     description: "Round-the-clock customer support",
  //   },
  // ];

  return (
    <section className="bg-black dark:bg-black/90 text-white py-8 overflow-hidden border-b border-neon-500/20 dark:border-neon-500/30 transition-colors duration-300">
      <div className="relative">
        {/* Marquee container */}
        <div className="flex overflow-hidden whitespace-nowrap">
          {/* Animated marquee content */}
          <div className="flex items-center justify-center animate-marquee">
            {stats.map((stat) => (
              <div key={stat._id} className="mx-8 inline-block">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-neon-400 dark:text-neon-500 text-center">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium mb-1 text-center">
                  {stat.label}
                </div>
                <div className="text-xs text-neon-500/70 dark:text-neon-400/70 text-center w-full hidden md:block">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate for seamless looping */}
          <div className="flex items-center justify-center animate-marquee2 absolute top-0">
            {stats.map((stat) => (
              <div key={stat._id} className="mx-8 inline-block">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-neon-400 dark:text-neon-500 text-center">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium mb-1 text-center">
                  {stat.label}
                </div>
                <div className="text-xs text-neon-500/70 dark:text-neon-400/70 text-center w-full hidden md:block">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
