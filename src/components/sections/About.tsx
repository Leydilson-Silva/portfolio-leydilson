"use client";

import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500 ease-in-out">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-10">
          {t.about.title}
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>
            {t.about.p1_start}{" "}
            <strong className="text-emerald-600 dark:text-[#00FF00] font-bold dark:drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">C</strong>
            {t.about.p1_end}
          </p>

          <p>
            {t.about.p2_start}{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-semibold border-b-2 border-emerald-500/30 dark:border-[#00FF00]/30">
              {t.about.p2_highlight}
            </span>
            {t.about.p2_end}
          </p>

          <p>
            {t.about.p3_start}{" "}
            <strong className="text-emerald-600 dark:text-[#00FF00] font-bold dark:drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">
              {t.about.p3_highlight}
            </strong>
            {t.about.p3_end}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;