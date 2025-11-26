"use client";

import { useState } from "react";
import { Navbar } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Camera, 
  Calendar,
  Weight,
  Ruler,
  Target,
  Plus
} from "lucide-react";

export default function EvolucaoPage() {
  const [showAddProgress, setShowAddProgress] = useState(false);

  // Dados de exemplo
  const progressData = [
    { date: "01/01/2024", weight: 75, bodyFat: 18, chest: 95, waist: 80, arms: 35 },
    { date: "15/01/2024", weight: 74, bodyFat: 17, chest: 96, waist: 79, arms: 36 },
    { date: "01/02/2024", weight: 73.5, bodyFat: 16, chest: 97, waist: 78, arms: 36.5 },
    { date: "15/02/2024", weight: 73, bodyFat: 15.5, chest: 98, waist: 77, arms: 37 },
  ];

  const photos = [
    { date: "01/01/2024", url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop" },
    { date: "01/02/2024", url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=600&fit=crop" },
    { date: "15/02/2024", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Sua Evolução
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Acompanhe seu progresso ao longo do tempo
              </p>
            </div>
            <Button 
              onClick={() => setShowAddProgress(!showAddProgress)}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
            >
              <Plus className="w-5 h-5 mr-2" />
              Registrar Progresso
            </Button>
          </div>

          {/* Add Progress Form */}
          {showAddProgress && (
            <Card className="p-6 mb-8 border-2 border-orange-200 dark:border-orange-900">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Novo Registro
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="date">Data</Label>
                  <Input id="date" type="date" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="weight">Peso (kg)</Label>
                  <Input id="weight" type="number" step="0.1" placeholder="70.5" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="bodyfat">Gordura Corporal (%)</Label>
                  <Input id="bodyfat" type="number" step="0.1" placeholder="15.5" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="chest">Peitoral (cm)</Label>
                  <Input id="chest" type="number" placeholder="95" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="waist">Cintura (cm)</Label>
                  <Input id="waist" type="number" placeholder="80" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="arms">Braços (cm)</Label>
                  <Input id="arms" type="number" placeholder="35" className="mt-2" />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAddProgress(false)}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                >
                  Salvar Registro
                </Button>
              </div>
            </Card>
          )}

          {/* Stats Overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-200 dark:border-orange-900">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                  <Weight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Peso Atual</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">73 kg</p>
                  <p className="text-xs text-green-600 dark:text-green-400">-2 kg</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-900">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Gordura</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">15.5%</p>
                  <p className="text-xs text-green-600 dark:text-green-400">-2.5%</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-blue-200 dark:border-blue-900">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Ruler className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Peitoral</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">98 cm</p>
                  <p className="text-xs text-green-600 dark:text-green-400">+3 cm</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-900">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dias Ativos</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">45</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Últimos 60 dias</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="graficos" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="graficos">Gráficos</TabsTrigger>
              <TabsTrigger value="fotos">Fotos</TabsTrigger>
              <TabsTrigger value="historico">Histórico</TabsTrigger>
            </TabsList>

            {/* Gráficos */}
            <TabsContent value="graficos" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Evolução do Peso
                </h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {progressData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-orange-500 to-red-600 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${(data.weight / 75) * 100}%` }}
                      />
                      <div className="text-center">
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{data.weight}kg</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{data.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Gordura Corporal
                  </h3>
                  <div className="h-48 flex items-end justify-between gap-2">
                    {progressData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-gradient-to-t from-purple-500 to-pink-600 rounded-t-lg"
                          style={{ height: `${(data.bodyFat / 18) * 100}%` }}
                        />
                        <p className="text-xs font-bold text-gray-900 dark:text-white">{data.bodyFat}%</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Medidas (cm)
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: "Peitoral", value: 98, max: 100, color: "from-blue-500 to-cyan-600" },
                      { label: "Cintura", value: 77, max: 85, color: "from-green-500 to-emerald-600" },
                      { label: "Braços", value: 37, max: 40, color: "from-orange-500 to-red-600" }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{item.value} cm</span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all`}
                            style={{ width: `${(item.value / item.max) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Fotos */}
            <TabsContent value="fotos">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                    <div className="aspect-[3/4] relative">
                      <img 
                        src={photo.url} 
                        alt={`Progresso ${photo.date}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-medium">{photo.date}</p>
                      </div>
                    </div>
                  </Card>
                ))}
                <Card className="aspect-[3/4] border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-orange-500 transition-colors cursor-pointer flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Adicionar Foto
                    </p>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Histórico */}
            <TabsContent value="historico">
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Data</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Peso</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Gordura</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Peitoral</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Cintura</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Braços</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {progressData.reverse().map((data, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{data.date}</td>
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{data.weight} kg</td>
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{data.bodyFat}%</td>
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{data.chest} cm</td>
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{data.waist} cm</td>
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{data.arms} cm</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
