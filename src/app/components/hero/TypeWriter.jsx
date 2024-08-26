"use client";
import { useEffect, useState } from "react";

function useTypewriter(text, speed = 300) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
}

export default function TypeWriter({ text, speed }) {
  const displayText = useTypewriter(text, speed);

  return (
    <p className="text-blue-500 text-4xl md:text-6xl text-center">
      {displayText}
    </p>
  );
}
