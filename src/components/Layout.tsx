import { RefObject } from "react";
import Aside from "./Aside";

export default function Layout({
  children,
  projectsRef,
  heroRef,
}: {
  children: React.ReactNode;
  projectsRef: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <main
      className="text-neutral-100 flex  overflow-y-auto   h-screen w-screen relative
  bg-[linear-gradient(to_right_bottom,rgba(124,58,237)_-50%,rgba(0,0,0,0.95)_15%,rgba(0,0,0,0.95)_85%,rgba(22,163,158)_150%),url('/bg.png')] bg-cover     "
    >
      <Aside heroRef={heroRef} projectsRef={projectsRef} />
      <div className=" max-w-[120rem] pt-20 lg:pb-20  pb-30  mx-auto px-4 lg:pl-[15%] lg:pr-[4%] w-full grow overflow-x-hidden    overflow-y-auto ">
        {children}
      </div>
    </main>
  );
}
