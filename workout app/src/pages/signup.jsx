import React, { useState } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [errors, setErrors] = useState({});

  const cadastro = async () => {
    try {
      await addDoc(collection(db, "cadastro"), {
        name,
        height,
        weight,
      });
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Erro ao cadastrar: " + error.message);
    }
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!name) {
      errors.name = "O campo de nome é obrigatório.";
      valid = false;
    }

    if (!email) {
      errors.email = "O campo de email é obrigatório.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Por favor, insira um email válido.";
      valid = false;
    }

    if (!password) {
      errors.password = "O campo de senha é obrigatório.";
      valid = false;
    }

    if (!height) {
      errors.height = "O campo de altura é obrigatório.";
      valid = false;
    } else if (parseFloat(height) <= 0) {
      errors.height = "Por favor, insira uma altura válida.";
      valid = false;
    }

    if (!weight) {
      errors.weight = "O campo de peso é obrigatório.";
      valid = false;
    } else if (parseFloat(weight) <= 0) {
      errors.weight = "Por favor, insira um peso válido.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
      cadastro();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-emerald-400">
        Cadastre-se
      </h2>
      <div className="flex flex-col w-full max-w-md p-4 bg-white border border-gray-200 shadow-lg rounded-lg">
        <form onSubmit={handleSignup} className="w-full flex flex-col">
          <div className="mb-2 w-full flex flex-col items-start">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="height"
              className="block text-gray-700 font-bold mb-2"
            >
              Altura (cm):
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua altura"
            />
            {errors.height && (
              <p className="text-red-500 text-sm mt-1">{errors.height}</p>
            )}
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="weight"
              className="block text-gray-700 font-bold mb-2"
            >
              Peso (kg):
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu peso"
            />
            {errors.weight && (
              <p className="text-red-500 text-sm mt-1">{errors.weight}</p>
            )}
          </div>
          <button
            className="mt-4 w-full bg-emerald-400 py-2.5 px-5 rounded-lg text-white border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base"
            type="submit"
          >
            CADASTRAR-SE
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Já tem conta?{" "}
          <a href="/login" className="text-emerald-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
