import React from "react";

export default function FooterBottom() {
  return (
    <footer className="bg-white shadow-[0_-2px_4px_rgba(0,0,0,0.10)]">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          {/* Copyright */}
          <p className="text-[11px] sm:text-xs md:text-sm text-black text-center md:text-left leading-snug sm:leading-normal flex flex-wrap justify-center md:justify-start items-center gap-x-1">
            All Rights Reserved. &copy; <span>2025</span> SRIYOG Consulting Pvt.
            Ltd.
            <span className="mx-1">|</span>
            <span>Powered By Microsoft For Startups</span>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-6 mt-2 md:mt-0 text-black">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/sriyogdotcom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path
                  d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 
                c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 
                C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
                />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/thesriyog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path
                  d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 
                L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 
                L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 
                L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 
                L 16.914062 15 z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/sriyog-consulting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path
                  d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z 
                M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z 
                M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56
                c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@sriyogdotcom8535"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path
                  d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 
                C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 
                A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 
                C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 
                L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 
                C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
