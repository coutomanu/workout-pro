/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    let errors = { email: "", password: "" };

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

    setErrors(errors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Logado: ", user);

          // Fetch user's IMC from Firestore
          const userRef = doc(db, "IMC-Peso", user.uid);
          getDoc(userRef).then((doc) => {
            if (doc.exists()) {
              const imc = doc.data().imc;
              if (imc >= 30) {
                navigate("/obesity"); // redirect to obesity page if IMC is 30 or more
              } else if (imc >= 25) {
                navigate("/overweight"); // redirect to overweight page if IMC is 25-29.9
              } else {
                navigate("/normal"); // redirect to normal weight page if IMC is less than 25
              }
            } else {
              console.error("User IMC not found");
              navigate("/"); // default redirect if IMC not found
            }
          });
        })
        .catch((error) => {
          console.error("Error no login:", error);
          alert("Error no login");
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-emerald-400">
        LOGIN
      </h2>
      <div className="flex flex-col w-full max-w-md p-8 bg-white border border-gray-200 shadow-lg rounded-lg">
        <form onSubmit={handleLogin} className="w-full flex flex-col">
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
          <button
            className="mt-4 w-full bg-emerald-400 py-2.5 px-5 rounded-lg text-white border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base"
            type="submit"
          >
            LOGIN
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Não tem conta?{" "}
          <a href="/signup" className="text-emerald-400 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
