'use client';
import Image from "next/image";
import { useLanguage } from "./components/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-full">
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/assets/LandingPageImages/LandingPhoto.jpg" fill className="w-full h-full object-cover" alt="KASH landing page photo" />
          <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        </div>
        <h1 className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white text-2xl md:text-4xl lg:text-5xl font-bold px-10 whitespace-pre-line">
          {t.welcome}
        </h1>
      </div>

      <div className="px-10 block m-auto justify-center sm:px-20 md:px-30 lg:w-2/3">
        <h1 className="pt-10 pb-4 text-black text-2xl md:text-3xl lg:text-4xl font-bold">{t.ourSocietyTitle}</h1>
        <p className="text-lg">{t.ourSocietyP1}</p>
        <p className="text-lg">{t.ourSocietyP2}</p>

        <h1 className="pt-10 pb-4 text-black text-2xl md:text-3xl lg:text-4xl font-bold">{t.missionTitle}</h1>
        <p className="text-lg">{t.missionP}</p>
        <ul className="text-lg">
          {t.missionList.map((item, index) => (
            <li key={index} className="list-disc ml-5">{item}</li>
          ))}
        </ul>

        <h1 className="pt-10 pb-4 text-black text-2xl md:text-3xl lg:text-4xl font-bold">{t.membershipTitle}</h1>
        <p className="text-lg">{t.membershipP}</p>

        <div className="pt-3 pb-20">
          <a href="https://app.joinit.com/o/kash" target="blank" >
            <button className="bg-kashBlue-600 text-white rounded-lg py-3 px-4 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 duration-200">
              {t.joinBtn}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}


const translations = {
  en: {
    welcome: "Welcome to the\nKorean American Society of Houston's\nwebsite!",
    ourSocietyTitle: "Our Society",
    ourSocietyP1: "The Korean-American Society of Houston (KASH) is a 501(c)(3) non-profit organization dedicated to promoting Korean culture and encouraging deeper interactions between the Korean-American Community and the greater Houston public. KASH was established by a group of Korean-Americans and like-minded young professionals in 2008.",
    ourSocietyP2: "We are a diverse group that represents a broad range of age, race, and ethnicities, united by a common desire for new and exciting cultural experiences. Our efforts culminate in our annual banner event - the Korean Festival Houston - which is one of the largest events hosted by a Korean-American non-profit organization in the country.",
    missionTitle: "Our Mission",
    missionP: "Our mission is to:",
    missionList: [
      "Promote Korean culture",
      "Develop the next generation of community leaders",
      "Bridge the Korean-American community and the Houston community at large"
    ],
    membershipTitle: "Membership",
    membershipP: "Be part of something bigger in the Houston community!",
    joinBtn: "Become a member!",
  },
  ko: {
    welcome: "휴스턴 한인회 웹사이트에 오신 것을 환영합니다!",
    ourSocietyTitle: "우리 협회",
    ourSocietyP1: "휴스턴 한인회(KASH)는 한국 문화를 홍보하고 한인 커뮤니티와 휴스턴 지역 사회 간의 상호작용을 장려하는 501(c)(3) 비영리 단체입니다. KASH는 2008년에 한인 및 젊은 전문인들에 의해 설립되었습니다.",
    ourSocietyP2: "우리는 다양한 연령, 인종, 민족을 대표하는 집단이며, 새로운 문화 경험에 대한 열정을 공유합니다. 우리의 노력은 매년 열리는 '코리안 페스티벌 휴스턴'으로 이어지며, 이는 미국 내 한인 비영리 단체가 주최하는 가장 큰 행사 중 하나입니다.",
    missionTitle: "우리의 미션",
    missionP: "우리의 미션은 다음과 같습니다:",
    missionList: [
      "한국 문화를 홍보합니다",
      "다음 세대의 지역사회 리더를 양성합니다",
      "한인 커뮤니티와 휴스턴 지역사회를 연결합니다"
    ],
    membershipTitle: "회원가입",
    membershipP: "휴스턴 커뮤니티에서 더 큰 무언가의 일원이 되세요!",
    joinBtn: "회원가입 하기",
  }
};
