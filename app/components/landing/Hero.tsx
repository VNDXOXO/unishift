export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_20%,#EAF8F3_0,transparent_34%),linear-gradient(180deg,#fff_0%,#FBFCFE_100%)] py-20 before:pointer-events-none before:absolute before:-right-[180px] before:-top-[160px] before:h-[470px] before:w-[470px] before:rounded-full before:border before:border-[#E2F3ED] before:content-[''] md:py-[82px] md:pb-[88px]"
      id="home"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 px-[22px] md:grid-cols-[1.02fr_.98fr] md:gap-[60px]">
        {/* Left copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4F0E6] bg-mint-pale px-3.5 py-2 text-xs font-extrabold tracking-wide text-[#23866F]">
            <i className="inline-block h-[7px] w-[7px] rounded-full bg-mint-dark" />
            MADE FOR UNIVERSITY LIFE
          </div>
          <h1 className="my-5 max-w-[610px] font-[Manrope] text-[clamp(42px,5.2vw,65px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-navy">
            Your studies come first.{" "}
            <em className="not-italic text-mint-dark">Your work fits in.</em>
          </h1>
          <p className="mb-7 max-w-[530px] text-[17px] leading-[1.75] text-muted max-md:text-[15px]">
            Find part-time opportunities that work around your university
            timetable. Discover flexible jobs, make the most of your free hours
            and build experience while you study.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-navy px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(23,27,96,.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#252B80]"
              href="#features"
            >
              Explore opportunities <span>→</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DDE2EC] bg-white px-5 py-3.5 text-sm font-bold text-navy transition-all duration-200 hover:border-mint hover:bg-mint-pale"
              href="#how-it-works"
            >
              See how it works
            </a>
          </div>
          <div className="mt-7 flex items-center gap-3 text-xs font-semibold text-[#778095]">
            <div className="flex pl-1">
              {["U", "S", "+"].map((letter) => (
                <span
                  key={letter}
                  className="-ml-1.5 grid h-[27px] w-[27px] place-items-center rounded-full border-2 border-white bg-gradient-to-br from-[#BDEBDA] to-[#5AB99E] text-[10px] font-extrabold text-[#145C4D] first:ml-0"
                >
                  {letter}
                </span>
              ))}
            </div>
            <span>A smarter way to balance study and work.</span>
          </div>
        </div>

        {/* Right visual — dashboard mock */}
        <div
          className="relative flex min-h-[390px] items-center justify-center md:min-h-[465px]"
          aria-label="Preview of the UniShift job matching dashboard"
        >
          {/* Blob */}
          <div className="absolute right-[5px] top-[35px] h-[310px] w-[310px] rounded-full bg-gradient-to-br from-[#E8F8F2] to-[#F2F5FF] md:h-[390px] md:w-[390px]" />

          {/* Card */}
          <div className="relative w-full max-w-[470px] -rotate-2 rounded-[22px] border border-[#E7EAF1] bg-white p-5 shadow-[0_28px_70px_rgba(23,27,96,.15)]">
            {/* Top */}
            <div className="flex items-center justify-between border-b border-[#EEF0F5] pb-4">
              <div>
                <div className="font-[Manrope] text-[15px] font-extrabold text-navy">
                  Opportunities for you
                </div>
                <div className="mt-0.5 text-[10px] text-[#939AAF]">
                  Based on your availability
                </div>
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-full bg-mint-pale font-extrabold text-mint-dark">
                U
              </div>
            </div>

            {/* Label */}
            <div className="mt-4 mb-2.5 text-[11px] font-bold text-[#7A8297]">
              JOBS THAT COULD FIT YOUR WEEK
            </div>

            {/* Job cards */}
            {[
              {
                icon: "C",
                iconCls: "bg-[#F0F2FF] text-navy",
                title: "Customer Support Assistant",
                meta: "Part-time · Colombo",
              },
              {
                icon: "M",
                iconCls: "bg-mint-pale text-[#21866F]",
                title: "Retail Team Member",
                meta: "Flexible shifts · Nearby",
              },
            ].map((job) => (
              <div
                key={job.title}
                className="mb-2 flex items-center gap-3 rounded-[13px] border border-[#EEF0F5] p-3"
              >
                <div
                  className={`grid h-[38px] w-[38px] shrink-0 place-items-center rounded-xl font-extrabold ${job.iconCls}`}
                >
                  {job.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <strong className="block text-xs text-[#242943]">
                    {job.title}
                  </strong>
                  <small className="text-[10px] text-[#9097A9]">
                    {job.meta}
                  </small>
                </div>
                <span className="rounded-full bg-[#E8F8F1] px-2 py-1.5 text-[10px] font-extrabold text-[#21866F]">
                  Good fit
                </span>
              </div>
            ))}

            {/* Schedule */}
            <div className="mt-4 rounded-[14px] bg-[#F8FAFC] p-3">
              <div className="mb-2.5 flex justify-between text-[11px] font-extrabold text-navy">
                <span>Your weekly availability</span>
                <span className="text-mint-dark">View timetable ↗</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {(
                  [
                    ["MON", true, false],
                    ["TUE", false, true],
                    ["WED", true, false],
                    ["THU", false, false],
                    ["FRI", true, false],
                  ] as const
                ).map(([day, busyOne, busyTwo]) => (
                  <div
                    className="rounded-lg border border-[#E9EDF3] bg-white p-[7px_3px] text-center text-[9px] text-[#7A8297]"
                    key={day}
                  >
                    <b className="mb-1.5 block text-[10px] text-navy">{day}</b>
                    <div
                      className={`mt-1 h-[17px] rounded ${
                        busyOne ? "bg-[#E8EAF8]" : "bg-[#DDF3EB]"
                      }`}
                    />
                    <div
                      className={`mt-1 h-[17px] rounded ${
                        busyTwo ? "bg-[#E8EAF8]" : "bg-[#DDF3EB]"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating note */}
          <div className="absolute bottom-[26px] right-0 rotate-3 rounded-[14px] bg-white p-3.5 px-4 text-[11px] text-muted shadow-[0_18px_55px_rgba(23,27,96,.10)] max-md:bottom-1">
            <strong className="mb-0.5 block text-sm text-[#21866F]">
              Study-work balance
            </strong>
            Find shifts around your free time
          </div>
        </div>
      </div>
    </section>
  );
}
