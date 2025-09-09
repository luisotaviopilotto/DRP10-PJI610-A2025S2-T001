"use client";

import Header from "./(components)/Header";
import { useState } from "react";

const MeetingRoom = () => {
  const [activePanel, setActivePanel] = useState<
    "chat" | "users" | "notes" | null
  >(null);
  const meetingTime = new Date().toLocaleTimeString();
  const participantsCount = 5; // Exemplo, pode ser ajustado conforme necessário

  const togglePanel = (panel: "chat" | "users" | "notes" | null) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <>
      <Header
        meetingTime={meetingTime}
        togglePanel={togglePanel}
        participantsCount={participantsCount}
      />
    </>
  );
};

export default MeetingRoom;
