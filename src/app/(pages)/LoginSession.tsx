import Image from "next/image"; // 1. Importar o componente Image
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

// 2. Importar o arquivo SVG como um componente React
import Logo from "@/assets/logo.svg";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          {/* 3. Substituir o ícone pelo seu logo */}
          <div className="flex justify-center items-center mb-4">
            <Image
              src={Logo}
              alt="Logo da Empresa"
              className="w-40" // Classes do Tailwind para garantir o tamanho
            />
          </div>
          {/* <CardTitle className="text-2xl font-bold">Conectar-se</CardTitle> */}
          <CardDescription>
            Inicie uma nova chamada de vídeo ou participe de uma existente.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Opção 1: Criar Nova Reunião */}
          <div className="space-y-2">
            <Button className="w-full font-semibold" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Criar Nova Reunião
            </Button>
          </div>

          {/* Divisor */}
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="mx-4 text-xs text-gray-500 uppercase">OU</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Opção 2: Entrar em Reunião Existente */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="meeting-code" className="font-medium">
                Digite o código da reunião
              </Label>
              <Input
                id="meeting-code"
                placeholder="Ex: abc-def-ghi"
                className="text-center tracking-wider"
              />
            </div>
            <Button variant="secondary" className="w-full">
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
  );
}
