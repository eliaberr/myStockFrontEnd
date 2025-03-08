"use client";

import Image from "next/image";
import FormTableProduct from "./formModalProduct";
import { useState } from "react";
import { CiTrash } from "react-icons/ci";

interface ModalProps {
  closeModal: () => void;
  idProduct: number | null;
}

export default function Modal({ idProduct, closeModal }: ModalProps) {
  const [fileName, setFileName] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url);
    }
  };

  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-black/50">
      <div className="text-center w-[360px] max-h-[700px] py-3 px-3 rounded-3xl shadow-2xs mx-auto bg-gray-200 mt-10 overflow-y-auto relative">
        <button className="absolute right-10 bg-red-500" onClick={closeModal}>
          x
        </button>
        <h2 className="font-bold text-xl">Adicionar Produto</h2>
        <div>
          <div className="mt-4 w-[200px] h-[200px] mx-auto bg-stone-300 flex justify-center items-center">
            {imageUrl === null ? (
              <></>
            ) : (
              <Image
                src={imageUrl}
                alt="Uploaded Image"
                width={100}
                height={100}
                className="w-full h-full"
              />
            )}
          </div>
          <div className="flex justify-center items-center w-[250px] mx-auto relative mt-1.5">
            <input
              type="file"
              className="bg-primary w-[128px] h-8 flex rounded p-1 text-white"
              onChange={fileChange}
            />
            {imageUrl != null ? (
              <button
                onClick={() => {
                  setFileName("");
                  setImageUrl(null);
                }}
                className="absolute right-5 "
              >
                <CiTrash className="text-3xl text-red-600" />
              </button>
            ) : (
              <></>
            )}
          </div>

          {fileName && <p>{fileName}</p>}
        </div>
        <FormTableProduct idProduct={idProduct} />
      </div>
    </section>
  );
}
