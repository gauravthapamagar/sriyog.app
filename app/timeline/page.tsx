import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

export default function Timeline() {
  const timelineData = [
    {
      icon: "fa-map-marker-alt",
      title: "Deployed in Apple iOS Store",
      date: "8th Nov, 2024",
      description:
        "SRIYOG iOS app was successfully deployed in iOS Store after multiple failed attempts.",
      link: { href: "https://bit.ly/sriyogios", label: "Download App" },
      right: true,
    },
    {
      icon: "fa-arrow-left",
      title: "React Native on Android",
      date: "6th Nov, 2024",
      description:
        "September and October was bleeding phase as our team worked day and night to make new app on React Native Platform.",
      link: { href: "https://sriyog.com/app", label: "View App" },
      right: false,
    },
    {
      icon: "fa-credit-card",
      title: "Payment Integration in IME PAY",
      date: "16th May, 2024",
      description:
        "Membership fee of SRIYOG has been implemented in IME Pay App successfully.",
      right: true,
    },
    {
      icon: "fa-check-circle",
      title: "Verified in Microsoft for Startups",
      date: "6th March, 2024",
      description:
        "SRIYOG was successfully verified in Microsoft for Startups and got USD 125,000 of Microsoft for Startups credit.",
      right: false,
    },
    {
      icon: "fa-handshake",
      title: "MOU Between IME PAY and SRIYOG",
      date: "8th February, 2023",
      description:
        "An agreement has been signed between IME Pay and SRIYOG Consulting Pvt Ltd to facilitate digital payment for Sriyog.com.",
      right: true,
    },
    {
      icon: "fa-download",
      title: "100K+ Installations",
      date: "18th December, 2021",
      description:
        "SRIYOG app reached 100K+ Installations from Google Play Store.",
      link: { href: "https://bit.ly/sriyog", label: "Browse" },
      right: false,
    },
    {
      icon: "fa-download",
      title: "50K+ Installations",
      date: "23rd March, 2021",
      description:
        "SRIYOG app reached 50K+ Installations from Google Play Store.",
      link: { href: "https://bit.ly/sriyog", label: "Browse" },
      right: true,
    },
    {
      icon: "fa-rocket",
      title: "Officially Launched",
      date: "12th September, 2019",
      description:
        "SRIYOG launched its platform to use skills and experience of unemployed human resources to create income-generating opportunities.",
      right: false,
    },
    {
      icon: "fa-flask",
      title: "Released Android App",
      date: "20th April, 2018",
      description: "SRIYOG app was released on Google Play store.",
      link: { href: "https://bit.ly/sriyog", label: "Browse" },
      right: true,
    },
    {
      icon: "fa-building",
      title: "Registration",
      date: "14th June, 2018",
      description:
        "SRIYOG was registered as 'SRIYOG Consulting Pvt. Ltd' in Nepal Government Ministry of Industry, Commerce and Supplies.",
      right: false,
    },
  ];

  return (
    <section className="overflow-x-hidden">
      <div className="mx-auto relative px-[10px] container px-3 sm:px-6 md:px-8 lg:px-36 text-black max-w-screen-xl">
        {/* Vertical line in red */}
        <div className="absolute left-[50%] top-0 h-full w-[4px] bg-[#8b1414] transform -translate-x-1/2 z-0 max-md:translate-x-0 max-lg:left-[11%] max-lg:translate-x-0"></div>

        {timelineData.map((item, idx) => {
          const isRight = item.right;
          const circleLeft = "left-[50%] max-md:left-[10%] max-lg:left-[10%]";
          const cardAlign = isRight
            ? "w-[45%] bg-[#ffffff] pb-[20px] ml-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0 max-md:w-[80%] max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]"
            : "w-[45%] bg-[#ffffff] pb-[20px] mr-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0 max-md:w-[80%] max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]";

          // Pointer styles conditional
          const pointerRightSide =
            "absolute right-[-10px] top-[20px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#8B1414]";

          const pointerLeftSide =
            "absolute left-[-10px] top-[20px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-[#8B1414]";

          return (
            <div key={idx} className="mb-[50px]  relative min-h-[100px]">
              {/* Circle Icon in red */}
              <div
                className={`bg-[#8b1414] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 ${circleLeft} -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center z-10`}
              >
                <i
                  className={`fas ${
                    item.title === "React Native on Android"
                      ? item.right
                        ? "fa-arrow-left"
                        : "fa-arrow-right"
                      : item.icon
                  }`}
                />
              </div>

              {/* Card Content */}
              <div className={cardAlign}>
                {/* Triangle pointer */}
                {/* Use pointerLeftSide for right cards, pointerRightSide for left cards */}
                <div
                  className={`
                    ${isRight ? pointerLeftSide : pointerRightSide}
                    max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#8B1414]
                  `}
                ></div>

                <div className="rounded overflow-hidden bg-gray-100">
                  {/* Red header bar */}
                  <div className="h-[60px] bg-[#8b1414] flex items-center px-6">
                    <h3 className="text-normal font-bold text-white m-0">
                      {item.title}
                    </h3>
                  </div>

                  {/* Main content section */}
                  <div className="p-6">
                    <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    {item.link && (
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm px-4 py-2 rounded transition bg-[#8b1414] text-white"
                      >
                        {item.link.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
