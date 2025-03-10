import { getUsers } from "@/app/helpers/usersApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userFound, setUserFound] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const users = await getUsers("GET");
    const user = users.find(
      (user) => user.email == email && user.password == password
    );

    if (user) {
      setUserFound(true);
      router.push("/pages/home");
    } else {
      console.log("Usuário não encontrado.");
      alert("Usuário não encontrado email ou senha incorreto");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(email, password);
      }}
      className="text-start mt-10 grid gap-8"
    >
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="border rounded w-[15.625rem]"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="passaword">Senha</label>
        <input
          type="password"
          className="border rounded w-[15.625rem]"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className={`bg-primary text-white shadow-lg rounded-4xl w-[15.625rem] mx-auto`}
      >
        Entrar
      </button>
      {userFound ? (
        <p className="-mt-8 text-center text-sm text-green-700">
          Usuário encontardo
        </p>
      ) : (
        <></>
      )}
    </form>
  );
}
