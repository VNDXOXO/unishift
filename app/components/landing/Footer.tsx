export default function Footer() {
  return (
    <footer className="bg-[#111443] pt-13 pb-6 text-white">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <div className="grid grid-cols-1 gap-9 pb-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-[Manrope] text-[23px] font-extrabold tracking-tight">
              Uni<span className="text-[#72D2B7]">Shift</span>
            </div>
            <p className="mt-3 max-w-[270px] text-[13px] leading-[1.7] text-[#BFC3DE]">
              Helping university students discover part-time opportunities that
              fit around student life.
            </p>
          </div>
          <div>
            <h4 className="mb-4 mt-1 text-[13px] font-bold">Explore</h4>
            <a
              className="mb-3 block text-xs text-[#BFC3DE] hover:text-[#80D9BE]"
              href="#features"
            >
              Features
            </a>
            <a
              className="mb-3 block text-xs text-[#BFC3DE] hover:text-[#80D9BE]"
              href="#how-it-works"
            >
              How it works
            </a>
            <a
              className="mb-3 block text-xs text-[#BFC3DE] hover:text-[#80D9BE]"
              href="#about"
            >
              About UniShift
            </a>
          </div>
          <div>
            <h4 className="mb-4 mt-1 text-[13px] font-bold">For you</h4>
            <a
              className="mb-3 block text-xs text-[#BFC3DE] hover:text-[#80D9BE]"
              href="#get-started"
            >
              For students
            </a>
            <a
              className="mb-3 block text-xs text-[#BFC3DE] hover:text-[#80D9BE]"
              href="#employers"
            >
              For employers
            </a>
            <a
              className="mb-3 block text-xs text-[#BFC3DE] hover:text-[#80D9BE]"
              href="mailto:hello@unishift.lk"
            >
              Contact us
            </a>
          </div>
          <div>
            <h4 className="mb-4 mt-1 text-[13px] font-bold">Follow along</h4>
            <a
              className="mb-3 block text-xs text-[#BFC3DE] hover:text-[#80D9BE]"
              href="#social-instagram"
            >
              Instagram
            </a>
            <a
              className="mb-3 block text-xs text-[#BFC3DE] hover:text-[#80D9BE]"
              href="#social-facebook"
            >
              Facebook
            </a>
            <a
              className="mb-3 block text-xs text-[#BFC3DE] hover:text-[#80D9BE]"
              href="#social-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/[.12] pt-5 text-[11px] text-[#9EA4C7] sm:flex-row">
          <span>© 2026 UniShift. All rights reserved.</span>
          <span>Study First. Work Smart.</span>
        </div>
      </div>
    </footer>
  );
}
