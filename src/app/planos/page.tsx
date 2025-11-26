"use client";

import Link from "next/link";
import { Navbar } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Zap,
  Crown,
  Sparkles
} from "lucide-react";

export default function PlanosPage() {
  const plans = [
    {
      name: "Mensal",
      price: 29.90,
      interval: "mês",
      description: "Perfeito para começar",
      icon: Zap,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Análise de biotipo com IA",
        "1 treino personalizado",
        "Vídeos explicativos",
        "Acompanhamento básico",
        "Suporte por email"
      ]
    },
    {
      name: "Trimestral",
      price: 19.99,
      interval: "mês",
      description: "Mais popular",
      icon: Crown,
      color: "from-orange-500 to-red-600",
      popular: true,
      features: [
        "Tudo do plano Mensal",
        "3 treinos personalizados",
        "Novos treinos toda semana",
        "Acompanhamento completo",
        "Cardápio nutricional",
        "Suporte prioritário via chat",
        "Acesso a comunidade exclusiva"
      ]
    },
    {
      name: "Anual",
      price: 12.99,
      interval: "mês",
      description: "Melhor custo-benefício",
      icon: Sparkles,
      color: "from-purple-500 to-pink-600",
      features: [
        "Tudo do plano Trimestral",
        "Treinos ilimitados",
        "Consultoria mensal com especialista",
        "Plano nutricional personalizado",
        "Ajustes semanais no treino",
        "Grupo VIP de acompanhamento",
        "Acesso antecipado a novidades"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 text-orange-600 border-0">
              7 dias grátis para testar
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Escolha seu plano
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Todos os planos incluem acesso à plataforma completa. Cancele quando quiser.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all hover:scale-105 ${
                  plan.popular ? "border-2 border-orange-500 shadow-2xl" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-2 text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Name & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        R$ {plan.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        /{plan.interval}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-orange-600" : "text-green-600"
                        }`} />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href={`/checkout?plano=${plan.name.toLowerCase()}`}>
                    <Button 
                      className={`w-full py-6 text-lg ${
                        plan.popular 
                          ? "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white" 
                          : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                      }`}
                    >
                      Começar Agora
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Como funciona o período de teste?",
                  answer: "Você tem 7 dias grátis para testar qualquer plano. Não cobramos nada durante esse período e você pode cancelar a qualquer momento."
                },
                {
                  question: "Posso mudar de plano depois?",
                  answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de cobrança."
                },
                {
                  question: "Como funciona o cancelamento?",
                  answer: "Você pode cancelar sua assinatura a qualquer momento pelo painel de configurações. Não há multas ou taxas de cancelamento."
                },
                {
                  question: "Os treinos são realmente personalizados?",
                  answer: "Sim! Nossa IA analisa sua foto, biotipo, objetivos e nível de experiência para criar treinos 100% personalizados para você."
                },
                {
                  question: "Preciso de equipamentos?",
                  answer: "Não necessariamente. Temos treinos para casa sem equipamentos e também treinos para quem tem acesso a academia."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <Card className="mt-16 p-12 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para transformar seu corpo?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 5.000 pessoas que já estão treinando com a gente
            </p>
            <Link href="/checkout">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-12 py-6">
                Começar Teste Grátis
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
