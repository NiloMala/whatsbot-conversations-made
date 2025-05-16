
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <MessageSquare className="h-8 w-8 text-brand-500" />
          <span className="text-xl font-bold">BotWhats</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-brand-500 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-gray-700 hover:text-brand-500 font-medium transition-colors"
          >
            Funcionalidades
          </Link>
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-brand-500 font-medium transition-colors"
          >
            Planos
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-brand-500 font-medium transition-colors"
          >
            Contato
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="font-medium">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-brand-500 hover:bg-brand-600 text-white font-medium">
              Criar Conta Grátis
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-brand-500 font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-gray-700 hover:text-brand-500 font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-brand-500 font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Planos
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-brand-500 font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full font-medium">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium">
                  Criar Conta Grátis
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
