
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Mail, Lock, User, Eye, EyeOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Período de teste grátis por 7 dias",
  "Sem necessidade de cartão de crédito",
  "Cancele a qualquer momento",
  "Suporte prioritário durante o teste",
];

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      toast({
        title: "Erro no cadastro",
        description: "Você precisa aceitar os termos de uso.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Conta criada com sucesso!",
        description: "Sua conta de teste foi criada. Redirecionando...",
      });
      // In a real app, would redirect to dashboard or onboarding
    }, 1500);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <MessageSquare className="h-8 w-8 text-brand-500" />
              <span className="text-2xl font-bold">BotWhats</span>
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-2">Crie sua conta</h1>
          <p className="text-gray-600 mb-8">
            Comece seu teste gratuito de 7 dias
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <User className="h-5 w-5" />
                  </div>
                  <Input
                    id="name"
                    type="text"
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
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 8 caracteres"
                    className="pl-10 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => 
                    setAcceptedTerms(checked as boolean)
                  }
                />
                <Label htmlFor="terms" className="text-sm text-gray-600 font-normal">
                  Eu concordo com os{" "}
                  <Link
                    to="/terms"
                    className="text-brand-500 hover:text-brand-600"
                  >
                    Termos de Uso
                  </Link>{" "}
                  e{" "}
                  <Link
                    to="/privacy"
                    className="text-brand-500 hover:text-brand-600"
                  >
                    Política de Privacidade
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-500 hover:bg-brand-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Criando conta..." : "Criar Conta Grátis"}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="text-brand-500 hover:text-brand-600 font-medium"
              >
                Entre aqui
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden md:block w-1/2 bg-gradient-to-br from-brand-500 to-blue-700 text-white p-16">
        <div className="h-full flex flex-col justify-center max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Junte-se a milhares de empresas
          </h2>
          <p className="text-xl mb-12 text-white/80">
            Que já aumentaram suas vendas com automação inteligente no WhatsApp
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-center mb-4">
              <p className="font-medium mb-1">Clientes satisfeitos</p>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm mt-1 text-white/70">
                4.9 de 5 estrelas de mais de 1,000 avaliações
              </p>
            </div>
            <div className="flex -space-x-2 justify-center mb-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`}
                  alt={`User ${i}`}
                  className="w-10 h-10 rounded-full border-2 border-blue-700"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
