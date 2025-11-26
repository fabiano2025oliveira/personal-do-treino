// Configuração do Kirvano
const KIRVANO_API_KEY = process.env.KIRVANO_API_KEY!;
const KIRVANO_BASE_URL = 'https://api.kirvano.com/v1';

// Configuração dos planos
export const PLANS = {
  mensal: {
    name: 'Plano Mensal',
    price: 29.90,
    priceInCents: 2990,
    period: 'month',
    interval: 1,
  },
  trimestral: {
    name: 'Plano Trimestral',
    price: 19.99,
    priceInCents: 1999,
    period: 'month',
    interval: 3,
  },
  anual: {
    name: 'Plano Anual',
    price: 12.99,
    priceInCents: 1299,
    period: 'year',
    interval: 1,
  },
} as const;

export type PlanType = keyof typeof PLANS;

// Função para criar checkout no Kirvano
export async function createKirvanoCheckout({
  planType,
  email,
  paymentMethod,
}: {
  planType: PlanType;
  email: string;
  paymentMethod: 'credit' | 'pix';
}) {
  const plan = PLANS[planType];
  const totalAmount = plan.priceInCents * plan.interval;

  const response = await fetch(`${KIRVANO_BASE_URL}/checkouts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${KIRVANO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: totalAmount,
      currency: 'BRL',
      description: `Assinatura ${plan.name} - FitAI`,
      customer_email: email,
      payment_method: paymentMethod === 'pix' ? 'boleto' : 'credit_card',
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/pagamento/sucesso?checkout_id={CHECKOUT_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/checkout`,
      metadata: {
        planType,
      },
      // Para assinaturas recorrentes, se suportado
      recurring: {
        interval: plan.period,
        interval_count: plan.interval,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar checkout no Kirvano');
  }

  const data = await response.json();
  return {
    checkoutId: data.id,
    url: data.checkout_url,
  };
}

// Função para verificar webhook do Kirvano
export function verifyKirvanoWebhook(signature: string, body: string, secret: string) {
  // Implementar verificação de assinatura similar ao Stripe
  // Kirvano provavelmente usa HMAC-SHA256
  const crypto = require('crypto');
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('hex');

  return signature === expectedSignature;
}