"use client";

import { calculateDays, Days } from "@ellipsis/shared";
import React from "react";
import logo_large from "../public/logo_large.png";

export default function Home() {
  const [day, setDay] = React.useState(0);

  const setDays = () => {
    const days = calculateDays(process.env.NEXT_PUBLIC_LAUNCH_DATE!);
    setDay(days);
  };

  React.useEffect(() => {
    setDays();
    const interval = setInterval(setDays, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Days dayCount={day} logo={logo_large} />;
}
