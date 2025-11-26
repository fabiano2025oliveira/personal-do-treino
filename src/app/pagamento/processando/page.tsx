"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Loader2, Copy, Download } from "lucide-react";
import Link from "next/link";

export default function ProcessandoPage() {
  const [status, setStatus] = useState<"processing" | "pix" | "success">("processing");
  const [pixCode, setPixCode] = useState("");

  useEffect(() => {
    // Simular processamento
    const timer = setTimeout(() => {
      // Verificar se é PIX ou cartão (aqui você pode pegar do localStorage ou query params)
      const isPix = Math.random() > 0.5; // Simulação
      
      if (isPix) {
        setStatus("pix");
        setPixCode("00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef1234567890520400005303986540547.005802BR5913FitAI Treinos6009SAO PAULO62070503***63041D3E");
      } else {
        setStatus("success");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    alert("Código PIX copiado!");
  };

  if (status === "processing") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Navbar />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Loader2 className="w-16 h-16 mx-auto mb-6 text-orange-600 animate-spin" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Processando seu pagamento...
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Aguarde enquanto confirmamos suas informações
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === "pix") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Navbar />
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-950/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-orange-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Quase lá!
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Escaneie o QR Code ou copie o código PIX para finalizar
                </p>
              </div>

              {/* QR Code Simulado */}
              <div className="bg-white p-8 rounded-lg mb-6 flex justify-center">
                <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-sm text-center px-4">
                    QR Code PIX<br />
                    (Em produção, aqui apareceria o QR Code real)
                  </p>
                </div>
              </div>

              {/* Código PIX */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Código PIX Copia e Cola
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={pixCode}
                    readOnly
                    className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-mono"
                  />
                  <Button onClick={copyPixCode} variant="outline">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Importante:</strong> Após realizar o pagamento, você receberá um e-mail de confirmação em até 5 minutos. Seu acesso será liberado automaticamente.
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Pagamento válido por 30 minutos</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Confirmação automática após pagamento</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Acesso imediato à plataforma</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pagamento confirmado! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Bem-vindo ao FitAI! Sua jornada de transformação começa agora.
          </p>

          <Card className="p-8 mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Próximos passos:
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Faça sua análise de biotipo
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tire uma foto e responda algumas perguntas para nossa IA criar seu treino personalizado
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Acesse seus treinos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Veja os exercícios com vídeos explicativos e comece a treinar hoje mesmo
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Acompanhe sua evolução
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Registre fotos, medidas e veja seu progresso em gráficos detalhados
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/analise">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8">
                Começar Análise Agora
              </Button>
            </Link>
            <Link href="/treinos">
              <Button size="lg" variant="outline" className="px-8">
                Ver Meus Treinos
              </Button>
            </Link>
          </div>

          <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              📧 Enviamos um e-mail de confirmação com todos os detalhes da sua assinatura para <strong>seu@email.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
