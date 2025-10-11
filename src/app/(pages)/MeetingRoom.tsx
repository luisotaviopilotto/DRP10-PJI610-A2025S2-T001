import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircleDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const MeetingRoom = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="w-full py-2 border-b border-b-gray-100 flex justify-between px-20">
        <div className="flex gap-2 items-center">
          <div className="aspect-square h-8 rounded-md bg-green-900 flex items-center justify-center">
            <IoMdCheckmarkCircleOutline className="text-white text-base" />
          </div>
          <div className="flex flex-col justify-center -space-y-1">
            <h1 className="text-sm text-gray-600 font-bold">
              Sessão de Terapia
            </h1>
            <h2 className="text-xs text-gray-500">ID: 7C3F2A</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-xs gap-1 text-green-900 animate-pulse font-bold">
            <FaRegCircleDot className="" />
            <span>Em Sessão</span>
          </div>
          <Button variant={"outline"}>Encerrar</Button>
        </div>
      </div>
      <div className="w-full flex-1 p-4">
        <div className="bg-slate-700/10 rounded-2xl h-full w-full">
          <div></div> {/* Meet */}
          <div></div> {/* Chat */}
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
