import { useEffect, useState } from "react";

import React from "react";
import { AsideContext } from "./AsideContext";

export function AsideContextComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [focus, setFocus] = useState("home");
  useEffect(() => {});
  return (
    <AsideContext.Provider value={{ focus, setFocus }}>
      {children}
    </AsideContext.Provider>
  );
}
