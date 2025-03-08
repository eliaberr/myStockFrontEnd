"use client";

import { useEffect, useState } from "react";
import Modal from "../Modal/modal";
import { getProducts, Product } from "@/app/helpers/api";

export default function TableProduct() {
  const [openModal, setOpenModal] = useState(false);
  const [idProductModal, setIdProductModal] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const productsData = await getProducts("GET");
      setProducts(productsData);
    } catch (error) {
      console.error("Erro ao buscar os produtos", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mt-10">
      <button
        onClick={() => {
          setOpenModal(true);
          setIdProductModal(null);
        }}
        className="bg-primary w-32 h-10 rounded text-white"
      >
        Criar Produto
      </button>
      <h2 className="mt-10 font-extrabold text-[25px]">Produtos Cadastrados</h2>
      <table className="grid mt-3">
        <thead>
          <tr className="grid grid-cols-5 border-b-2">
            <th className="text-center">Cod</th>
            <th className="col-span-2">Nome</th>
            <th className="col-span-2 hidden">Descrição</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody className="">
          {products.map((product,index) => (
            <tr
              key={product.id ?? index}
              onClick={() => {
                setIdProductModal(product.id ?? null);
                setOpenModal(true);
              }}
              className="grid grid-cols-5 py-2 border-b-2 gap-1.5"
            >
              <td className="text-center break-words">{product.id}</td>
              <td className="overflow-hidden break-all col-span-2">
                {product.name}
              </td>
              <td className="col-span-2 overflow-hidden hidden">
                {product.description}
              </td>
              <td>{product.price}</td>
              <th>{product.quantityStock}</th>
            </tr>
          ))}
        </tbody>
      </table>

      {openModal ? (
        <Modal
          idProduct={idProductModal}
          closeModal={() => setOpenModal(false)}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
