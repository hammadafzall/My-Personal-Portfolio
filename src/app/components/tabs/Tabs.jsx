"use client";
import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    { id: "about", label: "About" },
    { id: "skill", label: "Skills" },
    { id: "education", label: "Milestones" },
  ];

  return (
    <section className="font-sans p-4 pb-20 flex flex-col justify-center items-center w-full h-full bg-[#1A1A1A]">
      <ul className="flex gap-2 w-auto bg-[#1A1A1A] p-1 mt-10 rounded-full shadow-[0_2px_8px_-1px_rgba(6,81,237,0.4)]">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            label={tab.label}
            activeTab={activeTab}
            onClick={setActiveTab}
          />
        ))}
      </ul>
      <TabContent activeTab={activeTab} />
    </section>
  );
}
