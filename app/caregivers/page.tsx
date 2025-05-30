"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, MapPin, Clock, Star, Search, Filter } from "lucide-react"
import Link from "next/link"

export default function Caregivers() {
  const caregivers = [
    {
      id: 1,
      name: "Carla Mendes",
      rating: 4.9,
      experience: "5 anos",
      specialties: ["Alzheimer", "Diabetes", "Mobilidade"],
      location: "São Paulo, SP",
      availability: "Disponível",
      hourlyRate: "R$ 25/hora",
      description: "Enfermeira especializada em cuidados geriátricos com experiência em demência.",
    },
    {
      id: 2,
      name: "Roberto Lima",
      rating: 4.7,
      experience: "3 anos",
      specialties: ["Fisioterapia", "Reabilitação"],
      location: "Rio de Janeiro, RJ",
      availability: "Ocupado",
      hourlyRate: "R$ 30/hora",
      description: "Fisioterapeuta com foco em reabilitação de idosos pós-cirúrgicos.",
    },
    {
      id: 3,
      name: "Ana Santos",
      rating: 4.8,
      experience: "7 anos",
      specialties: ["Cuidados Paliativos", "Medicação"],
      location: "Belo Horizonte, MG",
      availability: "Disponível",
      hourlyRate: "R$ 28/hora",
      description: "Técnica em enfermagem especializada em cuidados paliativos e administração de medicamentos.",
    },
  ]

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
              <h1 className="text-xl font-bold text-gray-900">Cuidadores</h1>
            </div>
            <Button>
              <Heart className="h-4 w-4 mr-2" />
              Cadastrar Cuidador
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
                  <SelectValue placeholder="Especialidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alzheimer">Alzheimer</SelectItem>
                  <SelectItem value="diabetes">Diabetes</SelectItem>
                  <SelectItem value="fisioterapia">Fisioterapia</SelectItem>
                  <SelectItem value="paliativos">Cuidados Paliativos</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Localização" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sp">São Paulo</SelectItem>
                  <SelectItem value="rj">Rio de Janeiro</SelectItem>
                  <SelectItem value="mg">Minas Gerais</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Disponibilidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Disponível</SelectItem>
                  <SelectItem value="busy">Ocupado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Caregivers List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caregivers.map((caregiver) => (
            <Card key={caregiver.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback>
                        {caregiver.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{caregiver.name}</CardTitle>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{caregiver.rating}</span>
                        <span className="text-sm text-gray-400 ml-2">• {caregiver.experience}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={caregiver.availability === "Disponível" ? "default" : "secondary"}>
                    {caregiver.availability}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{caregiver.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    {caregiver.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    {caregiver.hourlyRate}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {caregiver.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button className="flex-1">Ver Perfil</Button>
                  <Button variant="outline" className="flex-1">
                    Conectar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Carregar Mais Cuidadores</Button>
        </div>
      </main>
    </div>
  )
}
