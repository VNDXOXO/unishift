export default function Employers() {
  return (
    <section
      className="scroll-mt-[88px] bg-surface py-16 md:py-[86px]"
      id="employers"
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <div className="flex flex-col items-start gap-8 rounded-3xl border border-[#D7F0E6] bg-mint-pale p-8 md:flex-row md:items-center md:justify-between md:p-11">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[1.5px] text-mint-dark">
              FOR EMPLOYERS
            </div>
            <h2 className="mt-2.5 max-w-[570px] font-[Manrope] text-[clamp(30px,4vw,43px)] font-extrabold leading-[1.17] tracking-[-1.5px] text-navy">
              Find motivated student talent for your team.
            </h2>
            <p className="max-w-[600px] leading-[1.7] text-muted">
              Connect with university students looking for part-time
              opportunities. Share your vacancies and reach people interested in
              flexible work.
            </p>
          </div>
          <a
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-transparent bg-navy px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(23,27,96,.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#252B80]"
            href="mailto:hello@unishift.lk?subject=Employer%20Enquiry"
          >
            I&apos;m hiring students ↗
          </a>
        </div>
      </div>
    </section>
  );
}
