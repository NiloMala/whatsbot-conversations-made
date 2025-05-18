
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Link, CreditCard } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
          <p className="text-muted-foreground">
            Gerencie as configurações da sua conta e bot.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full md:w-2/3 lg:w-1/2">
            <TabsTrigger value="profile" className="flex gap-2 items-center">
              <User className="h-4 w-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex gap-2 items-center">
              <Bell className="h-4 w-4" />
              Notificações
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex gap-2 items-center">
              <Link className="h-4 w-4" />
              Integrações
            </TabsTrigger>
            <TabsTrigger value="subscription" className="flex gap-2 items-center">
              <CreditCard className="h-4 w-4" />
              Assinatura
            </TabsTrigger>
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
                <CardDescription>
                  Atualize suas informações pessoais e de contato.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Profile" 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <Button size="sm" variant="secondary" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium">Foto do Perfil</h3>
                    <p className="text-sm text-gray-500">JPG, GIF ou PNG. Tamanho máximo de 2MB.</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Alterar Foto
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" defaultValue="João Silva" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="joao@exemplo.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" defaultValue="(11) 98765-4321" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" defaultValue="Minha Empresa Ltda." />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button>Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Segurança</CardTitle>
                <CardDescription>
                  Atualize sua senha e configurações de segurança.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Senha Atual</Label>
                  <Input id="current-password" type="password" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button>Alterar Senha</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preferências de Notificações</CardTitle>
                <CardDescription>
                  Configure como deseja receber notificações.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Novas Mensagens</h3>
                      <p className="text-sm text-gray-500">Receba notificações quando houver novas mensagens.</p>
                    </div>
                    <Switch id="notifications-messages" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Status de Conexão</h3>
                      <p className="text-sm text-gray-500">Seja notificado sobre alterações no status de conexão do WhatsApp.</p>
                    </div>
                    <Switch id="notifications-connection" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Campanhas Finalizadas</h3>
                      <p className="text-sm text-gray-500">Receba notificações quando uma campanha for concluída.</p>
                    </div>
                    <Switch id="notifications-campaigns" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Atualizações de Sistema</h3>
                      <p className="text-sm text-gray-500">Seja notificado sobre novas funcionalidades e atualizações.</p>
                    </div>
                    <Switch id="notifications-updates" />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button>Salvar Preferências</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Integrações Disponíveis</CardTitle>
                <CardDescription>
                  Conecte sua conta com outros serviços.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Evolution API</h3>
                      <p className="text-sm text-gray-500">Conecte com a API para envio de mensagens WhatsApp.</p>
                    </div>
                  </div>
                  <Button variant="outline">Conectar</Button>
                </div>
                
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Google Sheets</h3>
                      <p className="text-sm text-gray-500">Importar/exportar contatos com planilhas.</p>
                    </div>
                  </div>
                  <Button variant="outline">Conectar</Button>
                </div>
                
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Zapier</h3>
                      <p className="text-sm text-gray-500">Conecte com mais de 3.000 aplicativos.</p>
                    </div>
                  </div>
                  <Button variant="outline">Conectar</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Subscription Tab */}
          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plano Atual</CardTitle>
                <CardDescription>
                  Informações sobre seu plano e assinatura.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center px-2.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-2">
                        Ativo
                      </div>
                      <h3 className="text-xl font-medium">Plano Pro</h3>
                      <p className="text-sm text-gray-500 mt-1">Renovação em 15/06/2025</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-sm">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-green-500 mr-2">
                            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Até 5 números de WhatsApp
                        </li>
                        <li className="flex items-center text-sm">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-green-500 mr-2">
                            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Mensagens ilimitadas
                        </li>
                        <li className="flex items-center text-sm">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-green-500 mr-2">
                            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Construtor de bots avançado
                        </li>
                        <li className="flex items-center text-sm">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-green-500 mr-2">
                            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Relatórios e análises
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-3xl font-bold">R$99,90<span className="text-sm text-gray-500">/mês</span></p>
                      <div className="mt-4 space-x-2">
                        <Button>Mudar Plano</Button>
                        <Button variant="outline" className="text-red-500 hover:text-red-600">Cancelar</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Histórico de Pagamentos</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>15/05/2025</TableCell>
                        <TableCell>Plano Pro - Mensal</TableCell>
                        <TableCell>R$99,90</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Pago
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>15/04/2025</TableCell>
                        <TableCell>Plano Pro - Mensal</TableCell>
                        <TableCell>R$99,90</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Pago
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>15/03/2025</TableCell>
                        <TableCell>Plano Pro - Mensal</TableCell>
                        <TableCell>R$99,90</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Pago
                          </span>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
