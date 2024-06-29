import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import bannerImg from "../assets/banner-magro.jpg";

const Lean = () => {
  const treinos = [
    {
      id: 1,
      title: "Segunda",
      content: "Corrida Leve",
      description:
        "5 min aquecimento + 15 min corrida leve + 5 min resfriamento",
    },
    {
      id: 2,
      title: "Terça",
      content: "Exercícios de Média Intensidade",
      description:
        "5 min aquecimento + 5 min alongamento + - Polichinelos: 3x15 rep - Abdominais: 3x15 rep - Flexões de braço: 3x10 rep - Caminhada rápida: 10 min + 5 min resfriamento",
    },
    {
      id: 3,
      title: "Quarta",
      content: "Corrida Leve",
      description:
        "5 min aquecimento + 15 min corrida leve + 5 min resfriamento",
    },
    {
      id: 4,
      title: "Quinta",
      content: "Exercícios de Média Intensidade",
      description:
        "5 min aquecimento + 5 min alongamento + - Polichinelos: 3x15 rep - Abdominais: 3x15 rep - Flexões de braço: 3x10 rep - Caminhada rápida: 10 min + 5 min resfriamento",
    },
    {
      id: 5,
      title: "Sexta",
      content: "Natação (opcional)",
      description:
        "5 min aquecimento + 20 min natação + 5 min resfriamento",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div
        className="flex flex-col items-center w-full mb-10 p-8 bg-cover bg-center rounded-lg shadow-lg h-56 justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-3xl mb-14 text-center font-bold">Olá (nome), seu IMC é (IMC)</h1>
        <p className="text-xl font-bold">Sua altura: </p>
        <p className="text-xl font-bold">Seu peso: </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {treinos.map((treino) => (
          <div key={treino.id} className="border p-6 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-semibold mb-4">{treino.title}</h2>
            <p className="text-gray-700 mb-4">{treino.content}</p>
          </div>
        ))}
      </div>

      <div className="w-full p-10 mt-10">
        <p className="text-center mb-14">
        Uma pessoa magra geralmente possui um IMC abaixo de 18,5 e enfrenta
          desafios como dificuldade em ganhar massa muscular ou manter um peso
          saudável. A nutrição equilibrada e exercícios regularmente são
          essenciais para manter a saúde e o bem-estar físico.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=seunumerodewhatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center mx-auto bg-emerald-400 cursor-pointer py-2.5 px-5 rounded-lg text-black border border-black font-medium text-sm outline-none transition duration-100 hover:bg-emerald-100 focus-visible:ring ring-emerald-300 active:bg-yellow-500 md:text-base"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          Acesse no bot no Whatsapp agora!
        </a>
      </div>

      <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
                <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center border-t pt-6">
                        <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                            <a
                            href="#funcao"
                                className="text-gray-500 transition duration-100 hover:text-emerald-600 active:text-emerald-600"
                            >
                                Funcionalidades
                            </a>
                            <a
                            href="#plans"
                                className="text-gray-500 transition duration-100 hover:text-emerald-600 active:text-emerald-600"
                            >
                                Preços
                            </a>
                            <a
                            href="#faq"
                                className="text-gray-500 transition duration-100 hover:text-emerald-600 active:text-emerald-600"
                            >
                                FAQ
                            </a>
                            <a
                                className="text-gray-500 transition duration-100 hover:text-emerald-600 active:text-emerald-600"
                            >
                                Termos
                            </a>
                            <a
                                className="text-gray-500 transition duration-100 hover:text-emerald-600 active:text-emerald-600"
                            >
                                Privacidade
                            </a>
                        </nav>

                        <div className="flex gap-4">
                            <button
                                onClick={() => {}}
                                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                            >
                                <svg
                                    className="h-5 w-5"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </button>

                            <button
                                onClick={() => {}}
                                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                            >
                                <svg
                                    className="h-5 w-5"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </button>

                            <button
                                onClick={() => {}}
                                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                            >
                                <svg
                                    className="h-5 w-5"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="py-8 text-center text-sm text-gray-400">
                        © 2024 | WorkOut Pro - Todos os direitos reservados.
                    </div>
                </footer>
            </div>
    </div>
  );
};

export default Lean;
