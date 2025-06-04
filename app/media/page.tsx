import Image from "next/image";
import RedSection from "@/components/RedSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Media | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const mediaCoverageData = [
  {
    id: 1,
    image: "/images/media/kantipur.webp",
    title: "“काठमाडौं, दिल्ली र दुबईमा पनि श्रीयोगको सेवा”",
    date: "Sunday, June 23, 2024",
    link: "https://ekantipur.com/market/2024/06/23/sri-yoga-services-in-kathmandu-delhi-and-dubai-as-well-02-23.html"
  },
  {
    id: 2,
    image: "/images/media/kendrabindu.webp",
    title: "“मेम्बरशिप मोडलमा श्रीयोग, विदेशमा पनि सेवा विस्तारको लक्ष्य”",
    date: "Friday, June 14, 2024",
    link: "https://kendrabindu.com/economy/330937/"
  },
  {
    id: 3,
    image: "/images/media/technology.webp",
    title: "“दमक नगरपालिकालाई स्टार्टअप र प्रविधि मैत्री शहर बनाईने”",
    date: "Saturday, June 17, 2023",
    link: "https://technologykhabar.com/2023/06/17/140682/"
  },
  {
    id: 4,
    image: "/images/media/business.webp",
    title: "“IMEPay as digital payment service provider for Sriyog Consulting”",
    date: "Sunday, June 23, 2024",
    link: "https://www.b360nepal.com/detail/885/imepay-as-digital-payment-service-provider-for-sriyog-consulting"
  },
  {
    id: 5,
    image: "/images/media/arthik.webp",
    title: "“IMEPay as digital payment service provider for Sriyog Consulting”",
    date: "Sunday, June 23, 2024",
    link: "https://www.arthikpati.com/content/2023/02/11/54264"
  },
  {
    id: 6,
    image: "/images/media/naya.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Friday, February 10, 2023",
    link:"https://nayapatrikadaily.com/news-details/107044/2023-02-09"
  },
  {
    id: 7,
    image: "/images/media/sansar.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Friday, February 10, 2023",
    link: "https://sansarnews.com/357170/"
  },
  {
    id: 8,
    image: "/images/media/desh.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Friday, February 10, 2023",
    link: "https://deshsanchar.com/2023/02/10/761100/"
  },
  {
    id: 9,
    image: "/images/media/nepalsamaya.svg",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Friday, February 10, 2023",
    link: "https://nepalsamaya.com/detail/99308"
  },
  {
    id: 10,
    image: "/images/media/setopati.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "Thursday, February 9, 2023",
    link:"https://www.setopati.com/kinmel/others/294168"
  },
  {
    id: 11,
    image: "/images/media/news.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: " Thursday, February 9, 2023",
    link:"https://www.newskarobar.com/posts/1110045"
  },
  {
    id: 12,
    image: "/images/media/corporate.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: " Thursday, February 9, 2023",
    link: "https://www.corporatenepal.com/story/236761"
  },
  {
    id: 13,
    image: "/images/media/biwi.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानीमा सम्झौता”",
    date: " Thursday, February 9, 2023",
    link: "https://old.bizshala.com/story/%E0%A4%86%E0%A4%87%E0%A4%8F%E0%A4%AE%E0%A4%88-%E0%A4%AA%E0%A5%87-%E0%A4%B0-13"
  },
  {
    id: 14,
    image: "/images/media/nepalipatro.svg",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानीमा सम्झौता”",
    date: " Thursday, February 9, 2023",
    link: "https://nepalipatro.com.np/news/feeds/2373182"
  },
  {
    id: 15,
    image: "/images/media/capital.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानीमा सम्झौता”",
    date: " Thursday, February 9, 2023",
    link: "https://www.capitalnepal.com/detail/34606"
  },
  {
    id: 16,
    image: "/images/media/tourism.webp",
    title: "“ Agreement between IME Pay and Sriyog Consulting”",
    date: " Thursday, February 9, 2023",
    link: "https://www.tourismmail.com/news/detail/100917/"

  },
  {
    id: 17,
    image: "/images/media/matri.webp",
    title: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता”",
    date: " Thursday, February 9, 2023",
    link: "https://matribhuminews.com/2023/02/09/186876/"

  },
  
];

const Page = () => {
  return (
    <>
      <RedSection title="Media Coverage" />

      <div className="text-black bg-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 mt-8">
            {mediaCoverageData.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors space-y-4">
                <div className="w-40 h-16 relative mb-4 mx-auto">
                  <Image src={item.image} alt="media logo" fill className="object-contain" />
                </div>
                <hr className="border-t border-gray-200 mb-2" />
                <h5 className="mb-2 text-base font-normal tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <div className="h-4" />
                <p className="text-sm text-gray-500 mb-4">- {item.date}</p>
                <a
                  href={item.link}
                  target="_blank"
                  className="bg-transparent hover:bg-[#8b1414] text-black text-xs cursor-pointer hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded-sm"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
