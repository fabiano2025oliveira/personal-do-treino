"use client";

import { useState } from "react";
import { Navbar } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Clock, 
  Flame,
  ChevronRight,
  Dumbbell,
  Target,
  TrendingUp
} from "lucide-react";

export default function TreinosPage() {
  const [selectedWorkout, setSelectedWorkout] = useState<number | null>(null);

  const workouts = [
    {
      id: 1,
      name: "Treino A - Peito e Tríceps",
      duration: 45,
      difficulty: "Intermediário",
      calories: 350,
      exercises: [
        {
          name: "Flexão de Braço",
          sets: 4,
          reps: "12-15",
          rest: 60,
          videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4",
          muscleGroup: "Peito"
        },
        {
          name: "Supino com Halteres",
          sets: 4,
          reps: "10-12",
          rest: 90,
          videoUrl: "https://www.youtube.com/embed/VmB1G1K7v94",
          muscleGroup: "Peito"
        },
        {
          name: "Tríceps Testa",
          sets: 3,
          reps: "12-15",
          rest: 60,
          videoUrl: "https://www.youtube.com/embed/d_KZxkY_0cM",
          muscleGroup: "Tríceps"
        },
        {
          name: "Mergulho no Banco",
          sets: 3,
          reps: "10-12",
          rest: 60,
          videoUrl: "https://www.youtube.com/embed/0326dy_-CzM",
          muscleGroup: "Tríceps"
        }
      ]
    },
    {
      id: 2,
      name: "Treino B - Costas e Bíceps",
      duration: 50,
      difficulty: "Intermediário",
      calories: 380,
      exercises: [
        {
          name: "Remada Curvada",
          sets: 4,
          reps: "10-12",
          rest: 90,
          videoUrl: "https://www.youtube.com/embed/FWJR5Ve8bnQ",
          muscleGroup: "Costas"
        },
        {
          name: "Puxada Alta",
          sets: 4,
          reps: "12-15",
          rest: 60,
          videoUrl: "https://www.youtube.com/embed/JEb-dwU3VF4",
          muscleGroup: "Costas"
        },
        {
          name: "Rosca Direta",
          sets: 3,
          reps: "12-15",
          rest: 60,
          videoUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
          muscleGroup: "Bíceps"
        },
        {
          name: "Rosca Martelo",
          sets: 3,
          reps: "10-12",
          rest: 60,
          videoUrl: "https://www.youtube.com/embed/zC3nLlEvin4",
          muscleGroup: "Bíceps"
        }
      ]
    },
    {
      id: 3,
      name: "Treino C - Pernas e Glúteos",
      duration: 55,
      difficulty: "Avançado",
      calories: 420,
      exercises: [
        {
          name: "Agachamento Livre",
          sets: 4,
          reps: "12-15",
          rest: 90,
          videoUrl: "https://www.youtube.com/embed/ultWZbUMPL8",
          muscleGroup: "Pernas"
        },
        {
          name: "Avanço",
          sets: 3,
          reps: "12 cada",
          rest: 60,
          videoUrl: "https://www.youtube.com/embed/QOVaHwm-Q6U",
          muscleGroup: "Pernas"
        },
        {
          name: "Stiff",
          sets: 4,
          reps: "12-15",
          rest: 90,
          videoUrl: "https://www.youtube.com/embed/1uDiW5--rAE",
          muscleGroup: "Posterior"
        },
        {
          name: "Elevação Pélvica",
          sets: 4,
          reps: "15-20",
          rest: 60,
          videoUrl: "https://www.youtube.com/embed/SEdqd1n0cvg",
          muscleGroup: "Glúteos"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Seus Treinos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Treinos personalizados para o seu biotipo: <span className="font-semibold text-orange-600">Mesomorfo</span>
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-200 dark:border-orange-900">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Objetivo</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">Ganhar Massa</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-900">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Treinos/Semana</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">3-4 dias</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-blue-200 dark:border-blue-900">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nível</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">Intermediário</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Workouts List */}
          <div className="space-y-6">
            {workouts.map((workout) => (
              <Card key={workout.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {workout.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                          {workout.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          {workout.duration} min
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <Flame className="w-4 h-4" />
                          ~{workout.calories} kcal
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => setSelectedWorkout(selectedWorkout === workout.id ? null : workout.id)}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                    >
                      {selectedWorkout === workout.id ? "Fechar" : "Ver Exercícios"}
                      <ChevronRight className={`w-5 h-5 ml-2 transition-transform ${selectedWorkout === workout.id ? "rotate-90" : ""}`} />
                    </Button>
                  </div>

                  {/* Exercises */}
                  {selectedWorkout === workout.id && (
                    <div className="mt-6 space-y-4 border-t pt-6">
                      {workout.exercises.map((exercise, index) => (
                        <Card key={index} className="p-4 bg-gray-50 dark:bg-gray-900">
                          <div className="flex flex-col lg:flex-row gap-4">
                            {/* Video */}
                            <div className="lg:w-1/3">
                              <div className="aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <iframe
                                  src={exercise.videoUrl}
                                  title={exercise.name}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            </div>

                            {/* Info */}
                            <div className="lg:w-2/3 flex flex-col justify-between">
                              <div>
                                <div className="flex items-start justify-between mb-3">
                                  <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                      {index + 1}. {exercise.name}
                                    </h4>
                                    <Badge variant="outline" className="text-xs">
                                      {exercise.muscleGroup}
                                    </Badge>
                                  </div>
                                  <Button size="sm" variant="ghost" className="text-orange-600">
                                    <Play className="w-4 h-4 mr-1" />
                                    Assistir
                                  </Button>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-4 mt-4">
                                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                                  <p className="text-2xl font-bold text-orange-600">{exercise.sets}</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">Séries</p>
                                </div>
                                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                                  <p className="text-2xl font-bold text-orange-600">{exercise.reps}</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">Repetições</p>
                                </div>
                                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                                  <p className="text-2xl font-bold text-orange-600">{exercise.rest}s</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">Descanso</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="mt-12 p-8 bg-gradient-to-r from-orange-500 to-red-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                Quer treinos novos toda semana?
              </h3>
              <p className="mb-6 text-orange-100">
                Assine nosso plano premium e tenha acesso ilimitado
              </p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Ver Planos Premium
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
