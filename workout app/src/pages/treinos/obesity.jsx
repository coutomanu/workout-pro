import React, { useState } from 'react';

const Obesity = () => {
  
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-center text-2xl font-bold mb-4">OBESITY</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {treinos.map((obesity) => (
          <div key={treino.id} className="border p-4 text-center">
            <h2 className="text-lg font-semibold">{obesity.title}</h2>
            <p>{obesity.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 

export default Obesity;
