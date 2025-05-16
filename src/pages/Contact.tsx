
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Phone, Mail, MessageSquare, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "Quanto tempo leva para configurar o bot?",
    answer:
      "A configuração básica pode ser feita em minutos. Para fluxos mais complexos, normalmente leva algumas horas. Nossa equipe está disponível para ajudar durante todo o processo.",
  },
  {
    question: "É possível integrar com meu sistema atual?",
    answer:
      "Sim! Oferecemos integrações com diversos sistemas como Shopify, WooCommerce, HubSpot, Pipedrive e mais. Também temos uma API para integrações personalizadas.",
  },
  {
    question: "Preciso de um número de WhatsApp Business?",
    answer:
      "Recomendamos o uso do WhatsApp Business para melhor performance, mas nossa plataforma também funciona com números pessoais do WhatsApp.",
  },
  {
    question: "Posso testar antes de assinar?",
    answer:
      "Absolutamente! Oferecemos um período de teste gratuito de 7 dias com acesso a todas as funcionalidades, sem necessidade de cartão de crédito.",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1500);
  };

  return (
    <Layout>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aqui para responder suas dúvidas e ajudar sua empresa a
              crescer com automação de WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <User className="h-5 w-5" />
                      </div>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        className="pl-10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <Input
                        id="phone"
                        placeholder="(99) 99999-9999"
                        className="pl-10"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-500 hover:bg-brand-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-brand-500" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <a
                        href="tel:+551140028922"
                        className="text-brand-500 hover:text-brand-600"
                      >
                        (11) 4002-8922
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-brand-500" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:contato@botwhats.com.br"
                        className="text-brand-500 hover:text-brand-600"
                      >
                        contato@botwhats.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-brand-500" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a
                        href="https://wa.me/551140028922"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-500 hover:text-brand-600"
                      >
                        (11) 4002-8922
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-medium mb-4">Horário de atendimento</p>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9h às 18h <br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Perguntas frequentes</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
