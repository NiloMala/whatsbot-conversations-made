
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MessageSquare, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o dashboard...",
        });
        // Redirect to dashboard after successful login
        navigate("/dashboard");
      } else {
        toast({
          title: "Erro ao fazer login",
          description: "Por favor, verifique suas credenciais.",
          variant: "destructive",
        });
      }
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

          <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta</h1>
          <p className="text-gray-600 mb-8">
            Entre na sua conta para acessar o dashboard
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
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
                <div className="flex justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-brand-500 hover:text-brand-600"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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

              <Button
                type="submit"
                className="w-full bg-brand-500 hover:bg-brand-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Não tem uma conta?{" "}
              <Link
                to="/signup"
                className="text-brand-500 hover:text-brand-600 font-medium"
              >
                Registre-se
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image and Text */}
      <div className="hidden md:block w-1/2 bg-brand-500 text-white p-16">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Automatize seu WhatsApp e aumente suas vendas
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Acesse sua conta e comece a criar bots incríveis para seu negócio.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="Testimonial"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="font-medium">Maria Silva</p>
                <p className="text-white/70 text-sm">CEO, Moda Express</p>
              </div>
            </div>
            <p className="italic text-white/90">
              "O BotWhats transformou completamente nosso atendimento. Aumentamos 
              nossas vendas em 40% e reduzimos os custos operacionais."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
