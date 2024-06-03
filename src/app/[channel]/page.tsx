"use client";

import React, { useContext } from "react";
import { ChannelContext } from "../_contexts/channel";

export default function Page() {
  const channelContext = useContext(ChannelContext);
  return (
    <section>
      <h1>index from {channelContext}</h1>
    </section>
  );
}
