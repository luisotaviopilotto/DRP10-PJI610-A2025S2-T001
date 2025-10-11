"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { generateSessionId } from "@/lib/sessionId";
import Logo from "@/assets/logo.svg";
import { toast } from "sonner";
import { useState } from "react";
import { z } from "zod";

const nameSchema = z
  .string()
  .trim()
  .min(3, "O nome deve ter no mínimo 3 caracteres")
  .max(15, "O nome deve ter no máximo 15 caracteres");

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [meetingCode, setMeetingCode] = useState("");

  function handleCreateSession() {
    const result = nameSchema.safeParse(name);
    if (!result.success) {
      toast.error(result.error.issues[0].message, {
        description: "Por favor, digite um nome válido.",
      });
      return;
    }
    const sessionId = generateSessionId();
    router.push(`/meeting/${sessionId}?name=${encodeURIComponent(name)}`);
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleJoinSession() {
    if (!meetingCode.trim()) return;
    router.push(`/meeting/${meetingCode.trim().toUpperCase()}`);
  }

  return (
    <>
      {/* Sonner container */}
      <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Image src={Logo} alt="Logo da Empresa" className="w-40" />
            </div>
            <CardDescription>
              Inicie uma nova chamada de vídeo ou participe de uma existente.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome-usuario" className="font-medium">
                Informe seu primeiro nome
              </Label>
              <Input
                id="nome-usuario"
                placeholder="Ex: João / Ana Paula"
                className="text-center tracking-wider"
                value={name}
                onChange={handleNameChange}
                required
                minLength={3}
              />
              <Button
                className="w-full font-semibold"
                size="lg"
                onClick={handleCreateSession}
              >
                <Plus className="mr-2 h-5 w-5" />
                Criar Nova Reunião
              </Button>
            </div>
            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              <span className="mx-4 text-xs text-gray-500 uppercase">OU</span>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meeting-code" className="font-medium">
                  Digite o código da reunião
                </Label>
                <Input
                  id="meeting-code"
                  placeholder="Ex: ABC-DEF-GHI"
                  className="text-center tracking-wider uppercase"
                  value={meetingCode}
                  onChange={(e) => setMeetingCode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleJoinSession()}
                  autoCapitalize="characters"
                  autoCorrect="off"
                />
              </div>
              <Button
                variant="secondary"
                className="w-full"
                onClick={handleJoinSession}
              >
                <LogIn className="mr-2 h-5 w-5" />
                Entrar na Reunião
              </Button>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-gray-500 w-full flex items-center justify-center">
            <p>Ao entrar, você concorda com nossos Termos de Serviço.</p>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
