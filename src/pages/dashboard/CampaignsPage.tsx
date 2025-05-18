
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const CampaignsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campanhas</h1>
          <p className="text-muted-foreground">
            Crie e gerencie campanhas de mensagens em massa.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Campanhas</CardTitle>
                <CardDescription>Gerencie suas campanhas de mensagens</CardDescription>
              </div>
              <Button size="sm">
                <Send className="h-4 w-4 mr-2" />
                Nova Campanha
              </Button>
            </CardHeader>
            <CardContent className="text-center py-12">
              <Send className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">Nenhuma campanha criada</h3>
              <p className="text-gray-500 mb-6">
                Crie uma campanha para enviar mensagens em massa para seus contatos.
              </p>
              <Button>
                <Send className="h-4 w-4 mr-2" />
                Criar Primeira Campanha
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CampaignsPage;
