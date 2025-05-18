
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";

const ContactsPage = () => {
  const recentContacts = [
    { id: 1, name: "Maria Silva", phone: "+5511987654321", lastMessage: "Olá, gostaria de saber mais sobre seus serviços.", time: "Agora", image: "https://randomuser.me/api/portraits/women/32.jpg" },
    { id: 2, name: "João Costa", phone: "+5511987654322", lastMessage: "Obrigado pelo atendimento!", time: "5m atrás", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Ana Santos", phone: "+5511987654323", lastMessage: "Qual o horário de funcionamento?", time: "15m atrás", image: "https://randomuser.me/api/portraits/women/31.jpg" },
  ];

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contatos</h1>
          <p className="text-muted-foreground">
            Gerencie seus contatos e grupos.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Contatos</CardTitle>
                <CardDescription>Gerencie seus contatos e grupos</CardDescription>
              </div>
              <Button size="sm">
                Adicionar Contato
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Conversas</TableHead>
                    <TableHead>Última Interação</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentContacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <img 
                            src={contact.image} 
                            alt={contact.name} 
                            className="w-8 h-8 rounded-full"
                          />
                          {contact.name}
                        </div>
                      </TableCell>
                      <TableCell>{contact.phone}</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>{contact.time}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Ver histórico
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContactsPage;
