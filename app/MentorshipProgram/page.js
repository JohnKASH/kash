"use client"
import Image from "next/image";
import { useLanguage } from "../components/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-full">
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            fill
            src="/assets/LandingPageImages/LandingPhoto.jpg"
            className="w-full h-full object-cover"
            alt="Mentorship Program Banner"
          />
          <div className="absolute inset-0 w-full h-full bg-black opacity-50" />
        </div>
        <h1 className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold px-10">
          {t.header}
        </h1>
      </div>

      <div className="px-10 sm:px-20 md:px-30 lg:w-2/3 m-auto">
        <Section title={t.sections.purpose.title}>
          <p>{t.sections.purpose.p1}</p>
          <p className="mt-4">{t.sections.purpose.p2}</p>
          <p className="mt-4">{t.sections.purpose.p3}</p>
        </Section>

        {[
          "requirements",
          "timeline",
          "structure",
          "selection",
          "expectations",
        ].map((key) => (
          <Section key={key} title={t.sections[key].title}>
            <ul className="list-disc ml-5 space-y-2">
              {t.sections[key].list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Section>
        ))}

        <Section title={t.sections.apply.title}>
          <p>{t.sections.apply.p}</p>
          <div className="mt-4 space-x-4">
            <a href="https://forms.gle/jxVCMJzuobKNQ1e6A" target="_blank">
              <button className="bg-kashBlue-600 text-white rounded-lg py-2 px-4 hover:bg-gray-600">
                {t.sections.apply.mentee}
              </button>
            </a>
            <a href="https://forms.gle/MHA8igM9kw5FmyX38" target="_blank">
              <button className="bg-kashBlue-600 text-white rounded-lg py-2 px-4 hover:bg-gray-600">
                {t.sections.apply.mentor}
              </button>
            </a>
          </div>
        </Section>

        <Section title={t.sections.questions.title}>
          <p>{t.sections.questions.p}</p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="pt-10 pb-4">
      <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
      <div className="text-lg mt-2">{children}</div>
    </section>
  );
}


const translations = {
  en: {
    header: "2025 KASH Mentorship Program",
    sections: {
      purpose: {
        title: "Purpose",
        p1: "Interested in giving back or gaining guidance through mentorship? The KASH Mentorship Program is an opportunity for members of the Korean American Society of Houston to connect, learn, and grow together.",
        p2: "Whether you're looking to mentor or be mentored, this program offers a welcoming space to share experiences, build meaningful relationships, and support one another within our community.",
        p3: "This initiative pairs college and early post-college individuals with mentors based on shared interests such as business, entrepreneurship, engineering, coding, teaching, and more.",
      },
      requirements: {
        title: "Requirements",
        list: [
          'Be a current KASH Member (Join here). We offer student discounts!',
          "Mentees: College or early post-college individuals seeking guidance",
          "Mentors: Industry professionals willing to share knowledge",
          "Commitment to scheduled meetings and program activities",
          "A positive attitude!",
        ],
      },
      timeline: {
        title: "Timeline",
        list: [
          "Application Period: June 02 – June 30",
          "Matching Process: July 01 - July 09",
          "Program Duration: July 11 - October 11",
          "Survey & Feedback: ~1 week after program end",
        ],
      },
      structure: {
        title: "Program Structure & Planning",
        list: [
          "Matches based on interests, career goals, and experience",
          "3-month duration with phases: onboarding, active mentoring, wrap-up",
          "Re-matching option if needed",
        ],
      },
      selection: {
        title: "Application & Selection",
        list: [
          "Must be a current KASH Member",
          "Clear motivation and willingness to engage",
          "Alignment with KASH values: positivity, community-mindedness, respect",
        ],
      },
      expectations: {
        title: "Mentorship Expectations",
        list: [
          "Attend the Kickoff Mixer: July 11, 2025",
          "Minimum 2 meetings/month with each other (at least one in-person)",
          "Participate in the post-program feedback survey",
          "Maintain professionalism and communication",
          "Both mentors and mentees are expected to show initiative - come prepared to each meeting with updates, questions, or discussion topics.",
          "Check-ins and support will be provided throughout the duration of the program",
        ],
      },
      apply: {
        title: "Apply Today!",
        p: "Not sure if you want to be a mentor or mentee? Apply for both! We'll match you based on experience and preferences. We're excited to review your application!",
        mentee: "Apply as Mentee",
        mentor: "Apply as Mentor",
      },
      questions: {
        title: "Have questions?",
        p: "Email us! - John@kashouston.org",
      },
    },
  },
  ko: {
    header: "2025 KASH 멘토십 프로그램",
    sections: {
      purpose: {
        title: "목적",
        p1: "멘토십을 통해 도움을 주고받고 싶으신가요? KASH 멘토십 프로그램은 휴스턴 한인 사회의 구성원들이 연결되고 함께 배우며 성장할 수 있는 기회를 제공합니다.",
        p2: "멘토가 되거나 멘티가 되고 싶은 분들을 위한 이 프로그램은 경험을 공유하고 의미 있는 관계를 형성하며 서로를 응원하는 따뜻한 공간입니다.",
        p3: "관심사(비즈니스, 엔지니어링, 코딩, 교육 등)에 따라 대학생 및 졸업생들과 전문가들을 연결합니다.",
      },
      requirements: {
        title: "자격 요건",
        list: [
          '현재 KASH 회원이어야 합니다 (가입하기). 학생 할인 제공!',
          "멘티: 멘토의 지도가 필요한 대학생 또는 졸업생",
          "멘토: 지식을 공유할 준비가 된 산업 전문가",
          "정기적인 만남과 프로그램 활동에 대한 약속",
          "긍정적인 태도!",
        ],
      },
      timeline: {
        title: "일정",
        list: [
          "지원 기간: 6월 2일 – 6월 30일",
          "매칭 진행: 7월 1일 – 7월 9일",
          "프로그램 기간: 7월 11일 – 10월 11일",
          "설문 및 피드백: 프로그램 종료 후 약 1주",
        ],
      },
      structure: {
        title: "프로그램 구성",
        list: [
          "관심사, 경력 목표, 경험에 따라 매칭",
          "3개월 과정: 온보딩, 활동, 마무리 단계",
          "필요시 재매칭 가능",
        ],
      },
      selection: {
        title: "지원 및 선정 기준",
        list: [
          "KASH 회원이어야 합니다",
          "명확한 동기 및 참여 의지",
          "긍정성, 공동체 의식, 존중 등의 KASH 가치와의 일치",
        ],
      },
      expectations: {
        title: "멘토십 기대사항",
        list: [
          "킥오프 모임 참석 (7월 11일)",
          "한 달에 최소 두 번 만남 (최소 한 번 대면)",
          "프로그램 종료 후 피드백 설문 응답",
          "전문성과 커뮤니케이션 유지",
          "각 만남에 준비된 상태로 참여 - 업데이트, 질문 또는 토론 주제 지참",
          "프로그램 전반에 걸쳐 체크인 및 지원 제공",
        ],
      },
      apply: {
        title: "지금 신청하세요!",
        p: "멘토 또는 멘티 중 고민되시나요? 두 역할 모두 신청하시면 경험과 선호도를 바탕으로 적절히 매칭해 드립니다!",
        mentee: "멘티로 지원하기",
        mentor: "멘토로 지원하기",
      },
      questions: {
        title: "질문이 있으신가요?",
        p: "이메일 주세요! - John@kashouston.org",
      },
    },
  },
};
