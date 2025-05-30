"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, MapPin, Calendar, AlertCircle, Search, Filter, Heart } from "lucide-react"
import Link from "next/link"

export default function Elderly() {
  const elderlyList = [
    {
      id: 1,
      name: "Maria Silva",
      age: 78,
      location: "São Paulo, SP",
      conditions: ["Diabetes", "Hipertensão"],
      careNeeds: ["Medicação", "Companhia", "Mobilidade"],
      urgency: "Alta",
      lastVisit: "2 dias atrás",
      caregiver: "Carla Mendes",
      status: "Com cuidador",
    },
    {
      id: 2,
      name: "João Santos",
      age: 82,
      location: "Rio de Janeiro, RJ",
      conditions: ["Alzheimer", "Artrite"],
      careNeeds: ["Supervisão 24h", "Fisioterapia"],
      urgency: "Crítica",
      lastVisit: "Hoje",
      caregiver: null,
      status: "Procurando cuidador",
    },
    {
      id: 3,
      name: "Ana Costa",
      age: 75,
      location: "Belo Horizonte, MG",
      conditions: ["Diabetes Tipo 1"],
      careNeeds: ["Aplicação de insulina", "Monitoramento"],
      urgency: "Média",
      lastVisit: "1 semana atrás",
      caregiver: "Ana Santos",
      status: "Com cuidador",
    },
  ]

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Crítica":
        return "destructive"
      case "Alta":
        return "destructive"
      case "Média":
        return "secondary"
      default:
        return "outline"
    }
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
              <h1 className="text-xl font-bold text-gray-900">Idosos</h1>
            </div>
            <Button>
              <Users className="h-4 w-4 mr-2" />
              Cadastrar Idoso
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtros de Busca
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Buscar por nome..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Condição de Saúde" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diabetes">Diabetes</SelectItem>
                  <SelectItem value="alzheimer">Alzheimer</SelectItem>
                  <SelectItem value="hipertensao">Hipertensão</SelectItem>
                  <SelectItem value="artrite">Artrite</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Urgência" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critica">Crítica</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                  <SelectItem value="media">Média</SelectItem>
                  <SelectItem value="baixa">Baixa</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="com-cuidador">Com Cuidador</SelectItem>
                  <SelectItem value="procurando">Procurando Cuidador</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Elderly List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {elderlyList.map((elderly) => (
            <Card key={elderly.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback>
                        {elderly.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{elderly.name}</CardTitle>
                      <p className="text-sm text-gray-600">{elderly.age} anos</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={getUrgencyColor(elderly.urgency)}>{elderly.urgency}</Badge>
                    <Badge variant={elderly.status === "Com cuidador" ? "default" : "outline"}>{elderly.status}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    {elderly.location}
                  </div>

                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    Última visita: {elderly.lastVisit}
                  </div>

                  {elderly.caregiver && (
                    <div className="flex items-center text-sm">
                      <Heart className="h-4 w-4 text-green-500 mr-2" />
                      Cuidador: {elderly.caregiver}
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Condições de Saúde:</p>
                    <div className="flex flex-wrap gap-2">
                      {elderly.conditions.map((condition, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Necessidades de Cuidado:</p>
                    <div className="flex flex-wrap gap-2">
                      {elderly.careNeeds.map((need, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button className="flex-1">Ver Perfil</Button>
                  {!elderly.caregiver ? (
                    <Button variant="outline" className="flex-1">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Encontrar Cuidador
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex-1">
                      Gerenciar Cuidado
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Carregar Mais Idosos</Button>
        </div>
      </main>
    </div>
  )
}
