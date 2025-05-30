"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Users, Heart, Pill, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const urgentAlerts = [
    { id: 1, type: "medication", message: "Maria Silva - Medicamento vence em 2 dias", priority: "high" },
    { id: 2, type: "care", message: "João Santos precisa de cuidador para amanhã", priority: "medium" },
    { id: 3, type: "medication", message: "Ana Costa - Reposição de insulina necessária", priority: "high" },
  ]

  const recentMatches = [
    {
      id: 1,
      caregiver: "Carla Mendes",
      elderly: "Maria Silva",
      compatibility: 95,
      status: "confirmed",
    },
    {
      id: 2,
      caregiver: "Roberto Lima",
      elderly: "João Santos",
      compatibility: 88,
      status: "pending",
    },
  ]

  const stats = [
    { title: "Idosos Ativos", value: "127", icon: Users, color: "text-blue-600" },
    { title: "Cuidadores", value: "89", icon: Heart, color: "text-green-600" },
    { title: "Medicamentos", value: "342", icon: Pill, color: "text-purple-600" },
    { title: "Alertas Ativos", value: "12", icon: Bell, color: "text-red-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">CuidarBem</h1>
            </div>
            <nav className="flex space-x-4">
              <Link href="/caregivers">
                <Button variant="ghost">Cuidadores</Button>
              </Link>
              <Link href="/elderly">
                <Button variant="ghost">Idosos</Button>
              </Link>
              <Link href="/medications">
                <Button variant="ghost">Medicamentos</Button>
              </Link>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Alertas
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Urgent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Alertas Urgentes
              </CardTitle>
              <CardDescription>Situações que requerem atenção imediata</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {urgentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      {alert.type === "medication" ? (
                        <Pill className="h-4 w-4 text-purple-500 mr-3" />
                      ) : (
                        <Users className="h-4 w-4 text-blue-500 mr-3" />
                      )}
                      <span className="text-sm">{alert.message}</span>
                    </div>
                    <Badge variant={alert.priority === "high" ? "destructive" : "secondary"}>
                      {alert.priority === "high" ? "Alta" : "Média"}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                Ver Todos os Alertas
              </Button>
            </CardContent>
          </Card>

          {/* Recent Matches */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 text-green-500 mr-2" />
                Conexões Recentes
              </CardTitle>
              <CardDescription>Últimas combinações entre cuidadores e idosos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMatches.map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarFallback>
                          {match.caregiver
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{match.caregiver}</p>
                        <p className="text-xs text-gray-500">→ {match.elderly}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{match.compatibility}% compatível</p>
                      <Badge variant={match.status === "confirmed" ? "default" : "secondary"}>
                        {match.status === "confirmed" ? "Confirmado" : "Pendente"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Link href="/matching">Ver Sistema de Matching</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Acesso rápido às principais funcionalidades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center">
                <Users className="h-6 w-6 mb-2" />
                Cadastrar Idoso
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center" variant="outline">
                <Heart className="h-6 w-6 mb-2" />
                Cadastrar Cuidador
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center" variant="outline">
                <Pill className="h-6 w-6 mb-2" />
                Gerenciar Medicamentos
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
