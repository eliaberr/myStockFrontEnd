"use client"

import Image from "next/image";
import { useState } from "react";

export default function Modal() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [quantityStock, setQuantityStock] = useState("")
  const [price, setPrice] = useState("")

  const formatPrice = (val: string) => {
    let priceNumber = val.replace(/\D/g, "");
    let priceFormatted = (Number(priceNumber) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
    return priceFormatted;
  }
  const valuePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(formatPrice(value))
  }

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
        <button className="bg-primary w-36 h-8 rounded text-white mt-1.5">Adicionar Imagen</button>
      </div>
      <div className="flex flex-col text-start gap-5 mt-10">
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input
            type="text" 
            className="border-2"
            placeholder="Digite o nome do produto aqui"
            onChange={(e)=> setName(e.target.value)}
            />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Descrição</label>
          <input type="text" className="border-2" placeholder="Digite o descrição do produto aqui"  />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Preço</label>
          <input type="text" value={price} onChange={valuePrice} className="border-2" placeholder="Digite o valor do produto aqui"  />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Quantidade Estoque</label>
          <input type="number" className="border-2" placeholder="Digite o quantidade do estoque do produto aqui" />
        </div>
      </div>
      <button className="bg-primary w-36 h-8 rounded text-white mt-10">Cadastrar Produto</button>
      <p>{price}</p>
      <p>{name}</p>
      <p>{description}</p>
      <p>{quantityStock}</p>
    </section>
  );
}
