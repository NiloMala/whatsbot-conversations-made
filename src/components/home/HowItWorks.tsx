
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Crie sua conta",
    description:
      "Registre-se gratuitamente e configure seu perfil em poucos minutos.",
    image: "/placeholder.svg",
  },
  {
    number: "02",
    title: "Configure seu bot",
    description:
      "Use nosso construtor visual para criar fluxos de conversação sem precisar programar.",
    image: "/placeholder.svg",
  },
  {
    number: "03",
    title: "Conecte ao WhatsApp",
    description:
      "Integre com seu número de WhatsApp Business e comece a automatizar conversas.",
    image: "/placeholder.svg",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600">
            Em apenas três passos simples, você pode configurar e começar a usar
            seu bot de WhatsApp para transformar seu atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={step.image}
                    alt={`Passo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg
                    className="w-8 h-8 text-brand-500"
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
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/signup">
            <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white font-medium">
              Comece Agora Mesmo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
