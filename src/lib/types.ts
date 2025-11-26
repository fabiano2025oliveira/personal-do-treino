// Tipos do App de Treinos

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  biotipo: 'ectomorfo' | 'mesomorfo' | 'endomorfo' | null;
  objetivo: 'perder_peso' | 'ganhar_massa' | 'definir' | 'manter' | null;
  nivel: 'iniciante' | 'intermediario' | 'avancado' | null;
  photoUrl?: string;
  createdAt: Date;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
  muscleGroup: string;
  difficulty: 'facil' | 'medio' | 'dificil';
  sets: number;
  reps: string;
  restTime: number;
}

export interface Workout {
  id: string;
  userId: string;
  name: string;
  description: string;
  exercises: Exercise[];
  duration: number;
  difficulty: 'facil' | 'medio' | 'dificil';
  createdAt: Date;
}

export interface Progress {
  id: string;
  userId: string;
  date: Date;
  weight?: number;
  bodyFat?: number;
  measurements?: {
    chest?: number;
    waist?: number;
    hips?: number;
    arms?: number;
    legs?: number;
  };
  photos?: string[];
  notes?: string;
}

export interface Subscription {
  id: string;
  name: string;
  price: number;
  interval: 'mensal' | 'trimestral' | 'anual';
  features: string[];
  popular?: boolean;
}
