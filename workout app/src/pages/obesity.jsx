import React, { useState } from 'react';

const Obesity = () => {
  const treinos = [
    { id: 1, title: 'Segunda', content: 'Caminhada', description:'5 min aquecimento + 20 min caminhada moderada + 5 min resfriamento'},
    { id: 2, title: 'Terça', content: 'Exercícios de Baixa Intensidade', description:'5 min aquecimento + 5 min alongamento + - Sentar e levantar de uma cadeira: 3x10 rep- Elevação de panturrilhas em pé: 3x10 rep- Flexões de braço contra a parede: 3x10 rep - Caminhada no lugar: 5 min + 5 min resfriamento' },
    { id: 3, title: 'Quarta', content: 'Caminhada', description:'5 min aquecimento + 20 min caminhada moderada + 5 min resfriamento'},
    { id: 4, title: 'Quinta', content: 'Exercícios de Baixa Intensidade', description:'5 min aquecimento + 5 min alongamento + - Sentar e levantar de uma cadeira: 3x10 rep - Elevação de panturrilhas em pé: 3x10 rep - Flexões de braço contra a parede: 3x10 rep - Caminhada no lugar: 5 min + 5 min resfriamento'},
    { id: 5, title: 'Sexta', content: 'Atividade Aquática (opcional)', description:'5 min aquecimento + 20-30 min natação/caminhada na água + 5 min resfriamento'},
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Obesidade</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {treinos.map((treino) => (
          <div key={treino.id} className="border p-4 text-center">
            <h2 className="text-lg font-semibold">{treino.title}</h2>
            <p>{treino.content}</p>
                <p className='' >
                    {treino.description}
                </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Obesity;