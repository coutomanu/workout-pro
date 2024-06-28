import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Login realizado com sucesso!');
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50'>
      <h2 className='text-3xl lg:text-4xl font-bold mb-8 text-emerald-400'>LOGIN</h2>
      <div className='flex flex-col w-full max-w-md p-8 bg-white border border-gray-200 shadow-lg rounded-lg'>
        <form onSubmit={handleLogin} className='w-full flex flex-col'>
          <div className="mb-4 w-full flex flex-col items-start">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
          </div>
          <button className='mt-4 w-full bg-emerald-400 py-2.5 px-5 rounded-lg text-white border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base' type="submit">LOGIN</button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Não tem conta? <a href="/signup" className="text-emerald-400 hover:underline">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
