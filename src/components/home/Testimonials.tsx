
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "O BotWhats revolucionou nosso atendimento. Conseguimos automatizar 70% das interações com clientes e aumentar nossas vendas em 30% no primeiro mês.",
    author: "Ana Silva",
    position: "Gerente de Marketing, E-commerce XYZ",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote:
      "Interface super intuitiva! Implementamos em um dia e já começamos a ver resultados. Nossa taxa de resposta subiu para 98% e o tempo médio de atendimento caiu pela metade.",
    author: "Carlos Mendes",
    position: "Proprietário, Restaurante Sabor & Arte",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote:
      "Como agência, conseguimos oferecer um serviço premium para nossos clientes. O BotWhats é tão completo que dispensou a necessidade de outras ferramentas que usávamos.",
    author: "Fernanda Costa",
    position: "Diretora, Agência Digital Connect",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    quote:
      "Excelente para clínicas! Reduzimos em 90% o número de faltas em consultas com as lembretes automatizados. A equipe de suporte é fantástica e sempre nos ajuda com novas ideias.",
    author: "Dr. Ricardo Almeida",
    position: "Diretor Clínico, Clínica Bem Estar",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-brand-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-white/80">
            Histórias reais de empresas que transformaram seu atendimento com
            nossa plataforma.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-white/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl font-medium mb-8">
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="font-semibold text-lg">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-white/70">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-brand-500 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors md:block hidden"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-brand-500 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors md:block hidden"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Mobile dots */}
          <div className="flex justify-center mt-6 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  activeIndex === index ? "bg-white" : "bg-white/30"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
