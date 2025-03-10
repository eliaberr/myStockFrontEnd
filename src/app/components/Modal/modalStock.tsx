"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  closeModal: () => void;
  operation: string | undefined;
  products: { id: string; name: string }[];
}

export default function ModalStock({
  operation,
  closeModal,
  products,
}: ModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-black/50">
      <div className="text-center w-[22.5rem] max-h-[43.75rem] py-3 px-3 rounded-3xl shadow-2xs mx-auto bg-gray-200 mt-10 overflow-y-auto relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl text-gray-500"
        >
          <IoMdClose />
        </button>

        <h2 className="font-semibold text-lg mb-4">{operation} Produto</h2>

        <div className="flex flex-col mb-4">
          <label htmlFor="product">Selecione o Produto</label>
          <select
            id="product"
            value={selectedProduct}
            onChange={handleProductChange}
            className="border rounded p-2 w-full"
          >
            <option value="">Selecione um produto</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="quantity">Quantidade que deseja retirar</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="border rounded p-2 w-full"
            min={1}
          />
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={closeModal}
            className="bg-red-400 text-white rounded-3xl px-4 py-2"
          >
            Cancelar
          </button>
          <button
            onClick={() =>
              alert(
                `Operação: ${operation}, Produto: ${selectedProduct}, Quantidade: ${quantity}`
              )
            }
            className="bg-primary text-white rounded-3xl px-4 py-2"
          >
            Confirmar
          </button>
        </div>
      </div>
    </section>
  );
}
