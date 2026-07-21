"use client";
import Image from "next/image";
import myself from "../../public/myself.jpg";
import useAppStore from "@/store/appStore";
import { IoCloseCircle } from "react-icons/io5";
import { ReactNode, useEffect } from "react";

type AppProviderProps = {
  children: ReactNode;
};
function AppProvider({ children }: AppProviderProps) {
  const { isPreviewProfile, togglePreviewProfile } = useAppStore();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isPreviewProfile);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPreviewProfile]);
  return (
    <>
      {isPreviewProfile && (
        <div className="fixed bg-zinc-900/50 inset-0 z-999 flex items-center justify-center p-3">
          <button
            onClick={togglePreviewProfile}
            className="text-zinc-500 cursor-pointer z-9999 text-4xl absolute right-4 top-4"
          >
            <IoCloseCircle />
          </button>
          <Image
            width={500}
            height={500}
            src={myself}
            alt="My profile"
            priority
          />
        </div>
      )}
      {children}
    </>
  );
}

export default AppProvider;
