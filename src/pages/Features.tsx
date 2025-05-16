
import React from "react";
import Layout from "@/components/layout/Layout";
import { 
  MessageSquare, Bot, ListCheck, Calendar, Link, Database,
  Clock, Users, Phone, Settings, ChartBar, Image 
} from "lucide-react";

const featuresList = [
  {
    title: "Criador Visual de Mensagens",
    description: "Interface drag-and-drop para criar fluxos de mensagens sem precisar programar.",
    icon: MessageSquare,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Integração com Planilhas e CRMs",
    description: "Conecte facilmente com Google Sheets, Hubspot, Pipedrive e outros sistemas.",
    icon: Link,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Respostas Automáticas",
    description: "Configure respostas para perguntas frequentes e palavras-chave específicas.",
    icon: Bot,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Campanhas em Massa",
    description: "Envie mensagens personalizadas para grupos segmentados de contatos.",
    icon: Users,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Atendimento Humano com Transferência",
    description: "Transferência suave de conversas do bot para atendentes humanos quando necessário.",
    icon: Phone,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Horários Inteligentes",
    description: "Configure quando seu bot deve atender e quando transferir para equipe humana.",
    icon: Clock,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Menus Interativos",
    description: "Crie menus de navegação que guiam seus clientes pelo atendimento.",
    icon: ListCheck,
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Agendamento de Serviços",
    description: "Permita que clientes agendem serviços e recebam confirmações automáticas.",
    icon: Calendar,
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Base de Conhecimento",
    description: "Alimente seu bot com informações específicas sobre produtos, serviços e políticas.",
    icon: Database,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Personalização Avançada",
    description: "Ajuste todos os aspectos do seu bot para corresponder à identidade da sua marca.",
    icon: Settings,
    color: "bg-gray-50 text-gray-600",
  },
  {
    title: "Analytics Detalhados",
    description: "Acompanhe conversas, taxas de conversão e desempenho do atendimento.",
    icon: ChartBar,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Envio de Mídia",
    description: "Compartilhe imagens, PDFs, vídeos e outros arquivos em suas automações.",
    icon: Image,
    color: "bg-emerald-50 text-emerald-600",
  },
];

const Features = () => {
  return (
    <Layout>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-6">
              Funcionalidades Completas para seu{" "}
              <span className="gradient-text">WhatsApp</span>
            </h1>
            <p className="text-xl text-gray-600">
              Nossa plataforma possui todos os recursos que você precisa para
              transformar a forma como sua empresa se comunica com clientes pelo
              WhatsApp.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Pronto para começar a automatizar seu WhatsApp?
            </h2>
            <a
              href="/signup"
              className="btn-primary inline-flex"
            >
              Criar Conta Grátis
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
