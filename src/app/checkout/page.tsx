'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('canceled')) {
      alert('Pagamento cancelado.');
    }
  }, [searchParams]);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_monthly', // Você pode definir um price ID no Stripe
        }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        alert('Erro ao criar sessão de checkout.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao processar pagamento.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Checkout</h1>
        <p className="text-gray-600 mb-6">Confirme seu pagamento para acessar os treinos personalizados.</p>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-lg font-semibold text-gray-900">Plano Mensal</p>
          <p className="text-2xl font-bold text-blue-600">R$ 29,99 / mês</p>
        </div>
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg"
        >
          {loading ? 'Processando...' : 'Confirmar Pagamento'}
        </button>
      </div>
    </div>
  );
}