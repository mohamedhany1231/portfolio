import { createContext } from "react";

export const AsideContext = createContext<{
  focus: string;
  setFocus: (sectionName: string) => void;
}>({
  focus: "home",
  setFocus: () => {},
});
