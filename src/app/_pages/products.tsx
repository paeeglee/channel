"use client";

import React, { useContext } from "react";
import { ChannelContext } from "../_contexts/channel";

export default function Products() {
  const channelContext = useContext(ChannelContext);
  return (
    <section>
      <h1>Products from {channelContext}</h1>
    </section>
  );
}
