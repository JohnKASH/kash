import Image from "next/image";
import mainPic from '@assets/HomepageImages/LandingPhoto.jpg'

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-full">
      <div className="relative w-full h-96	 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image src={mainPic} className="w-full h-full object-cover" />
          <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        </div>
        <h1 className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white text-2xl md:text-4xl lg:text-5xl font-bold px-10">
          Welcome to the<br />Korean American Society of Houston&apos;s<br />website!
        </h1>
      </div>
      <div className="px-10 block m-auto justify-center sm:px-20 md:px-30 lg:w-2/3">
        <h1 className="pt-10 pb-4 text-black text-2xl md:text-3xl lg:text-4xl font-bold">Our Society</h1>
        <p className="text-lg">The Korean-American Society of Houston (KASH) is a 501(c)(3) non-profit organization dedicated to promoting Korean culture and encouraging deeper interactions between the Korean-American Community and the greater Houston public.
          KASH was established by a group of Korean-Americans and like-minded young professionals in 2008.
          We are a diverse group that represents a broad range of age, race, and ethnicities, united by a common desire for new and exciting cultural experiences.
          our efforts culminate in our annual banner event - the korean festival houston - which is one of the largest event hosted by a korean-american non-profit organization in the country.
        </p>
        <h1 className="pt-10 pb-4 text-black text-2xl md:text-3xl lg:text-4xl font-bold">Our Mission</h1>
        <p className="text-lg">Our mission is to:</p>
        <ul className="text-lg">
          <li className="list-disc ml-5">Promote Korean culture</li>
          <li className="list-disc ml-5">Develop the next generation of community leaders</li>
          <li className="list-disc ml-5">Bridge the Korean-American community and the houston community at large</li>
        </ul>
        <h1 className="pt-10 pb-4 text-black text-2xl md:text-3xl lg:text-4xl font-bold">Membership</h1>
        <p className="text-lg">Be part of something bigger in the Houston community!</p>
        <div className="pt-3 pb-20">
          <a href="https://app.joinit.com/o/kash" target="blank" >
            <button className="bg-gray-400 text-white rounded-lg py-3 px-4 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 duration-200">
              Become a member!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
