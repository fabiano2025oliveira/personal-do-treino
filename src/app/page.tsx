"use client";

import Link from "next/link";
import { Navbar } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Dumbbell, 
  Camera, 
  TrendingUp, 
  Video, 
  Zap, 
  Shield,
  Star,
  CheckCircle2,
  XCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Navbar />
      
      {/* Hero Section com Dizer Impactante */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Dizer Impactante */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-red-500 to-orange-600 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <XCircle className="w-8 h-8 text-white" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                PARE DE GASTAR DINHEIRO
              </h2>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/95 mb-2">
              com personal que não te acompanha!
            </p>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mt-4">
              Você paga caro por um personal que só aparece 2x por semana e te deixa sozinho o resto do tempo. 
              <span className="font-bold"> Chega de jogar dinheiro fora!</span>
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-600">
              Treinos personalizados com IA
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Seu Personal Trainer
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Movido por IA
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Treinos personalizados baseados no seu biotipo, vídeos explicativos e acompanhamento completo da sua evolução. Tudo isso sem sair de casa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/analise">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-8 py-6">
                <Camera className="w-5 h-5 mr-2" />
                Começar Análise Grátis
              </Button>
            </Link>
            <Link href="/planos">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                Ver Planos
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white dark:border-gray-900" />
                ))}
              </div>
              <span>+5.000 pessoas treinando</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
              ))}
              <span className="ml-2">4.9/5 avaliação</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparação Personal vs FitAI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Veja a diferença
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Compare e entenda por que você está perdendo dinheiro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Tradicional */}
            <Card className="p-8 border-2 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Personal Tradicional
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  "R$ 300-800/mês por 2-3x na semana",
                  "Só te acompanha durante o treino",
                  "Você fica sozinho nos outros dias",
                  "Sem feedback sobre sua evolução",
                  "Treinos genéricos para todos",
                  "Sem vídeos para consultar depois"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <p className="text-2xl font-bold text-red-600 text-center">
                  Até R$ 9.600/ano
                </p>
                <p className="text-sm text-red-600 text-center mt-1">
                  E você ainda fica sozinho 80% do tempo!
                </p>
              </div>
            </Card>

            {/* FitAI */}
            <Card className="p-8 border-2 border-green-200 dark:border-green-900 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  FitAI
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  "R$ 29,99/mês - acesso ilimitado",
                  "Acompanhamento 24/7 com IA",
                  "Treinos todos os dias da semana",
                  "Gráficos detalhados de evolução",
                  "Treinos personalizados para você",
                  "Biblioteca completa de vídeos"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                <p className="text-2xl font-bold text-white text-center">
                  Apenas R$ 360/ano
                </p>
                <p className="text-sm text-white text-center mt-1">
                  Economize R$ 9.240 por ano!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tudo que você precisa para treinar
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Tecnologia de ponta para resultados reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Camera,
                title: "Análise por IA",
                description: "Envie sua foto e nossa IA identifica seu biotipo e monta o treino perfeito",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Video,
                title: "Vídeos Explicativos",
                description: "Cada exercício com vídeo demonstrativo para execução perfeita",
                color: "from-red-500 to-pink-600"
              },
              {
                icon: TrendingUp,
                title: "Acompanhamento",
                description: "Registre sua evolução com fotos, medidas e gráficos detalhados",
                color: "from-pink-500 to-purple-600"
              },
              {
                icon: Dumbbell,
                title: "Treinos Variados",
                description: "Novos treinos toda semana adaptados ao seu progresso",
                color: "from-purple-500 to-indigo-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              3 passos simples para começar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tire uma foto",
                description: "Envie uma foto sua e responda algumas perguntas sobre seus objetivos"
              },
              {
                step: "2",
                title: "IA analisa",
                description: "Nossa inteligência artificial identifica seu biotipo e cria um plano personalizado"
              },
              {
                step: "3",
                title: "Comece a treinar",
                description: "Acesse seus treinos com vídeos e acompanhe sua evolução em tempo real"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange-500 to-red-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Por que escolher o FitAI?
              </h2>
              <div className="space-y-4">
                {[
                  "Economia de até 90% comparado a personal trainer",
                  "Treinos adaptados ao seu biotipo e objetivo",
                  "Acesso ilimitado a vídeos explicativos",
                  "Acompanhamento detalhado da evolução",
                  "Novos treinos toda semana",
                  "Suporte via chat quando precisar"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link href="/planos">
                <Button size="lg" className="mt-8 bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
                  Ver Planos e Preços
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center">
                <Dumbbell className="w-32 h-32 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-orange-500" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comece hoje mesmo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            7 dias grátis para testar. Cancele quando quiser.
          </p>
          <Link href="/analise">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg px-12 py-6">
              Começar Análise Grátis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Dumbbell className="w-6 h-6 text-orange-500" />
            <span className="font-bold text-xl">FitAI</span>
          </div>
          <p className="text-gray-400">
            © 2024 FitAI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}