import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChartBar, 
  Users, 
  ArrowRight, 
  Settings, 
  Bot, 
  MessageSquare,
  Activity,
  QrCode,
  Send,
  Bell
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Dashboard = () => {
  const navigate = useNavigate();
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'waiting'>('disconnected');
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for the dashboard
  const stats = [
    {
      title: "Mensagens Enviadas",
      value: "1,234",
      change: "+12%",
      icon: <MessageSquare className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Clientes Atendidos",
      value: "856",
      change: "+8%",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Taxa de Resposta",
      value: "98%",
      change: "+2%",
      icon: <Activity className="h-5 w-5 text-purple-500" />,
    },
    {
      title: "Tempo de Resposta",
      value: "30s",
      change: "-15%",
      icon: <Bell className="h-5 w-5 text-orange-500" />,
    },
  ];

  const recentContacts = [
    { id: 1, name: "Maria Silva", phone: "+5511987654321", lastMessage: "Olá, gostaria de saber mais sobre seus serviços.", time: "Agora", image: "https://randomuser.me/api/portraits/women/32.jpg" },
    { id: 2, name: "João Costa", phone: "+5511987654322", lastMessage: "Obrigado pelo atendimento!", time: "5m atrás", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Ana Santos", phone: "+5511987654323", lastMessage: "Qual o horário de funcionamento?", time: "15m atrás", image: "https://randomuser.me/api/portraits/women/31.jpg" },
  ];

  const activeBots = [
    { id: 1, name: "Atendimento", status: "online", icon: <Bot className="h-5 w-5" />, color: "bg-green-500" },
    { id: 2, name: "Vendas", status: "online", icon: <Bot className="h-5 w-5" />, color: "bg-blue-500" },
    { id: 3, name: "Suporte", status: "online", icon: <Bot className="h-5 w-5" />, color: "bg-purple-500" },
  ];

  const handleConnectWhatsApp = () => {
    setConnectionStatus('waiting');
    // Simulate API call to generate QR code
    setTimeout(() => {
      setConnectionStatus('connected');
    }, 3000);
  };

  const handleTabClick = (tab: string) => {
    if (tab === 'bot-builder') {
      navigate('/bot-builder');
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Bem-vindo ao seu painel de controle de bots WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5 ${
              connectionStatus === 'connected' 
                ? 'bg-green-100 text-green-700' 
                : connectionStatus === 'waiting'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                connectionStatus === 'connected'
                  ? 'bg-green-500'
                  : connectionStatus === 'waiting'
                  ? 'bg-yellow-500' 
                  : 'bg-red-500'
              }`}></span>
              {connectionStatus === 'connected' 
                ? 'WhatsApp Conectado' 
                : connectionStatus === 'waiting'
                ? 'Aguardando QR Code'
                : 'WhatsApp Desconectado'}
            </div>
            {connectionStatus !== 'connected' && (
              <Button onClick={handleConnectWhatsApp}>
                {connectionStatus === 'waiting' ? 'Aguarde...' : 'Conectar WhatsApp'}
              </Button>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex border-b">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'border-b-2 border-brand-500 text-brand-500' : 'text-gray-600'}`}
            onClick={() => handleTabClick('overview')}
          >
            Visão Geral
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'messages' ? 'border-b-2 border-brand-500 text-brand-500' : 'text-gray-600'}`}
            onClick={() => handleTabClick('messages')}
          >
            Mensagens
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'contacts' ? 'border-b-2 border-brand-500 text-brand-500' : 'text-gray-600'}`}
            onClick={() => handleTabClick('contacts')}
          >
            Contatos
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'campaigns' ? 'border-b-2 border-brand-500 text-brand-500' : 'text-gray-600'}`}
            onClick={() => handleTabClick('campaigns')}
          >
            Campanhas
          </button>
          <button 
            className={`px-4 py-2 font-medium text-gray-600 hover:text-brand-500`}
            onClick={() => handleTabClick('bot-builder')}
          >
            Construtor de Bots
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'settings' ? 'border-b-2 border-brand-500 text-brand-500' : 'text-gray-600'}`}
            onClick={() => handleTabClick('settings')}
          >
            Configurações
          </button>
        </nav>

        {/* Dashboard Stats */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    {stat.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                      <span className={`mr-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change.startsWith('+') ? '↑' : '↓'}
                      </span>
                      {stat.change} desde ontem
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Connection Status Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Visão geral das conversas</CardTitle>
                  <CardDescription>Estatísticas de mensagens nas últimas 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center">
                  <p className="text-gray-500">Gráfico de estatísticas aqui</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conexão WhatsApp</CardTitle>
                  <CardDescription>Status da sua conexão</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {connectionStatus === 'waiting' ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-pulse bg-gray-200 w-48 h-48 flex items-center justify-center mb-4">
                        <QrCode className="h-16 w-16 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-500">Gerando QR Code...</p>
                    </div>
                  ) : connectionStatus === 'connected' ? (
                    <div className="flex flex-col items-center">
                      <div className="bg-green-100 text-green-700 p-6 rounded-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-green-700 font-medium">WhatsApp conectado com sucesso!</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Número: +55 11 98765-4321
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-100 w-48 h-48 flex items-center justify-center mb-4">
                        <QrCode className="h-16 w-16 text-gray-400" />
                      </div>
                      <Button onClick={handleConnectWhatsApp} className="w-full">
                        Conectar WhatsApp
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Recent Conversations & Active Bots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Conversas Recentes</CardTitle>
                    <CardDescription>Últimas interações com seus contatos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentContacts.map((contact) => (
                        <div key={contact.id} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer transition-colors">
                          <img
                            src={contact.image}
                            alt={contact.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium">{contact.name}</p>
                            <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                          </div>
                          <div className="text-sm text-gray-500">{contact.time}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Bots Ativos</CardTitle>
                    <CardDescription>Status dos seus bots configurados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activeBots.map((bot) => (
                        <div
                          key={bot.id}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${bot.color}`}>
                            {bot.icon}
                          </div>
                          <div>
                            <p className="font-medium">Bot {bot.name}</p>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              <span className="text-sm text-gray-500">Online</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Central de Mensagens</CardTitle>
                <CardDescription>Gerencie suas conversas com clientes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-gray-500">
                  Selecione um contato para iniciar uma conversa ou visualizar o histórico.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Placeholder for Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Contatos</CardTitle>
                  <CardDescription>Gerencie seus contatos e grupos</CardDescription>
                </div>
                <Button size="sm">
                  Adicionar Contato
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Telefone</TableHead>
                      <TableHead>Conversas</TableHead>
                      <TableHead>Última Interação</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentContacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <img 
                              src={contact.image} 
                              alt={contact.name} 
                              className="w-8 h-8 rounded-full"
                            />
                            {contact.name}
                          </div>
                        </TableCell>
                        <TableCell>{contact.phone}</TableCell>
                        <TableCell>12</TableCell>
                        <TableCell>{contact.time}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            Ver histórico
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Placeholder for Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Campanhas</CardTitle>
                  <CardDescription>Gerencie suas campanhas de mensagens</CardDescription>
                </div>
                <Button size="sm">
                  <Send className="h-4 w-4 mr-2" />
                  Nova Campanha
                </Button>
              </CardHeader>
              <CardContent className="text-center py-12">
                <Send className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium mb-2">Nenhuma campanha criada</h3>
                <p className="text-gray-500 mb-6">
                  Crie uma campanha para enviar mensagens em massa para seus contatos.
                </p>
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Criar Primeira Campanha
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Placeholder for Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações</CardTitle>
                <CardDescription>Gerencie as configurações do seu bot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h3 className="font-medium mb-1">Perfil</h3>
                      <p className="text-sm text-gray-500">Edite informações do seu perfil e conta</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h3 className="font-medium mb-1">Notificações</h3>
                      <p className="text-sm text-gray-500">Configure alertas e notificações</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h3 className="font-medium mb-1">Integrações</h3>
                      <p className="text-sm text-gray-500">Conecte com outras ferramentas</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h3 className="font-medium mb-1">Assinatura</h3>
                      <p className="text-sm text-gray-500">Gerencie seu plano e pagamentos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
