"use client";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircleDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  BsFillMicFill,
  BsFillMicMuteFill,
  BsCameraVideoFill,
  BsCameraVideoOffFill,
} from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { useParams, useSearchParams, useRouter } from "next/navigation";

// Função utilitária para extrair iniciais
const getInitials = (name: string | null) => {
  if (!name) return "";
  const parts = name.trim().toUpperCase().split(" ");
  if (parts.length === 1) {
    return parts[0].substring(0, 2);
  }
  return (parts[0][0] + (parts[1]?.[0] ?? "")).substring(0, 2);
};

const MeetingRoom = () => {
  const { sessionId } = useParams();
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const userInitials = getInitials(userName);
  const router = useRouter();

  function handleEndSession() {
    router.push("/");
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="w-full py-2 border-b border-b-gray-100 flex justify-between px-20">
        <div className="flex gap-2 items-center">
          <div className="aspect-square h-8 rounded-md bg-green-900 flex items-center justify-center">
            <IoMdCheckmarkCircleOutline className="text-white text-base" />
          </div>
          <div className="flex flex-col justify-center -space-y-1">
            <h1 className="text-sm text-gray-600 font-bold">
              Sessão de Terapia
            </h1>
            <h2 className="text-xs text-gray-500">ID: {sessionId}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-xs gap-1 text-green-900 animate-pulse font-bold">
            <FaRegCircleDot className="" />
            <span>Em Sessão</span>
          </div>
          <Button variant={"outline"} onClick={handleEndSession}>
            Encerrar
          </Button>
        </div>
      </div>

      <div className="w-full flex-1 p-4">
        <div className="rounded-2xl h-full w-full flex gap-4">
          {/* Meet */}
          <div className="flex-1 p-4 flex flex-col gap-4">
            {/* Grid de Participantes */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              {/* Participante 1 */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    Dr. Silva
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-full">
                    <BsFillMicFill className="text-white text-sm" />
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-full">
                    <BsCameraVideoFill className="text-white text-sm" />
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-green-900 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">DS</span>
                  </div>
                </div>
              </div>

              {/* Participante 2 - usuário logado */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    {userName}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-red-600/90 backdrop-blur-sm p-2 rounded-full">
                    <BsFillMicMuteFill className="text-white text-sm" />
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-full">
                    <BsCameraVideoFill className="text-white text-sm" />
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {userInitials}
                    </span>
                  </div>
                </div>
              </div>

              {/* Participante 3 */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    Ana Costa
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-full">
                    <BsFillMicFill className="text-white text-sm" />
                  </div>
                  <div className="bg-red-600/90 backdrop-blur-sm p-2 rounded-full">
                    <BsCameraVideoOffFill className="text-white text-sm" />
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">AC</span>
                  </div>
                </div>
              </div>

              {/* Participante 4 */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    João Alves
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-full">
                    <BsFillMicFill className="text-white text-sm" />
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-full">
                    <BsCameraVideoFill className="text-white text-sm" />
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">JA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles do Meet */}
            <div className="flex justify-center gap-3">
              <button className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-colors">
                <BsFillMicFill className="text-white text-xl" />
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-colors">
                <BsCameraVideoFill className="text-white text-xl" />
              </button>
              <button className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-full transition-colors">
                <span className="text-white font-semibold">Sair</span>
              </button>
            </div>
          </div>

          {/* Chat */}
          <div className="w-80 bg-white rounded-xl flex flex-col border border-gray-200">
            {/* Header do Chat */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Chat da Sessão</h3>
              <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                <HiDotsVertical className="text-gray-600" />
              </button>
            </div>

            {/* Mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Mensagem recebida */}
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">DS</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-800">
                      Dr. Silva
                    </span>
                    <span className="text-xs text-gray-500">10:15</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2">
                    <p className="text-sm text-gray-800">
                      Olá! Podemos começar a sessão?
                    </p>
                  </div>
                </div>
              </div>

              {/* Mensagem enviada */}
              <div className="flex gap-2 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">
                    {userInitials}
                  </span>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <div className="flex items-center gap-2 flex-row-reverse">
                    <span className="text-xs font-semibold text-gray-800">
                      Você
                    </span>
                    <span className="text-xs text-gray-500">10:16</span>
                  </div>
                  <div className="bg-green-900 rounded-lg rounded-tr-none px-3 py-2">
                    <p className="text-sm text-white">
                      Sim, claro! Estou pronto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mensagem recebida */}
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">AC</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-800">
                      Ana Costa
                    </span>
                    <span className="text-xs text-gray-500">10:17</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2">
                    <p className="text-sm text-gray-800">
                      Também estou pronta!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input de mensagem */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Digite uma mensagem..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent text-sm"
                />
                <button className="bg-green-900 hover:bg-green-800 p-3 rounded-full transition-colors flex-shrink-0">
                  <IoSend className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
