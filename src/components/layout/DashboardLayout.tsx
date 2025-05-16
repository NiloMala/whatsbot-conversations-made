
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Home,
  MessageCircle,
  Users,
  Send,
  Bot,
  Settings,
  LogOut,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-white border-r transition-all duration-300 flex flex-col",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Logo */}
        <div className={cn(
          "h-16 border-b flex items-center px-4",
          collapsed ? "justify-center" : "px-6"
        )}>
          {!collapsed ? (
            <Link to="/" className="flex items-center gap-2">
              <MessageSquare className="h-7 w-7 text-brand-500" />
              <span className="font-bold text-xl">BotWhats</span>
            </Link>
          ) : (
            <Link to="/">
              <MessageSquare className="h-7 w-7 text-brand-500" />
            </Link>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3">
          <div className="space-y-1">
            {[
              { name: "Dashboard", icon: Home, path: "/dashboard" },
              { name: "Mensagens", icon: MessageCircle, path: "/dashboard" },
              { name: "Contatos", icon: Users, path: "/dashboard" },
              { name: "Campanhas", icon: Send, path: "/dashboard" },
              { name: "Bots", icon: Bot, path: "/dashboard" },
              { name: "Configurações", icon: Settings, path: "/dashboard" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                  collapsed ? "justify-center" : "gap-3"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </div>
        </nav>

        {/* User Menu */}
        <div className={cn(
          "border-t p-4",
          collapsed ? "flex justify-center" : ""
        )}>
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">João Silva</p>
                <p className="text-gray-500 text-xs">Conta Pro</p>
              </div>
            </div>
          ) : (
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          )}
        </div>

        {/* Collapse Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-16 -right-3 bg-white border rounded-full p-1 shadow-sm"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-500" />
          )}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-6">
          <h1 className="font-semibold">Área do Cliente</h1>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-5 w-5" />
            </button>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-1" />
              Sair
            </Button>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
