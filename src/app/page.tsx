"use client";
import ProfileSide from "./_components/ProfileSide";
import ContentSide from "./_components/ContentSide";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col gap-2 w-full md:h-screen p-5 bg-[#2A2627]">
      <ProfileSide />
      <ContentSide />
    </div>
  );
}
