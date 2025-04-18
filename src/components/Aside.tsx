import { motion, useAnimate } from "motion/react";
import {
  RefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IconType } from "react-icons";
import { FiFolder, FiHome } from "react-icons/fi";
import { AsideContext } from "../context/aside/AsideContext";

export default function Aside({
  projectsRef,
  heroRef,
}: {
  projectsRef: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
}) {
  const { focus, setFocus } = useContext(AsideContext);

  const sections: {
    section: string;
    icon: IconType;
    ref: RefObject<HTMLDivElement | null>;
  }[] = useMemo(
    () => [
      { section: "home", icon: FiHome, ref: heroRef },
      { section: "projects", icon: FiFolder, ref: projectsRef },
    ],
    [projectsRef, heroRef]
  );
  console.log(focus, "focus");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.ref.current == entry.target);
          // console.log(section?.section);
          if (section) setFocus(section?.section);
        }
      },
      { threshold: 0.3 } // Trigger when 10% visible
    );

    sections.map((s) => s.ref.current && observer.observe(s.ref.current));
    return () => observer.disconnect();
  }, [sections, setFocus]);

  const selectedItemIndex = sections.findIndex((s) => s.section == focus) || 0;
  const [selectedItem, setSelectedItem] = useState<HTMLDivElement | null>(null);
  const asideRef = useRef<HTMLElement>(null);

  return (
    <aside
      ref={asideRef}
      className=" fixed z-40   sm:w-fit h-fit bg-neutral-800 drop-shadow-xs drop-shadow-cyan-700 bottom-2 left-1/2    lg:top-1/2 lg:left-2 lg:-translate-y-1/2 -translate-x-1/2 lg:translate-x-0 rounded-2xl flex lg:flex-col items-center justify-center   lg:gap-8 lg:px-2 lg:py-4 sm:px-8 px-4 py-2   gap-4 "
    >
      {sections.map((s, i) => (
        <div
          className=" z-20  "
          ref={i == selectedItemIndex ? (el) => setSelectedItem(el) : null}
          onClick={() => {
            setFocus(s.section);
            s.ref.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <AsideItem
            key={s.section}
            Icon={s.icon}
            selected={i == selectedItemIndex}
            // path={s.path}
            section={s.section}
            setFocus={setFocus}
          />
        </div>
      ))}
      <Cursor selectedItem={selectedItem} parentElement={asideRef.current} />
    </aside>
  );
}

interface AsideItemsProps {
  Icon: IconType;
  selected: boolean;
  setFocus: (section: string) => void;
  section: string;
  // path: string;
}
function AsideItem({ Icon, selected, setFocus, section }: AsideItemsProps) {
  return (
    <div
      onClick={() => setFocus(section)}
      className={` ${
        selected
          ? "  "
          : "hover:scale-105 transition-transform  cursor-pointer bg-neutral-700"
      } !text-white p-2 rounded-full text-2xl z-20 h-11 w-11 flex items-center justify-center   `}
    >
      {<Icon />}
    </div>
  );
}

function Cursor({
  selectedItem,
  parentElement,
}: {
  selectedItem: HTMLDivElement | null;
  parentElement: HTMLElement | null;
}) {
  const [scope, animate] = useAnimate();

  const { top, left, height, width } =
    selectedItem?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      height: 0,
      width: 0,
    };

  const { top: parentTop, left: parentLeft } =
    parentElement?.getBoundingClientRect() || {
      left: 0,
      top: 0,
    };
  useEffect(() => {
    animate(
      scope.current,
      {
        scale: [1, 0.5, 0.5, 1],
        // scaleX: [1, 0.05, 0.05, 1],
        // scaleY: [1, 1.2, 1.2, 1],
        // borderRadius: ["50%", 0, 0, "50%"],
        top: `${top - parentTop}px`,
        left: `${left - parentLeft}px`,
      },
      { duration: 0.25, times: [0, 0.1, 0.9, 1], ease: "linear" }
    );
  }, [top, left, animate, parentTop, parentLeft, scope]);

  return (
    <motion.div
      className={` z-10 absolute bg-linear-to-l from-cyan-400 to-purple-500 rounded-full  `}
      style={{ width, height }}
      ref={scope}
    />
  );
}
