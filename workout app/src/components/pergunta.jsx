import React, { useState } from "react";

export default function Faq2() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    {
      question: "Quem nasceu primeiro: o ovo ou a galinha?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eveniet numquam? Ipsum totam id quidem ullam saepe! Magnam odit enim voluptatum illo, earum quidem esse ipsum sunt dignissimos tempora recusandae!",
    },
    {
      question: "Por que é melhor que o concorrente X?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt unde sapiente officia aliquam repellendus dolorum aliquid suscipit placeat nisi dolore!",
    },
    {
      question: "Como funciona o suporte?",
      answer:
        "O suporte é feito através do Discord, onde você pode tirar suas dúvidas e conversar com outros usuários.",
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- texto - início --> */}
        <div className="mb-10 md:mb-16">
          <h2 id="faq" className="mb-4 text-center text-2xl font-bold text-stone-900 md:mb-6 lg:text-3xl">
            Perguntas frequentes
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-stone-900 md:text-lg">
            Tudo que você precisa saber sobre o Nutri AI
          </p>
        </div>
        {/* <!-- texto - fim --> */}

        <div className="mx-auto flex max-w-screen-sm flex-col border-t">
          {questions.map((question, index) => (
            <div
              className="border-b"
              onClick={() => {
                if (activeQuestion === index) {
                  setActiveQuestion(-1);
                } else {
                  setActiveQuestion(index);
                }
              }}
            >
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-emerald-500 active:text-emerald-600">
                <span className="font-semibold transition duration-100 md:text-lg">
                  {question.question}
                </span>

                <span className="text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      activeQuestion === index && "rotate-180"
                    } transition duration-200 transform`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>

              <div className="overflow-hidden">
                <p
                  className={`mb-4 ${
                    activeQuestion !== index ? "-mt-32 h-0" : "mt-0 h-auto"
                  } text-gray-500 transition-all duration-600 ease-in-out`}
                >
                  {question.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
