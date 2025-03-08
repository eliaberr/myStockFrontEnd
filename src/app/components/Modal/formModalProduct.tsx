"use client";

import { getProducts, Product } from "@/app/helpers/api";
import { products } from "@/app/helpers/products";
import { useEffect, useState } from "react";

interface ModalProps {
  idProduct: number | null;
}

export default function FormModalProduct({ idProduct }: ModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantityStock, setQuantityStock] = useState("");

  const formatPrice = (val: string) => {
    const priceNumber = val.replace(/\D/g, "");
    const priceFormatted = (Number(priceNumber) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return priceFormatted;
  };
  const valuePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(formatPrice(value));
  };

  const addProduct = () => {
    const product: Product = {
      name,
      description,
      price,
      quantityStock,
    };

    getProducts("POST", product);
  };

  useEffect(() => {
    
    if (idProduct != null) {
      const product = products[idProduct - 1];
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setQuantityStock(product.quantityStock);
    } else {
      setName("");
      setDescription("");
      setPrice("");
      setQuantityStock("");
    }
  }, [idProduct]);

  return (
    <form onSubmit={addProduct} className="flex flex-col text-start gap-5 mt-10">
      <div className="flex flex-col">
        <label htmlFor="1">Name</label>
        <input
          id="1"
          type="text"
          className="border-2"
          placeholder="Digite o nome do produto aqui"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="2">Descrição</label>
        <input
          id="2"
          type="text"
          className="border-2"
          placeholder="Digite a Descrição do produto aqui"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3">Preço</label>
        <input
          id="3"
          type="text"
          className="border-2"
          placeholder="Digite a Descrição do produto aqui"
          value={price}
          onChange={valuePrice}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="4">Quantidade Estoque</label>
        <input
          id="4"
          type="number"
          className="border-2"
          placeholder="Digite a Quantidade em Estoque"
          value={quantityStock}
          onChange={(e) => setQuantityStock(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-primary w-36 h-8 rounded text-white mt-5 mx-auto"
        >
          {idProduct == null ? "Cadastrar Produto" : "Salvar Edição"}
        </button>
        {idProduct == null ? (
          <></>
        ) : (
          <button
            type="submit"
            className="bg-red-500 w-36 h-8 rounded text-white mt-5 mx-auto"
          >
            Excluir Produto
          </button>
        )}
      </div>
    </form>
  );
}
