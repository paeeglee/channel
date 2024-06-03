"use client";

import { useParams } from "next/navigation";
import React, { createContext, useState } from "react";

const ChannelContext = createContext(null);

function Provider({ children }) {
  const {channel: c} = useParams()
  const [channel] = useState<string>(c as string || "world");

  return (
    <ChannelContext.Provider value={channel}>
      {children}
    </ChannelContext.Provider>
  );
}

function ChannelProvider({ children }) {
  return <Provider>{children}</Provider>;
}

export { ChannelContext, ChannelProvider };
