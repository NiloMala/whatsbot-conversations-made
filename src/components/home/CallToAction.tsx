
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "7 dias de teste grátis",
  "Configuração assistida",
  "Suporte prioritário",
  "Cancelamento a qualquer momento",
];

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-brand-500 to-blue-700 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para transformar seu atendimento via WhatsApp?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Junte-se a milhares de empresas que já estão economizando tempo
                e aumentando vendas com automação inteligente.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/signup">
                <Button size="lg" className="bg-white text-brand-500 hover:bg-gray-100 font-medium">
                  Comece Agora Mesmo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="hidden lg:block relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-white/10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px]">
                <img
                  src="/placeholder.svg"
                  alt="Dashboard"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
