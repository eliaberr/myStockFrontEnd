"use client";

import { useState } from "react";
import Modal from "../Modal/modal";
import { products } from "@/app/helpers/products";

export default function TableProduct() {
  const [openModal, setOpenModal] = useState(false);
  const [idProductModal, setIdProductModal] = useState<number | null>(null);

  return (
    <div className="mt-10">
      <button
        onClick={() => {setOpenModal(true);setIdProductModal(null)}}
        className="bg-primary w-32 h-10 rounded text-white"
      >
        Criar Produto
      </button>
      <h2 className="mt-10 font-extrabold text-[25px]">Produtos Cadastrados</h2>
      <table className="grid mt-3">
        <thead>
          <tr className="grid grid-cols-5 border-b-2">
            <th className="text-center bg-amber-200 ">Cod</th>
            <th className="bg-amber-300 col-span-2">Nome</th>
            <th className=" col-span-2 bg-amber-200 hidden">Descrição</th>
            <th className="bg-amber-300">Preço</th>
            <th className="bg-amber-200">Estoque</th>
          </tr>
        </thead>
        <tbody className="">
          {products.map((index) => (
            <tr onClick={() => {setIdProductModal(index.id); setOpenModal(true)}} key={index.id} className="grid grid-cols-5 py-2 border-b-2 gap-1.5">
              <td className="text-center bg-amber-200 break-words">{index.id}</td>
              <td className="overflow-hidden bg-amber-300 break-all col-span-2">{index.name}</td>
              <td className="col-span-2 overflow-hidden bg-amber-200 hidden">{index.description}</td>
              <td className="bg-amber-300">{index.price}</td>
              <th className=" bg-amber-200">{index.quantityStock}</th>
            </tr>
          ))}
        </tbody>
      </table>

      {openModal ? <Modal idProduct={idProductModal} closeModal={() => setOpenModal(false)} /> : <></>}
    </div>
  );
}
