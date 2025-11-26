'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnalisePage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/checkout');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Análise Inteligente</h1>
        <p className="text-gray-600 mb-6">Nossa IA está analisando seus dados.</p>
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg"
        >
          {loading ? 'Analisando...' : 'Iniciar Análise'}
        </button>
      </div>
    </div>
  );
}