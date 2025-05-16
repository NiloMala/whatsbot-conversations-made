
import React from "react";
import { Users, MessageSquare, ArrowUp } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Clientes Ativos",
      description: "Empresas usando nossa plataforma diariamente"
    },
    {
      icon: MessageSquare,
      value: "1 Milhão+",
      label: "Mensagens Enviadas",
      description: "Todos os dias através de nossa plataforma"
    },
    {
      icon: ArrowUp,
      value: "70%",
      label: "Aumento na Eficiência",
      description: "Média de melhoria relatada pelos clientes"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.value}</h3>
              <p className="text-lg font-medium mb-2">{stat.label}</p>
              <p className="text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
