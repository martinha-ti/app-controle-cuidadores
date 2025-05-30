"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Heart, Users, MapPin, Star, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function Matching() {
  const matches = [
    {
      id: 1,
      elderly: {
        name: "Maria Silva",
        age: 78,
        location: "São Paulo, SP",
        conditions: ["Diabetes", "Hipertensão"],
        needs: ["Medicação", "Companhia"],
      },
      caregiver: {
        name: "Carla Mendes",
        rating: 4.9,
        experience: "5 anos",
        specialties: ["Diabetes", "Medicação"],
        location: "São Paulo, SP",
      },
      compatibility: 95,
      factors: {
        location: 100,
        specialties: 95,
        availability: 90,
        experience: 95,
      },
      status: "pending",
    },
    {
      id: 2,
      elderly: {
        name: "João Santos",
        age: 82,
        location: "Rio de Janeiro, RJ",
        conditions: ["Alzheimer", "Artrite"],
        needs: ["Supervisão 24h", "Fisioterapia"],
      },
      caregiver: {
        name: "Roberto Lima",
        rating: 4.7,
        experience: "3 anos",
        specialties: ["Fisioterapia", "Reabilitação"],
        location: "Rio de Janeiro, RJ",
      },
      compatibility: 88,
      factors: {
        location: 100,
        specialties: 85,
        availability: 80,
        experience: 85,
      },
      status: "confirmed",
    },
    {
      id: 3,
      elderly: {
        name: "Ana Costa",
        age: 75,
        location: "Belo Horizonte, MG",
        conditions: ["Diabetes Tipo 1"],
        needs: ["Aplicação de insulina", "Monitoramento"],
      },
      caregiver: {
        name: "Ana Santos",
        rating: 4.8,
        experience: "7 anos",
        specialties: ["Medicação", "Diabetes"],
        location: "Belo Horizonte, MG",
      },
      compatibility: 92,
      factors: {
        location: 100,
        specialties: 90,
        availability: 85,
        experience: 95,
      },
      status: "rejected",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "rejected":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmado"
      case "rejected":
        return "Rejeitado"
      default:
        return "Pendente"
    }
  }

  const getCompatibilityColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <Heart className="h-8 w-8 text-blue-600 mr-3" />
              </Link>
              <h1 className="text-xl font-bold text-gray-900">Sistema de Matching</h1>
            </div>
            <Button>
              <Users className="h-4 w-4 mr-2" />
              Nova Combinação
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Matches Confirmados</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertCircle className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Aguardando Resposta</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Taxa de Sucesso</p>
                  <p className="text-2xl font-bold text-gray-900">87%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Matches List */}
        <div className="space-y-6">
          {matches.map((match) => (
            <Card key={match.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 text-blue-600 mr-2" />
                    Match #{match.id}
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className={`text-lg font-bold ${getCompatibilityColor(match.compatibility)}`}>
                        {match.compatibility}%
                      </p>
                      <p className="text-sm text-gray-500">Compatibilidade</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(match.status)}
                      <span className="text-sm font-medium">{getStatusText(match.status)}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Elderly Info */}
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarFallback>
                          {match.elderly.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{match.elderly.name}</h3>
                        <p className="text-sm text-gray-600">{match.elderly.age} anos</p>
                      </div>
                    </div>

                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      {match.elderly.location}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Condições:</p>
                      <div className="flex flex-wrap gap-2">
                        {match.elderly.conditions.map((condition, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {condition}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Necessidades:</p>
                      <div className="flex flex-wrap gap-2">
                        {match.elderly.needs.map((need, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {need}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Caregiver Info */}
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarFallback>
                          {match.caregiver.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{match.caregiver.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{match.caregiver.rating}</span>
                          <span className="text-sm text-gray-400 ml-2">• {match.caregiver.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      {match.caregiver.location}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Especialidades:</p>
                      <div className="flex flex-wrap gap-2">
                        {match.caregiver.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compatibility Factors */}
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-medium text-gray-700 mb-4">Fatores de Compatibilidade:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(match.factors).map(([factor, score]) => (
                      <div key={factor} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="capitalize">
                            {factor === "location"
                              ? "Localização"
                              : factor === "specialties"
                                ? "Especialidades"
                                : factor === "availability"
                                  ? "Disponibilidade"
                                  : "Experiência"}
                          </span>
                          <span className="font-medium">{score}%</span>
                        </div>
                        <Progress value={score} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                {match.status === "pending" && (
                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Confirmar Match
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <XCircle className="h-4 w-4 mr-2" />
                      Rejeitar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Carregar Mais Matches</Button>
        </div>
      </main>
    </div>
  )
}
