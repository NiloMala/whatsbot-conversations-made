
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-blue-50 -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="font-bold text-5xl leading-tight md:text-6xl mb-6">
              Crie seu Bot de WhatsApp em{" "}
              <span className="gradient-text">minutos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automatize conversas, economize tempo e aumente suas vendas com nossa plataforma 
              intuitiva de criação de bots para WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white font-medium">
                  Criar Conta Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="font-medium">
                  Ver Funcionalidades
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">4.9/5</span> de mais de{" "}
                  <span className="font-medium">1,000+ clientes</span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:relative">
            <div className="bg-white p-4 rounded-3xl shadow-xl max-w-md mx-auto relative z-10">
              <div className="bg-green-50 rounded-2xl p-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">WhatsApp Bot</h3>
                    <p className="text-sm text-green-600">Online</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                    <p className="text-sm">Olá! Como posso ajudar você hoje?</p>
                    <p className="text-xs text-gray-400 mt-1">10:02</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg rounded-tr-none shadow-sm ml-auto max-w-[80%]">
                    <p className="text-sm">Quero saber sobre os preços dos produtos</p>
                    <p className="text-xs text-gray-400 mt-1">10:03</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                    <p className="text-sm">Claro! Aqui estão nossos preços:</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm">Produto A</span>
                        <span className="text-sm font-semibold">R$ 99,90</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Produto B</span>
                        <span className="text-sm font-semibold">R$ 149,90</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Produto C</span>
                        <span className="text-sm font-semibold">R$ 199,90</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">10:03</p>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="w-full py-2 px-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-500">
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="hidden lg:block absolute top-1/2 -right-16 transform -translate-y-1/2 w-40 h-40 bg-brand-500 rounded-full opacity-20"></div>
            <div className="hidden lg:block absolute bottom-0 -left-12 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
