import Image from "next/image";

export default function Modal() {
  return (
    <section className="mt-10 text-center">
      <h2 className="font-bold text-xl">Adicionar Produto</h2>
      <div>
        <Image
          src="/images/cardClearMenImg.png"
          alt="imgClear"
          width={150}
          height={20}
          className="mx-auto"
        />
        <button className="bg-primary w-36 h-8 rounded text-white">Adicionar Imagen</button>

      </div>

      <div className="flex flex-col text-start gap-5">
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input type="text" className="border-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Descrição</label>
          <input type="text" className="border-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Preço</label>
          <input type="text" className="border-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Quantidade Estoque</label>
          <input type="text" className="border-2" />
        </div>
      </div>
    </section>
  );
}
