"use client";

import { useEffect, useState } from "react";

const TimeSincePageLoad = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const startTime = Date.now(); // 페이지 로드 시간

    const intervalId = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000); // 경과 시간(초)
      setTimeElapsed(elapsed);
    }, 1000);

    // 컴포넌트가 언마운트되면 interval을 정리
    return () => clearInterval(intervalId);
  }, []);

  const getFormattedTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${remainingMinutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`;
    } else {
      return `${remainingSeconds}s`;
    }
  };

  return <span>{`(ing : ${getFormattedTime(timeElapsed)})`}</span>;
};

export default TimeSincePageLoad;
