import MainInfo from "./profile/MainInfo";

function ProfileSide() {
  return (
    <div className="flex space-x-2 w-full md:basis-[40%] lg:basis-[30%] h-full flex-col rounded-lg space-y-2">
      <MainInfo />
    </div>
  );
}

export default ProfileSide;
