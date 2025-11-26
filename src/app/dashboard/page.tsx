'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Verificação de pagamento
  useEffect(() => {
    const paymentConfirmed = localStorage.getItem('paymentConfirmed');
    const success = searchParams.get('success');

    if (success === 'true') {
      localStorage.setItem('paymentConfirmed', 'true');
    }

    if (!paymentConfirmed && !success) {
      router.push('/checkout');
      return;
    }
  }, [router, searchParams]);

  // Carregar perfil do usuário
  const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');

  // Função para gerar treinos personalizados
  const getTreinosPersonalizados = (objetivo: string) => {
    switch (objetivo) {
      case 'perder-peso':
        return [
          { nome: 'Corrida na Esteira', series: '3x20min' },
          { nome: 'Abdominais', series: '4x15' },
          { nome: 'Polichinelo', series: '3x50' },
          { nome: 'Burpees', series: '3x10' }
        ];
      case 'ganhar-massa':
        return [
          { nome: 'Supino Reto', series: '4x10' },
          { nome: 'Agachamento', series: '4x8' },
          { nome: 'Rosca Direta', series: '3x12' },
          { nome: 'Desenvolvimento', series: '3x10' }
        ];
      case 'definicao':
        return [
          { nome: 'Supino Inclinado', series: '3x12' },
          { nome: 'Leg Press', series: '4x10' },
          { nome: 'Tríceps Corda', series: '3x15' },
          { nome: 'Elevação Lateral', series: '3x12' }
        ];
      case 'condicionamento':
        return [
          { nome: 'Circuito Funcional', series: '3x15min' },
          { nome: 'Pular Corda', series: '4x5min' },
          { nome: 'Mountain Climbers', series: '3x30s' },
          { nome: 'Prancha', series: '3x1min' }
        ];
      default:
        return [
          { nome: 'Supino Reto', series: '3x12' },
          { nome: 'Agachamento', series: '4x10' },
          { nome: 'Rosca Direta', series: '3x15' },
          { nome: 'Abdominais', series: '3x20' }
        ];
    }
  };

  const treinos = getTreinosPersonalizados(profile.objetivo);

  const pesoAtual = parseInt(profile.peso) || 75;
  const metaPeso = profile.objetivo === 'ganhar-massa' ? pesoAtual + 5 : profile.objetivo === 'perder-peso' ? pesoAtual - 5 : pesoAtual + 2;
  const progresso = profile.objetivo === 'perder-peso' ? '+8%' : profile.objetivo === 'ganhar-massa' ? '+12%' : '+6%';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Bem-vindo, {profile.nome || 'Usuário'}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Seu treino personalizado baseado em {profile.objetivo ? profile.objetivo.replace('-', ' ') : 'seus objetivos'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Treinos Hoje</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{treinos.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded"></div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Progresso</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{progresso}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dias Ativos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{profile.disponibilidade ? profile.disponibilidade.split('-')[0] : '3'}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Perfil</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Premium</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Treino de Hoje - {profile.objetivo ? profile.objetivo.replace('-', ' ').toUpperCase() : 'GERAL'}
            </h2>
            <div className="space-y-3">
              {treinos.map((treino, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{treino.nome}</span>
                  <span className="text-sm text-gray-500">{treino.series}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
              Iniciar Treino
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Sua Evolução
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Peso Atual</span>
                <span className="font-semibold">{pesoAtual}kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Meta</span>
                <span className="font-semibold">{metaPeso}kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Progresso</span>
                <span className="font-semibold text-green-600">{progresso}</span>
              </div>
            </div>
            <button className="w-full mt-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-2 px-4 rounded">
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}