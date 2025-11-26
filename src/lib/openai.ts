// Integração com OpenAI para análise de biotipo e geração de treinos

export async function analyzeBiotipo(imageUrl: string, userInfo: {
  age?: number;
  height?: number;
  weight?: number;
  objetivo?: string;
}) {
  try {
    const response = await fetch('/api/analyze-biotipo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl, userInfo }),
    });

    if (!response.ok) throw new Error('Erro ao analisar biotipo');
    
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}

export async function generateWorkout(profile: {
  biotipo: string;
  objetivo: string;
  nivel: string;
  restricoes?: string[];
}) {
  try {
    const response = await fetch('/api/generate-workout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    });

    if (!response.ok) throw new Error('Erro ao gerar treino');
    
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}
