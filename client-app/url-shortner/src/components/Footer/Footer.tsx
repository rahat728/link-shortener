import * as React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="relative bg-slate-900 text-white text-center py-6 overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute xl:w-[520px] xl:h-[520px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] bg-grad-theme-135 blur-[70px] rounded-full top-[10%] left-0"></div>
        <div className="absolute xl:w-[520px] xl:h-[520px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] bg-grad-theme-135 blur-[70px] rounded-full bottom-[10%] right-0"></div>
      </div>

      <p className="text-sm md:text-base lg:text-lg font-montserrat font-medium">
        Copyright © {new Date().getFullYear()} URLShortner |{" "}
        <a
          href="https://github.com/rahat728"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          rahat728
        </a>
      </p>
    </footer>
  );
};

export default Footer;
