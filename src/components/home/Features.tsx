
import React from "react";
import { Bot, ListCheck, MessageSquare, Calendar, Link, Database } from "lucide-react";

const features = [
  {
    title: "Respostas Automáticas",
    description:
      "Configure respostas automáticas para as perguntas mais frequentes e economize tempo.",
    icon: MessageSquare,
  },
  {
    title: "Menus Inteligentes",
    description:
      "Crie menus interativos para guiar seus clientes pela jornada de atendimento ideal.",
    icon: ListCheck,
  },
  {
    title: "Agendamentos",
    description:
      "Permita que seus clientes agendem serviços e consultas diretamente pelo WhatsApp.",
    icon: Calendar,
  },
  {
    title: "Integração com Ferramentas",
    description:
      "Conecte seu bot com CRMs, planilhas, agendas e outras ferramentas que você já usa.",
    icon: Link,
  },
  {
    title: "Automações Personalizadas",
    description:
      "Crie fluxos completos de atendimento e automação para diferentes cenários.",
    icon: Bot,
  },
  {
    title: "Base de Conhecimento",
    description:
      "Alimente seu bot com informações que ele pode usar para responder perguntas específicas.",
    icon: Database,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades Poderosas para seu Negócio
          </h2>
          <p className="text-lg text-gray-600">
            Transforme o atendimento de sua empresa com recursos inteligentes e
            fáceis de usar que aumentam a eficiência e melhoram a experiência do
            cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/features"
            className="inline-flex items-center text-brand-500 font-medium hover:text-brand-600 transition-colors"
          >
            Ver todas as funcionalidades
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
    </section>
  );
};

export default Features;
