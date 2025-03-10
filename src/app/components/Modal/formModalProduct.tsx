"use client";

import { getProducts, Product } from "@/app/helpers/productsApi";
import { useEffect, useState } from "react";

interface ModalProps {
  idProduct: string | undefined;
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

  const upsertProduct = (method: string, id?: string) => {
    const product: Product = {
      name,
      description,
      price,
      quantityStock,
    };
    getProducts(method, product, id);

    alert(`Produto ${method === "PUT" ? "editado" : "criado"} com sucesso`);
  };

  const deleteProduct = (id: string) => {
    getProducts("DELETE", undefined, id);
    window.location.reload();
    alert("Produto Excluido");
  };

  useEffect(() => {
    if (idProduct != undefined) {
      const fetchProducts = async () => {
        const product = await getProducts("GET", undefined, idProduct);
        if (product.length > 0) {
          setName(product[0].name);
          setDescription(product[0].description);
          setPrice(product[0].price);
          setQuantityStock(product[0].quantityStock);
        }
      };
      fetchProducts();
    } else {
      setName("");
      setDescription("");
      setPrice("");
      setQuantityStock("");
    }
  }, [idProduct]);

  console.log("aqui esta o ids table edit", idProduct);

  return (
    <form
      onSubmit={() => {
        upsertProduct(idProduct != undefined ? "PUT" : "POST", idProduct);
      }}
      className="flex flex-col text-start gap-5 mt-10"
    >
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
          {idProduct == undefined ? "Cadastrar Produto" : "Salvar Edição"}
        </button>
        {idProduct == undefined ? (
          <></>
        ) : (
          <button
            type="button"
            className="bg-red-500 w-36 h-8 rounded text-white mt-5 mx-auto"
            onClick={() => deleteProduct(idProduct)}
          >
            Excluir Produto
          </button>
        )}
      </div>
    </form>
  );
}
