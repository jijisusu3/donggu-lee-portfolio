import ProfileHeader from "./ProfileHeader";
import ExperienceList from "./ExperienceList";
import SkillsList from "./SkillsList";
import ProfileImageAndContact from "./ProfileImageAndContact";

function ProfileSection() {
  return (
    <section className="w-full px-4 py-10 md:py-4">
      <div className="flex flex-col max-w-[1024px] mx-auto md:flex-row items-center md:justify-between gap-10">
        <div className="w-full md:w-3/5 md:p-7">
          <ProfileHeader />
          <ExperienceList />
          <SkillsList />
        </div>

        <div className="block md:w-2/5">
          <ProfileImageAndContact />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
