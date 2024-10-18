"use client";

import { Days } from "@ellipsis/shared/components/Days.js";
import { calculateDays } from "@ellipsis/shared/utils/calculate_days.js";
import React from "react";
import logo_large from "../public/logo_large.png";

export default function Home() {
  const [day, setDay] = React.useState(0);

  const setDays = () => {
    const days = calculateDays();
    setDay(days);
  };

  React.useEffect(() => {
    setDays();
    const interval = setInterval(setDays, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Days dayCount={day} logo={logo_large} />;
}
