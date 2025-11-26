import { NextRequest, NextResponse } from 'next/server';
import { verifyKirvanoWebhook } from '@/lib/kirvano';
import { headers } from 'next/headers';

const webhookSecret = process.env.KIRVANO_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('kirvano-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Assinatura ausente' },
        { status: 400 }
      );
    }

    // Verificar assinatura do webhook
    if (!verifyKirvanoWebhook(signature, body, webhookSecret)) {
      return NextResponse.json(
        { error: 'Assinatura inválida' },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);

    // Processar eventos do Kirvano
    switch (event.type) {
      case 'checkout.completed':
        const checkout = event.data;
        console.log('Pagamento concluído:', checkout.id);
        // Aqui você pode:
        // - Ativar assinatura do usuário no banco de dados
        // - Enviar email de confirmação
        // - Liberar acesso ao conteúdo premium
        break;

      case 'subscription.created':
        const subscription = event.data;
        console.log('Assinatura criada:', subscription.id);
        break;

      case 'subscription.updated':
        const updatedSubscription = event.data;
        console.log('Assinatura atualizada:', updatedSubscription.id);
        break;

      case 'subscription.cancelled':
        const cancelledSubscription = event.data;
        console.log('Assinatura cancelada:', cancelledSubscription.id);
        // Remover acesso premium do usuário
        break;

      case 'payment.succeeded':
        const payment = event.data;
        console.log('Pagamento bem-sucedido:', payment.id);
        break;

      case 'payment.failed':
        const failedPayment = event.data;
        console.log('Pagamento falhou:', failedPayment.id);
        // Notificar usuário sobre falha no pagamento
        break;

      default:
        console.log(`Evento não tratado: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Erro no webhook:', error);
    return NextResponse.json(
      { error: 'Erro ao processar webhook' },
      { status: 400 }
    );
  }
}