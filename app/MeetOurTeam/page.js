import TeamMember from "app/components/MeetOurTeam/TeamMember";
import Image from "next/image";
import BennySideEye from '@assets/MeetOurTeamImages/BennySideEye.jpeg'

export default function Home() {
  return (
    <div className="">
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Info about team lorem ipsum Info about team lorem ipsum Info about team lorem ipsum Info about team lorem ipsum</p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <TeamMember name='john' title='webdev' description='builds websites builds websites builds websites' image={BennySideEye.src} />
              <TeamMember name='john' title='webdev' description='builds websites builds websites builds websites' image={BennySideEye.src} />
              <TeamMember name='john' title='webdev' description='builds websites builds websites builds websites' image={BennySideEye.src} />
              <TeamMember name='john' title='webdev' description='builds websites builds websites builds websites' image={BennySideEye.src} />
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Board Members</h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Information about board lorem ipsumInformation about board lorem ipsum Information about board lorem ipsum</p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <TeamMember name='john' title='webdev' description='builds websites builds websites builds websites' image={BennySideEye.src} />
              <TeamMember name='john' title='webdev' description='builds websites builds websites builds websites' image={BennySideEye.src} />
              <TeamMember name='john' title='webdev' description='builds websites builds websites builds websites' image={BennySideEye.src} />
              <TeamMember name='john' title='webdev' description='builds websites builds websites builds websites' image={BennySideEye.src} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
