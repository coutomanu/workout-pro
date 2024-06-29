import React from 'react';
import botzim from '../assets/BOT EMOJI.webp';
import olho from '../assets/OLHOS EMOJI.webp';
import treino from '../assets/TREINO.jpg';
import treino2 from '../assets/TREINO 2.jpg';
import banner1 from '../assets/BANNER WORKOUT 1.jpg';
import Testimonial1 from '../components/depoimento.jsx';
import Faq2 from '../components/pergunta.jsx';
import Hero6 from '../components/hero6';
import { IoIosFitness } from 'react-icons/io';
import { GiMuscleUp } from 'react-icons/gi';
import { SlEnergy } from 'react-icons/sl';
import { GiMedicines } from 'react-icons/gi';
import { GiBrokenBone } from 'react-icons/gi';
import { FaRunning } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <body>
            {/* Primeira sessao */}
            <div id="incio">
                <Hero6 />
            </div>

            {/* //Primeira sessao */}

            {/* segunda sessao */}
            <div className="bg-black py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12 2xl:gap-20">
                        <div className="h-64 overflow-hidden rounded-lg flex justify-center md:h-auto">
                            <img
                                src={treino}
                                alt="foto treino"
                                className="w-2/3 rounded-lg object-cover object-center"
                            />
                        </div>

                        <div className="flex justify-center flex-col">
                            <img
                                src={olho}
                                alt="olhos"
                                className="w-10 mb-5 mx-auto"
                            />

                            <h1 className="text-3xl font-bold mb-6 text-center text-white">
                                Receba um treino personalizado
                            </h1>

                            <p className="mb-6 sm:text-lg md:mb-8 text-white text-center">
                                Coloque suas informações e receba um treino
                                personalizado para o seu biotipo. Se você seguir
                                esse treino, durante 60 dias, vai perceber a
                                enorme mudança em seu corpo.
                            </p>
                            <a
                                href="/signup"
                                className="mx-auto bg-yellow-400 cursor-pointer py-2.5 px-5 rounded-lg  text-black border border-yellow-500 font-medium text-sm outline-none transition duration-100 hover:bg-yellow-500 focus-visible:ring ring-emerald-300 active:bg-yellow-500 md:text-base"
                            >
                                Comece agora
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* // segunda sessao */}

            {/* terceira sessao */}
            <div className="bg-gray-50	 py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12 2xl:gap-20">
                        <div className="order-2 md:order-1 flex justify-center flex-col">
                            <img
                                src={botzim}
                                alt="bot"
                                className="w-10 mb-5 mx-auto"
                            />

                            <h1 className="text-3xl font-bold mb-6 text-center text-stone-900">
                                Converse com um assistente 24h por dia
                            </h1>

                            <p className="mb-6 text-stone-900 sm:text-lg md:mb-8 text-center">
                                Tire suas dúvidas relacionado a treino com nosso
                                assistente a qualquer hora do dia. Ele vai estar
                                pronto para te auxiliar a executar o movimento
                                da melhor maneira.
                            </p>
                            <a
                                href="/signup"
                                className="mx-auto bg-yellow-400 cursor-pointer py-2.5 px-5 rounded-lg  text-black border border-yellow-500 font-medium text-sm outline-none transition duration-100 hover:bg-yellow-500 focus-visible:ring ring-emerald-300 active:bg-yellow-500 md:text-base"
                            >
                                Comece agora
                            </a>
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg flex justify-center md:h-auto order-1 md:order-2">
                            <img
                                src={treino2}
                                alt="Foto Dieta"
                                className="w-2/3 rounded-lg object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* // terceira sessao */}

            {/* quarta sessao */}
            <div id="funcao" className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* <!-- texto - início --> */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-stone-900 md:mb-6 lg:text-3xl">
                            Benefícios de usar o nosso sistema
                        </h2>

                        <p className="mx-auto max-w-screen-md text-center text-stone-900 md:text-lg">
                            Nosso assitente é o melhor do mercado para te
                            auxiliar a seguir um treino foda.
                        </p>
                    </div>
                    {/* <!-- texto - fim --> */}

                    <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-black shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <FaTachometerAlt className="text-2xl" />
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Controle de Peso
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    Monitore suas atividades físicas e receba
                                    treinos ajustados para atingir o peso
                                    desejado.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-black shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <FaRunning className="text-2xl" />
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Melhora da Condição Física
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    Análises detalhadas e exercícios específicos
                                    garantem uma evolução contínua na sua
                                    performance.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-black shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <GiBrokenBone className="text-2xl" />
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Redução do Risco de Lesões
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    Treinos bem planejados ajudam a evitar
                                    lesões comuns e a manter um corpo saudável.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-black shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <GiMedicines className="text-2xl" />
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Redução do Risco de Doenças
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    A escolha de alimentos mais saudáveis, pode
                                    reduzir o risco de doenças crônicas como
                                    diabetes e doenças cardíacas.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-black shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <SlEnergy className="text-2xl" />
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Aumento de Energia
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    Exercícios adequados às suas necessidades
                                    ajudam a aumentar seus níveis de energia.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}

                        {/* <!-- feature - início --> */}
                        <div className="flex gap-4 md:gap-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-black shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <GiMuscleUp className="text-2xl" />
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                    Fortalecimento Muscular
                                </h3>
                                <p className="mb-2 text-gray-500">
                                    Escolha de exercícios que aumentam a força e
                                    a resistência muscular de maneira eficaz.
                                </p>
                            </div>
                        </div>
                        {/* <!-- feature - fim --> */}
                    </div>
                </div>
            </div>
            {/* // quarta sessao */}

            {/* quinta sessao*/}

            <div className="bg-black py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col overflow-hidden rounded-lg bg-yellow-400 sm:flex-row md:h-80">
                        {/* <!-- imagem - início --> */}
                        <div className="order-first h-48 w-full bg-yellow-400 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                            <img
                                src={banner1}
                                alt="Foto personal"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        {/* <!-- imagem - fim --> */}

                        {/* <!-- conteúdo - início --> */}
                        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                            <h2 className="mb-4 text-left text-xl font-bold text-black md:text-2xl lg:text-4xl">
                                O treino mais completo e personalizado para você
                            </h2>

                            <p className="mb-8 max-w-md text-left text-black">
                                Você vai ter acesso de um assistente 24h por dia
                                e 7 dias na semana, um treino personalziado para
                                você. Tudo isso para que você possa atinigir seu
                                objetivo.
                            </p>

                            <div className="md:flex flex mt-auto">
                                <a
                                    href="https://api.whatsapp.com/send?phone=554396303511"
                                    className="inline-block rounded-lg border border-gray-600 items-start bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-yellow-400 outline-none transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-yelloy-700 md:text-base"
                                >
                                    Falar com nossa equipe
                                </a>
                            </div>
                        </div>
                        {/* <!-- conteúdo - fim --> */}
                    </div>
                </div>
            </div>

            {/* //quinta sessao*/}

            {/* Sexta sessao*/}

            <Testimonial1 />

            {/* //Sexta sessao*/}

            {/* Sétima sessao*/}

            <div id="plans" className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                    {/* <!-- texto - início --> */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Escolha o plano ideal para você
                        </h2>

                        <p className="mx-auto max-w-screen-md text-center text-stone-800 md:text-lg">
                            Escolha alguns dos nossos planos e receba todos os
                            benefícios na palma da sua mão.
                        </p>
                    </div>
                    {/* <!-- texto - fim --> */}

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
                        {/* <!-- plano basic - início --> */}
                        <div className="w-full rounded-lg border border-gray-300 bg-gray-200 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
                                    Básico
                                </h3>
                                <p className="text-stone-900">Plano mensal</p>
                            </div>

                            <div className="mb-1 space-x-2">
                                <span className="text-xl text-stone-900 text-indigo-100">
                                    De{' '}
                                    <span className="line-through text-stone-900">
                                        R$49
                                    </span>
                                </span>
                            </div>
                            <div className="mb-4 space-x-2">
                                <span className="text-4xl font-bold yellow-500">
                                    R$29
                                </span>
                                <span className="text-2xl text-stone-900">
                                    /mês
                                </span>
                            </div>

                            <ul className="mb-6 space-y-2 text-left text-yellow-500">
                                <li className="flex items-center  gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span className="text-stone-900">
                                        Treino personalizado para seu biotipo.
                                    </span>
                                </li>

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span className="text-stone-900">
                                        Bot Personal Fitness
                                    </span>
                                </li>

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span className="text-stone-900">
                                        Acompanhamento individual
                                    </span>
                                </li>
                            </ul>

                            <a
                                href="/signup"
                                className="block w-full rounded-lg bg-yellow-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none transition duration-100 hover:bg-yellow-600 focus-visible:ring active:text-gray-200 md:text-base"
                            >
                                Quero plano basico
                            </a>
                        </div>
                        {/* <!-- plano basic - fim --> */}

                        {/* <!-- plano pro - início --> */}
                        <div className="w-full rounded-lg bg-gradient-to-tr from-yellow-500 to-yellow-400 p-6 shadow-xl sm:w-1/2 sm:p-8">
                            <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
                                <div>
                                    <h3 className="text-start text-2xl font-semibold text-black sm:text-3xl">
                                        Plus
                                    </h3>
                                    <p className="text-black text-left">
                                        Plano Trimestral
                                    </p>
                                </div>

                                <span className="order-first inline-block rounded-full bg-yellow-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black lg:order-none">
                                    O QUERIDINHO
                                </span>
                            </div>
                            <div className="mb-1 space-x-2">
                                <span className="text-xl text-black">
                                    De{' '}
                                    <span className="line-through">R$150</span>
                                </span>
                            </div>
                            <div className="mb-4 space-x-2">
                                <span className="text-4xl font-bold text-black">
                                    R$79
                                </span>
                                <span className="text-2xl text-black">
                                    /Trimestre
                                </span>
                            </div>

                            <ul className="mb-6 space-y-2 text-black">
                                {/* <!-- feat - início --> */}
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Tudo do Plano Básico</span>
                                </li>
                                {/* <!-- feat - end --> */}

                                {/* <!-- feat - início --> */}
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Relatórios de evolução</span>
                                </li>
                                {/* <!-- feat - end --> */}

                                {/* <!-- feat - início --> */}
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Desconto em academias</span>
                                </li>
                                {/* <!-- feat - end --> */}

                                {/* <!-- feat - início --> */}
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span>Suporte Premium</span>
                                </li>
                                {/* <!-- feat - end --> */}
                            </ul>

                            <a
                                href="/signup"
                                className="block w-full rounded-lg border border-yellow-400 bg-yellow-600 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-black outline-none transition duration-100 hover:bg-yellow-300 focus-visible:ring active:bg-yellow-300 md:text-base"
                            >
                                Quero ter o Plus
                            </a>
                        </div>
                        {/* <!-- plano pro - fim --> */}
                    </div>
                </div>
            </div>

            {/* //Sétima sessao*/}

            {/* Oitava sessao*/}

            <Faq2 />

            {/* //Oitava sessao*/}

            {/* Nona sessao*/}

            <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
                <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center border-t pt-6">
                        <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                            <a
                                href="#funcao"
                                className="text-gray-500 transition duration-100 hover:text-yellow-600 active:text-yellow-600"
                            >
                                Funcionalidades
                            </a>
                            <a
                                href="#plans"
                                className="text-gray-500 transition duration-100 hover:text-yellow-600 active:text-yellow-600"
                            >
                                Preços
                            </a>
                            <a
                                href="#faq"
                                className="text-gray-500 transition duration-100 hover:text-yellow-600 active:text-yellow-600"
                            >
                                FAQ
                            </a>
                            <a className="text-gray-500 transition duration-100 hover:text-yellow-600 active:text-yellow-600">
                                Termos
                            </a>
                            <a className="text-gray-500 transition duration-100 hover:text-yellow-600 active:text-yellow-600">
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

            {/* //Nona sessao*/}
        </body>
    );
};

export default Home;
