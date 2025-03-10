"use client";

import { useEffect, useState } from "react";
import Modal from "../Modal/modalProduct";
import { getProducts, Product } from "@/app/helpers/productsApi";
import ModalStock from "../Modal/modalStock";

export default function TableProduct() {
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [openModalStock, setOpenModalStock] = useState(false);
  const [operation, setOperation] = useState("");
  const [idProductModal, setIdProductModal] = useState<string | undefined>(
    undefined
  );
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

  console.log("aqui esta o ids table produtos", idProductModal);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={() => {
            setOpenModalStock(true);
            setOperation("-");
          }}
          className="bg-red-600 w-24 h-10 rounded text-white leading-none"
        >
          Retirar estoque
        </button>
        <button
          onClick={() => {
            setOpenModalProduct(true);
            setIdProductModal(undefined);
          }}
          className="bg-primary w-32 h-10 rounded text-white"
        >
          Criar Produto
        </button>
        <button
          onClick={() => {
            setOpenModalStock(true);
            setOperation("+");
          }}
          className="bg-green-600 w-25 h-10 rounded text-white leading-none"
        >
          Adicionar estoque
        </button>
      </div>

      <h2 className="mt-10 font-extrabold text-[1.5625rem]">
        Produtos Cadastrados
      </h2>
      <table className="grid mt-3">
        <thead>
          <tr className="grid grid-cols-5 border-b-2 sm:grid-cols-7">
            <th className="text-center">Cod</th>
            <th className="col-span-2">Nome</th>
            <th className="col-span-2 hidden sm:grid">Descrição</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody className="">
          {products.map((product, index) => (
            <tr
              key={product.id ?? index}
              onClick={() => {
                setIdProductModal(product.id ? String(product.id) : undefined);
                setOpenModalProduct(true);
              }}
              className="grid grid-cols-5 py-2 border-b-2 gap-1.5 hover:cursor-pointer hover:bg-slate-200 sm:grid-cols-7"
            >
              <td className="text-center break-words">{product.id}</td>
              <td className="overflow-hidden break-all col-span-2">
                {product.name}
              </td>
              <td className="col-span-2 overflow-hidden hidden sm:grid">
                {product.description}
              </td>
              <td>{product.price}</td>
              <th>{product.quantityStock}</th>
            </tr>
          ))}
        </tbody>
      </table>

      {openModalProduct ? (
        <Modal
          idProduct={idProductModal}
          closeModal={() => setOpenModalProduct(false)}
        />
      ) : (
        <></>
      )}

      {openModalStock ? (
        <ModalStock
          operation={operation}
          closeModal={() => setOpenModalStock(false)}
          products={products.map((product) => ({
            id: product.id ? String(product.id) : "",
            name: product.name,
          }))}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
