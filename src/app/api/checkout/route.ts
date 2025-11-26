import { NextRequest, NextResponse } from 'next/server';
import { createKirvanoCheckout, PLANS, PlanType } from '@/lib/kirvano';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planType, email, paymentMethod } = body as {
      planType: PlanType;
      email: string;
      paymentMethod: 'credit' | 'pix';
    };

    // Validar plano
    const plan = PLANS[planType];
    if (!plan) {
      return NextResponse.json(
        { error: 'Plano inválido' },
        { status: 400 }
      );
    }

    // Criar checkout no Kirvano
    const checkout = await createKirvanoCheckout({
      planType,
      email,
      paymentMethod,
    });

    return NextResponse.json({
      checkoutId: checkout.checkoutId,
      url: checkout.url
    });
  } catch (error) {
    console.error('Erro ao criar checkout no Kirvano:', error);
    return NextResponse.json(
      { error: 'Erro ao processar pagamento' },
      { status: 500 }
    );
  }
}