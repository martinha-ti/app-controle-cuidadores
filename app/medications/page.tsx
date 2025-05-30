"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pill, Clock, AlertTriangle, Calendar, Package, Search, Filter, Heart, Plus } from "lucide-react"
import Link from "next/link"

export default function Medications() {
  const medications = [
    {
      id: 1,
      patientName: "Maria Silva",
      medicationName: "Metformina",
      dosage: "500mg",
      frequency: "2x ao dia",
      nextDose: "14:00",
      stockLevel: 5,
      expiryDate: "2025-03-15",
      status: "Crítico",
      lastDelivery: "2025-01-20",
    },
    {
      id: 2,
      patientName: "João Santos",
      medicationName: "Donepezila",
      dosage: "10mg",
      frequency: "1x ao dia",
      nextDose: "20:00",
      stockLevel: 15,
      expiryDate: "2025-06-20",
      status: "Normal",
      lastDelivery: "2025-01-25",
    },
    {
      id: 3,
      patientName: "Ana Costa",
      medicationName: "Insulina",
      dosage: "10 unidades",
      frequency: "3x ao dia",
      nextDose: "12:00",
      stockLevel: 2,
      expiryDate: "2025-02-10",
      status: "Urgente",
      lastDelivery: "2025-01-28",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Crítico":
        return "destructive"
      case "Urgente":
        return "destructive"
      case "Atenção":
        return "secondary"
      case "Normal":
        return "default"
      default:
        return "outline"
    }
  }

  const getStockColor = (level: number) => {
    if (level <= 5) return "text-red-600"
    if (level <= 10) return "text-yellow-600"
    return "text-green-600"
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
              <h1 className="text-xl font-bold text-gray-900">Medicamentos</h1>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Medicamento
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-red-800">Estoque Crítico</p>
                  <p className="text-2xl font-bold text-red-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-yellow-800">Vencendo em 7 dias</p>
                  <p className="text-2xl font-bold text-yellow-900">2</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-blue-800">Entregas Pendentes</p>
                  <p className="text-2xl font-bold text-blue-900">5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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
                <Input placeholder="Buscar medicamento..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Paciente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maria">Maria Silva</SelectItem>
                  <SelectItem value="joao">João Santos</SelectItem>
                  <SelectItem value="ana">Ana Costa</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critico">Crítico</SelectItem>
                  <SelectItem value="urgente">Urgente</SelectItem>
                  <SelectItem value="atencao">Atenção</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Estoque" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="baixo">Baixo ({"<"} 5)</SelectItem>
                  <SelectItem value="medio">Médio (5-10)</SelectItem>
                  <SelectItem value="alto">Alto ({">"} 10)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Medications List */}
        <div className="space-y-6">
          {medications.map((medication) => (
            <Card key={medication.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback>
                        {medication.patientName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{medication.medicationName}</CardTitle>
                      <p className="text-sm text-gray-600">Paciente: {medication.patientName}</p>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(medication.status)}>{medication.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Dosagem & Frequência</p>
                    <p className="text-sm">{medication.dosage}</p>
                    <p className="text-sm text-gray-500">{medication.frequency}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Próxima Dose</p>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-500 mr-1" />
                      <span className="text-sm">{medication.nextDose}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Estoque</p>
                    <div className="flex items-center">
                      <Package className="h-4 w-4 mr-1" />
                      <span className={`text-sm font-medium ${getStockColor(medication.stockLevel)}`}>
                        {medication.stockLevel} unidades
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Validade</p>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm">{medication.expiryDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t">
                  <p className="text-sm text-gray-500">Última entrega: {medication.lastDelivery}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Pill className="h-4 w-4 mr-2" />
                      Registrar Dose
                    </Button>
                    <Button size="sm">
                      <Package className="h-4 w-4 mr-2" />
                      Solicitar Entrega
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Carregar Mais Medicamentos</Button>
        </div>
      </main>
    </div>
  )
}
