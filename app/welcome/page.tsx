import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

export default function WelcomeNote() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 bg-white rounded shadow p-6 sm:p-8">
        <div className="px-2 sm:px-4">
          {/* Welcome Logo */}
          <div className="text-center mb-8">
            <Image
              src="/images/logo.svg"
              alt="Welcome Logo"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>

          {/* Text Content */}
          <div className="welcome-text-content space-y-6 text-justify text-gray-800 text-sm sm:text-base leading-relaxed">
            <p>
              <span className="font-semibold text-base sm:text-lg">
                SRIYOG{" "}
              </span>
              पार्ट टाइम गर्न तथा काम गर्ने ब्यक्तीहरु पाउने नेपालकै ठुलो संजाल
              हो । फुर्सदको समयलाई अवसरमा परिणत गरि जिओलोकेशन सिस्टममा आधारित भइ
              १८ समूह अनि त्यसै समुह भित्र पर्ने १५० भन्दा बढी उप-समूहहरुमा काम
              गर्ने अवसर प्रदान गर्दछ ।
            </p>

            <p>
              SRIYOG is Nepal's largest network for finding part-time and
              working people. Turning leisure time into opportunities, based on
              the geolocation system, it provides the opportunity to work in 18
              groups and more than 150 sub-groups within the same group.
            </p>

            <p>
              काम भनौ वा काम खोज्ने मान्छे र काम गरिदिने मान्छेको बीचमा सेतु
              बन्दै देशमा रहेको बिध्यमान बेरोजगारीको समस्यालाई धेरै हद सम्म
              समाधान गर्ने जमर्को हामीले १२ सेप्टेम्बर २०१६ मा गरेको थियौ,
              फलस्वरूप आज तपाई हामी सँग काम गर्न वा कामदार खोज्नको लागि जोडिन
              आउनु भएको छ ।
            </p>

            <p>
              We did work on 12th September 2016 to solve the existing
              unemployment problem in the country by building a bridge between
              the people who are looking for work and the people who do the
              work.
            </p>

            <p>
              काम सानो ठुलो भन्ने हुदैन तर पनि सानो भन्दा सानो देखि लिएर ठुलो
              काम गर्ने व्यक्तिहरुलाई काम बारे जानकारी, सीप भएका दक्ष
              प्राबिधिकहरुको डिजिटल प्रोफाइलिंग गर्ने व्यबस्था हामीले मिलाउदै
              आइरहेको छौ । हरेक व्यक्ति संग केहि न केहि सिप हुन्छ, अझ महिलाहरु
              संग झन बढी सीप हुन्छ, जुन सीपको लागि न शिक्षाको आवश्यकता पर्छ न
              कुनै कागज पत्रको नै । छोरि मान्छे अगाडी बढ्दै गरेको नेपाल जस्तो
              हाम्रो सानो मुलुकमा सीप र दक्षता पहिचान गरि सम्बन्धित पेशामा हामी
              कामको मुल्यांकन गर्दै समान अवसर उपलब्ध होस भन्ने कामना गर्दछौ ।
            </p>

            <p>
              The job does not mean small or big, but we are arranging the
              system of digital profiling of skilled professionals with
              information about the work, from the smallest to the largest.
              Every person has some skills, even women have more skills, for
              which skills neither need education nor any papers. In our small
              country like Nepal, where girls are moving forward, we wish that
              equal opportunities are available in the related professions by
              recognizing skills and competences.
            </p>

            <p>
              पुरानो तरिका अनुसार कामदार खोज्ने भन्दा पनि सर्विस बेच्ने या भनौ
              सर्विस किन्नु पर्ने बाध्यता अनि तेस्तो व्यक्तिलाई काम लगाउदा
              काटिने सर्विस फी लिने पुरानो बिचाधारालाई परिणत गर्दै “नो मिडलमेन
              कन्सेप्ट” लाई बिकाश गर्दै लैजाने प्रवृतिको विकास गरेको छौ । तपाई
              जति काम गर्नु हुन्छ, त्यो तपाईको सीप र मेहेनतको कमाई हो । तपाई
              कसैलाई काम लगाउनु हुन्छ भने किन १०-१५% रकम ज्यादा खर्च गर्नु हुन्छ
              र काम गर्ने मान्छे र काम गराउने मान्छे बीचमा भएको समझदारी बिशुद्ध
              रुपमा दुवै व्यक्तिको भइ तेस्रो व्यक्तिको कुनै कमिसन नहोस भन्ने
              हामी चाहन्छौ ।
            </p>

            <p>
              Instead of looking for workers according to the old method, we
              have developed a tendency to develop the "no middleman concept" by
              changing the old way of having to sell services or rather buying
              services and charging a service fee when hiring such a person. The
              amount of work you do is the result of your skill and hard work.
              If you hire someone, why spend 10-15% more money and we want the
              agreement between the person doing the work and the person doing
              the work to be purely between both people and there is no
              commission for the third person.
            </p>

            <p>
              SRIYOG मा १८ समूह अनि १५० भन्दा बढी उप समूहहरुमा दैनिक जीवनमा काम
              गर्ने व्यक्ति या कामदार खोज्ने अवसर दिनेछ ।
            </p>

            <p>
              In SRIYOG, 18 groups and more than 150 sub-groups will provide an
              opportunity to find people who work in daily life.
            </p>
          </div>

          {/* Signature and Socials */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-10">
            {/* Signature Section */}
            <div className="space-y-2">
              <Image
                src="/images/prakash_sig.png"
                alt="Signature"
                width={150}
                height={50}
              />
              <p className="font-semibold text-lg text-black">प्रकाश उप्रेती</p>
              <p className="text-sm text-black">संस्थापक</p>

              <div className="flex gap-4 mt-2 text-gray-700">
                <a
                  href="https://t.me/sriyog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/telegram.svg"
                    alt="Telegram"
                    width={25}
                    height={25}
                  />
                </a>
                <a
                  href="https://x.com/pracas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,21H3V3h18V21z M17.538,17l-4.186-5.99L16.774,7h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/pracasupreti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                  >
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Optional Placeholder */}
            <div className="hidden md:block w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
