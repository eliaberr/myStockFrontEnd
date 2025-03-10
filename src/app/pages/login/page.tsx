"use client";

import FormLogin from "@/app/components/Login/formLogin";
import FormRigister from "@/app/components/Login/formRegister";
import { useState } from "react";

export default function Login() {
  const [register, setRegister] = useState(false);

  return (
    <section className="bg-[url(/bgLogin.jpeg)] bg-center bg-cover h-screen flex items-center justify-center">
      <div className="">
        <div className="bg-white w-[18.75rem] h-[31.25rem] text-center py-5 px-5">
          <h1>Seja bem vindo</h1>
          <div className="w-[15.625rem] bg-gray-300 mx-auto grid grid-cols-2 rounded-4xl mt-10">
            <button
              onClick={() => setRegister(false)}
              className={`rounded-4xl transition-all duration-300 ${
                register ? "" : "bg-primary text-white scale-105 shadow-lg"
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setRegister(true)}
              className={`rounded-4xl transition-all duration-300   ${
                register ? "bg-primary text-white scale-105 shadow-lg" : ""
              }`}
            >
              Criar conta
            </button>
          </div>
          {register ? <FormRigister /> : <FormLogin />}
        </div>
      </div>
    </section>
  );
}
