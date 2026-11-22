export default function CallToAction() {
  return (
    <section
      className="scroll-mt-[88px] bg-white py-16 md:py-[76px]"
      id="get-started"
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-r from-[#171B60] to-[#27317F] px-8 py-14 text-center text-white before:pointer-events-none before:absolute before:-left-[100px] before:-top-[150px] before:h-[270px] before:w-[270px] before:rounded-full before:border before:border-white/[.12] before:content-[''] after:pointer-events-none after:absolute after:-bottom-[190px] after:-right-[100px] after:h-[270px] after:w-[270px] after:rounded-full after:border after:border-white/[.12] after:content-['']">
          <h2 className="mb-3 font-[Manrope] text-[clamp(30px,4vw,43px)] font-extrabold leading-[1.17] tracking-[-1.5px] text-white">
            Ready to find your shift?
          </h2>
          <p className="mx-auto mb-6 max-w-[570px] text-sm leading-[1.7] text-[#D7DAEF]">
            Make room for work, keep your studies on track and discover what you
            can do with UniShift.
          </p>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-mint px-5 py-3.5 text-sm font-bold text-[#103D35] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#69ceb4]"
            href="mailto:hello@unishift.lk?subject=UniShift%20Early%20Access"
          >
            Join the UniShift community ↗
          </a>
        </div>
      </div>
    </section>
  );
}
