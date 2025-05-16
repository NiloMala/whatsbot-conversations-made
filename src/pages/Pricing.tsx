
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Ideal para pequenos negócios começando com automação.",
    price: "79",
    features: [
      "1 número de WhatsApp",
      "Até 1.000 contatos",
      "Respostas automáticas",
      "Menus interativos",
      "Relatórios básicos",
      "Suporte por email",
    ],
    cta: "Começar agora",
    highlight: false,
  },
  {
    name: "Pro",
    description: "Para empresas que buscam crescer com automação avançada.",
    price: "149",
    features: [
      "3 números de WhatsApp",
      "Até 5.000 contatos",
      "Tudo do plano Starter",
      "Integrações com CRMs",
      "Campanhas em massa",
      "Transferência para humanos",
      "Agendamentos",
      "Relatórios avançados",
      "Suporte prioritário",
    ],
    cta: "Escolher Pro",
    highlight: true,
  },
  {
    name: "Agência",
    description: "Para agências e empresas com grandes volumes.",
    price: "299",
    features: [
      "10 números de WhatsApp",
      "Até 15.000 contatos",
      "Tudo do plano Pro",
      "API para integrações",
      "White label",
      "Multi-usuários",
      "Acesso a lançamentos beta",
      "Gerente de conta dedicado",
    ],
    cta: "Falar com vendas",
    highlight: false,
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <Layout>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-6">
              Planos Acessíveis para Todos os Tamanhos de{" "}
              <span className="gradient-text">Negócio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Escolha o plano ideal para sua empresa e comece a automatizar seu
              atendimento no WhatsApp hoje mesmo.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-lg ${!annual ? "text-brand-500 font-medium" : "text-gray-600"}`}>
                Mensal
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-16 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300 focus:outline-none"
              >
                <div
                  className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    annual ? "translate-x-8" : "translate-x-0"
                  }`}
                ></div>
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-lg ${annual ? "text-brand-500 font-medium" : "text-gray-600"}`}>
                  Anual
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                  Economize 20%
                </span>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden border ${
                  plan.highlight
                    ? "border-brand-500 shadow-xl relative"
                    : "border-gray-200 shadow-md"
                }`}
              >
                {plan.highlight && (
                  <div className="bg-brand-500 text-white text-sm font-medium py-1 text-center">
                    Mais Popular
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      R$ {annual ? (parseInt(plan.price) * 0.8 * 12).toString() : plan.price}
                    </span>
                    <span className="text-gray-600">/{annual ? "ano" : "mês"}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={plan.name === "Agência" ? "/contact" : "/signup"}>
                    <Button
                      className={`w-full ${
                        plan.highlight
                          ? "bg-brand-500 hover:bg-brand-600 text-white"
                          : "bg-white border border-brand-500 text-brand-500 hover:bg-brand-50"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">
                  Preciso ter conhecimento técnico para usar a plataforma?
                </h3>
                <p className="text-gray-600">
                  Não, nossa plataforma foi desenvolvida para ser intuitiva e
                  fácil de usar, mesmo para quem não tem conhecimentos técnicos.
                  O construtor visual permite criar fluxos de mensagens
                  arrastando e soltando blocos.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">
                  Posso testar a plataforma antes de comprar?
                </h3>
                <p className="text-gray-600">
                  Sim! Oferecemos um período de teste gratuito de 7 dias em todos
                  os planos, sem necessidade de cartão de crédito. Você pode
                  explorar todas as funcionalidades e decidir se a plataforma
                  atende às suas necessidades.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">
                  É possível mudar de plano depois?
                </h3>
                <p className="text-gray-600">
                  Absolutamente! Você pode fazer upgrade ou downgrade do seu
                  plano a qualquer momento. Se fizer upgrade, você pagará apenas
                  a diferença proporcional ao tempo restante. Se fizer
                  downgrade, o novo valor será aplicado na próxima renovação.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">
                  Como funciona a integração com o WhatsApp?
                </h3>
                <p className="text-gray-600">
                  Utilizamos a API oficial do WhatsApp Business para garantir
                  uma conexão segura e confiável. Durante a configuração, você
                  receberá instruções detalhadas sobre como conectar seu número
                  à nossa plataforma, um processo que leva apenas alguns
                  minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
