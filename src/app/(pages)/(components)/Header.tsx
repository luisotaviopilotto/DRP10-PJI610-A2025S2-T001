import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MessageSquare,
  PenLine,
  Settings,
  Users,
} from "lucide-react";
import React from "react";

type HeaderProps = {
  meetingTime: string;
  togglePanel: (panel: "chat" | "users" | "notes" | null) => void;
  participantsCount: number;
};

const Header = ({ meetingTime, togglePanel, participantsCount }: HeaderProps) => {
  return (
    <div>
      {/* Header com informações da reunião */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-30">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-blue-100 flex items-center justify-center">
            <Calendar size={18} className="text-blue-600" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Reunião de Equipe
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={14} />
              <span>{meetingTime}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span>Ao vivo</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="text-gray-700 border-gray-200 hover:bg-gray-50"
            onClick={() => togglePanel("users")}
          >
            <Users size={16} className="mr-2" />
            <span>Participantes</span>
            <span className="ml-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
              {participantsCount}
            </span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="text-gray-700 border-gray-200 hover:bg-gray-50"
            onClick={() => togglePanel("chat")}
          >
            <MessageSquare size={16} className="mr-2" />
            <span>Chat</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="text-gray-700 border-gray-200 hover:bg-gray-50"
            onClick={() => togglePanel("notes")}
          >
            <PenLine size={16} className="mr-2" />
            <span>Anotações</span>
          </Button>

          <div className="h-8 w-px bg-gray-200 mx-1"></div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-9 h-9 text-gray-600 hover:bg-gray-100"
            title="Configurações"
          >
            <Settings size={18} />
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
