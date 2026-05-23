// import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1E4D3A]">
      <div className="max-w-12/16 mx-auto flex flex-col items-center text-center text-white py-12 md:py-16">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          KeenKeeper
        </h2>

        <p className="text-sm md:text-base text-gray-300 max-w-xl mb-8 font-light leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-3 mb-12">
          <span className="text-sm font-medium tracking-wide text-white">
            Social Links
          </span>
          <div className="flex items-center gap-4">
            
            <a
              href="#instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1E4D3A] hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current stroke-[2]"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a
              href="#facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1E4D3A] hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="#x"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1E4D3A] hover:bg-gray-100 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full border-t border-white/10 my-6"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div>© 2026 KeenKeeper. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
