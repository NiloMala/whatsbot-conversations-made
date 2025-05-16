
import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChartBar, Users, ArrowRight, Settings, Bot, MessageSquare } from "lucide-react";

const dashboardFeatures = [
  {
    title: "Criação de Bots",
    description: "Interface visual para criar e gerenciar seus bots de WhatsApp.",
    icon: Bot,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Análise de Conversas",
    description: "Estatísticas detalhadas sobre suas interações com clientes.",
    icon: ChartBar,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Gerenciamento de Contatos",
    description: "Organize e segmente sua base de contatos para campanhas.",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Configurações",
    description: "Personalize sua conta e configure integrações com outros sistemas.",
    icon: Settings,
    color: "bg-orange-50 text-orange-600",
  },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-6">
              Seu <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600">
              Este é um exemplo de como seria o acesso ao seu dashboard de
              gerenciamento de bots.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="bg-gradient-to-r from-brand-500 to-blue-700 text-white p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Dashboard BotWhats</h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <button className="p-2 hover:bg-white/10 rounded-full">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="relative">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Mensagens Enviadas</h3>
                    <MessageSquare className="h-5 w-5 text-brand-500" />
                  </div>
                  <p className="text-3xl font-bold">1,234</p>
                  <p className="text-green-600 text-sm mt-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    12% desde ontem
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Clientes Atendidos</h3>
                    <Users className="h-5 w-5 text-brand-500" />
                  </div>
                  <p className="text-3xl font-bold">856</p>
                  <p className="text-green-600 text-sm mt-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    8% desde ontem
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Taxa de Resposta</h3>
                    <svg
                      className="w-5 h-5 text-brand-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-green-600 text-sm mt-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    2% desde ontem
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Tempo de Resposta</h3>
                    <svg
                      className="w-5 h-5 text-brand-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold">30s</p>
                  <p className="text-green-600 text-sm mt-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                    15% desde ontem
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                <h3 className="font-medium mb-4">Visão geral das conversas</h3>
                <div className="h-64 flex items-center justify-center">
                  <p className="text-gray-500">Gráfico de estatísticas aqui</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-medium mb-4">Conversas Recentes</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                      >
                        <img
                          src={`https://randomuser.me/api/portraits/${
                            i % 2 === 0 ? "women" : "men"
                          }/${i + 30}.jpg`}
                          alt={`User ${i}`}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">Cliente {i}</p>
                          <p className="text-sm text-gray-500 truncate">
                            Última mensagem da conversa...
                          </p>
                        </div>
                        <div className="ml-auto text-sm text-gray-500">
                          {i === 1 ? "Agora" : `${i * 5}m atrás`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-medium mb-4">Bots Ativos</h3>
                  <div className="space-y-4">
                    {["Atendimento", "Vendas", "Suporte"].map((bot, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                            i === 0
                              ? "bg-green-500"
                              : i === 1
                              ? "bg-blue-500"
                              : "bg-purple-500"
                          }`}
                        >
                          <Bot className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Bot {bot}</p>
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            <span className="text-sm text-gray-500">Online</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Features */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              O que você pode fazer no dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Seu acesso completo às ferramentas de gerenciamento de bots para WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {dashboardFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/signup">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white font-medium">
                Crie sua Conta e Acesse o Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
