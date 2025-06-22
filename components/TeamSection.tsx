import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Yogendra Dhamala",
    position: "Chief Executive Officer",
    image: "/images/team/yogendra.jpg",
  },
  {
    name: "Achut Chalise",
    position: "Chief Operating Officer",
    image: "/images/team/achut.png",
  },
  {
    name: "Kishor Baskota",
    position: "Chief Financial Officer",
    image: "/images/team/kishor.png",
  },
  {
    name: "Pankaj Ghimire",
    position: "Chief Branding Officer",
    image: "/images/team/pankaj.png",
  },
  {
    name: "Sudhir Nepal",
    position: "Chief Media Officer",
    image: "/images/team/sudhir.png",
  },
  {
    name: "Aavash Adhikari",
    position: "Sr. Community Manager",
    image: "/images/team/aavash.png",
  },
  {
    name: "Sobitmaan Shrestha",
    position: "Chief Digital Strategist",
    image: "/images/team/sobit.png",
  },
  {
    name: "Isha Sunam",
    position: "Data Manager",
    image: "/images/team/isha.png",
  },
  {
    name: "Suraj Majhi",
    position: "Business Manager",
    image: "/images/team/suraj.png",
  },
  {
    name: "Nischal Bhagat",
    position: "UAE Team Leader",
    image: "/images/team/nischal.png",
  },
  {
    name: "Falguni Dahal",
    position: "Community Manager",
    image: "/images/team/falguni.png",
  },
  {
    name: "Dipak Bohora",
    position: "Community Manager",
    image: "/images/team/dipak.png",
  },
];

export default function TeamSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-6">
      {/* About PRACAS */}
      {/* <div className="bg-gray-100 rounded-lg p-6 mb-10 flex flex-col md:flex-row gap-6 items-center text-black">
        <div className="flex flex-col items-center mb-16">
            <Image
                src="/images/pracas_large.png"
                alt="Pracas Upreti"
                width={250}
                height={150}
                className="rounded-full -mb-4"
            />
            <h4 className="text-xl font-semibold mt-0 text-center">PRACAS Upreti</h4>
            <h5 className="text-gray-600 text-sm text-center">Founder</h5>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">About PRACAS</h3>
          <p className="mb-4">
            Pracas Upreti&apos;s journey from a startup founder to a technology-driven change maker in Biratnagar, Nepal, exemplifies the profound impact that individuals can have when they combine innovation with a commitment to social responsibility.
          </p>
          <p className="mb-4">
            Through his endeavors, Upreti has not only transformed his community but has also set a precedent for how technology can be harnessed to drive positive change and create a better future for all.
          </p>
          <p className="mb-4">
            Upreti&apos;s journey into the realm of technology began over a decade ago when he founded his first IT startup in 2007 A.D. as PRACAS Infosys in Biratnagar. Recognizing the potential of technology to bridge gaps and catalyze progress, he embarked on a mission to leverage digital solutions to address local challenges and foster economic development. His vision was not merely to create successful businesses but to effect meaningful change in his community.
          </p>
          <small className="block mb-2 text-gray-500">Follow Pracas on social media:</small>
          <div className="flex space-x-4 text-gray-700">
            <a href="https://t.me/pracasupreti" target="_blank" rel="noopener noreferrer"><FaTelegramPlane size={20} /></a>
            <a href="https://x.com/pracas" target="_blank" rel="noopener noreferrer"><FaXTwitter size={20} /></a>
            <a href="https://linkedin.com/in/pracasupreti" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div> */}

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}
