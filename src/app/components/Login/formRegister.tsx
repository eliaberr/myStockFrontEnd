export default function FormRigister() {
  return (
    <form action="" className="text-start mt-10 grid gap-8 ">
      <div className="flex flex-col">
        <label htmlFor="name">Nome</label>
        <input type="text" className="border rounded w-[15.625rem]" required />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="email" className="border rounded w-[15.625rem]" required />
      </div>
      <div className="flex flex-col">
        <label htmlFor="passaword">Senha</label>
        <input type="password" className="border rounded w-[15.625rem]" required />
      </div>
      <button
        className={`bg-primary text-white shadow-lg rounded-4xl w-[15.625rem] mx-auto`}
      >
        Criar Conta
      </button>
    </form>
  );
}
